document.addEventListener('DOMContentLoaded', function () {
    // Video data embedded directly into the HTML
    const videoData = [
        {
            "title": "Formation 1",
            "description": "Description for Formation 1",
            "path": "videos/formation1.mp4"
        },
        {
            "title": "Formation 2",
            "description": "Description for Formation 2",
            "path": "videos/formation2.mp4"
        }
        // Add more video entries as needed
    ];

    let currentVideoIndex = 0;

    function updateVideo() {
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.src = videoData[currentVideoIndex].path;

        const videoTitle = document.getElementById('videoTitle');
        const videoDescription = document.getElementById('videoDescription');
        videoTitle.textContent = videoData[currentVideoIndex].title;
        videoDescription.textContent = videoData[currentVideoIndex].description;
    }

    function nextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videoData.length;
        updateVideo();
    }

    function prevVideo() {
        currentVideoIndex = (currentVideoIndex - 1 + videoData.length) % videoData.length;
        updateVideo();
    }

    // Initial video update
    updateVideo();

    // Event listeners for next and previous buttons
    document.getElementById('nextBtn').addEventListener('click', nextVideo);
    document.getElementById('prevBtn').addEventListener('click', prevVideo);
});
