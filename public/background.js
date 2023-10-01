let recordRTC = null;
let isRecording = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.action) {
        case "startRecording":
            startRecording();
            break;

        case "stopRecording":
            stopRecording();
            sendResponse({ status: "stopped" });
            break;

        case "getRecordingStatus":
            sendResponse({ status: isRecording ? "recording" : "stopped" });
            break;

        default:
            console.error("Unrecognized action:", message.action);
    }
});

function startRecording() {
    if (isRecording) return;  // Already recording

    // Your recording setup logic...
    isRecording = true;
}

function stopRecording() {
    if (!isRecording) return;  // Not currently recording

    // Your recording stop logic...
    isRecording = false;
}
