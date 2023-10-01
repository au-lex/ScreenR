import React, { useState, useRef } from 'react';
import RecordRTC from 'recordrtc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ScreenRecorder() {
    const [recording, setRecording] = useState(false);
    const [paused, setPaused] = useState(false);
    const [recordRTC, setRecordRTC] = useState(null);
    const [videoURL, setVideoURL] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [timerInterval, setTimerInterval] = useState(null);

    const videoRef = useRef(null);

    const startRecording = async () => {
        try {
            const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
            const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const combinedStream = new MediaStream([...screenStream.getTracks(), ...micStream.getTracks()]);

            const recorder = RecordRTC(combinedStream, { type: 'video' });
            recorder.startRecording();
            setRecordRTC(recorder);
            setRecording(true);
            console.log("Recording...");

            setElapsedTime(0);
            const interval = setInterval(() => {
                setElapsedTime(prevTime => prevTime + 1);
            }, 1000);
            setTimerInterval(interval);

        } catch (error) {
            console.error("Error starting recording:", error);
        }
    };

    const stopRecording = () => {
        if (recordRTC) {
            recordRTC.stopRecording(async () => {
                const blob = recordRTC.getBlob();
                const url = URL.createObjectURL(blob);
                setVideoURL(url);
    
                // Upload to the provided endpoint
                const formData = new FormData();
                formData.append('video', blob, 'recording.webm');

    
                try {
                    const response = await fetch('https://video-api.up.railway.app/api/upload', {
                        method: 'POST',
                        body: formData
                    });
                    
                    if (response.ok) {
                        console.log("Video uploaded successfully.");
                        toast.success("Video uploaded successfully!");  // Success toast notification
                    } else {
                        console.error("Failed to upload video:", await response.text());
                        toast.error("Failed to upload video.");  // Error toast notification
                    }
                } catch (error) {
                    console.error("Error uploading video:", error);
                    toast.error("Error uploading video.");  // Error toast notification
                }
            });
    
            setRecording(false);
            clearInterval(timerInterval);
            setTimerInterval(null);
        }
    };

    const pauseRecording = () => {
        if (recordRTC) {
            recordRTC.pauseRecording();
            setPaused(true);
        }
    };

    const resumeRecording = () => {
        if (recordRTC) {
            recordRTC.resumeRecording();
            setPaused(false);
        }
    };

    const deleteRecording = () => {
        setVideoURL(null);
        if (recordRTC) {
            recordRTC.reset();
        }
    };

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    const copyURLToClipboard = () => {
        navigator.clipboard.writeText(videoURL).then(() => {
            alert("URL copied to clipboard!");
        }).catch(err => {
            console.error("Unable to copy URL", err);
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[500px] w-screen mr-[10rem] bg-gray-100 space-y-6">
            {recording ? (
                <div className="flex flex-col items-center space-y-2">
                    <button onClick={stopRecording} className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none">Stop Recording</button>
                    {paused ? (
                        <button onClick={resumeRecording} className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 focus:outline-none">Resume</button>
                    ) : (
                        <button onClick={pauseRecording} className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 focus:outline-none">Pause</button>
                    )}
                    <button onClick={deleteRecording} className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 focus:outline-none">Delete</button>
                    <div className="text-gray-700">{formatTime(elapsedTime)}</div>
                </div>
            ) : (
                <button onClick={startRecording} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none">Start Recording</button>
            )}

            {videoURL && (
                <div className="flex flex-col items-center space-y-2 w-full max-w-md">
                    <div className="w-full flex items-center space-x-2">
                        <input type="text" value={videoURL} readOnly className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                        <button onClick={copyURLToClipboard} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none">Copy URL</button>
                    </div>
                    <button onClick={() => videoRef.current.play()} className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 focus:outline-none">Play</button>
                    <button onClick={() => videoRef.current.pause()} className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 focus:outline-none">Pause</button>
                    <video ref={videoRef} src={videoURL} controls className="w-full mt-4 border-4 border-blue-500 rounded-md shadow-md"></video>
                </div>
            )}
        </div>
    );
}

export default ScreenRecorder;
