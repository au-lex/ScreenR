import React, { useEffect, useState } from 'react'; 

const Fetch = () => {

    const [videos, setVideos] = useState([]);
    const fetchVideos = async () => {
        try {
            const response = await fetch('https://video-api.up.railway.app/api/recordings');
            const videoData = await response.json();
    
            setVideos(videoData.folder_contents);
        } catch (error) {
            console.error("Failed to load videos:", error);
        }
    };
 
useEffect(() => {
    fetchVideos();
}, []);  

console.log(videos, "my videos");
  return (
    <div>



    <div className="flex flex-col items-center justify-center min-h-[500px] w-screen mr-[10rem] bg-gray-100 space-y-6">
        
        {/* {videos.map((video, index) => (
            <video key={index} src={"BlobRecords/sample1.mp4"} controls className="w-full mt-4 border-4
             border-blue-500 rounded-md shadow-md"></video>
        ))} */}
    </div>


    </div>
  )
}

export default Fetch