document.addEventListener('DOMContentLoaded', function () {
    const playlist = [
        {
            "title": "Formation 1",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "path_video": "videos/formation1.mp4",
            "path_pdf": "pdf/pdf1.pdf",
        },
        {
            "title": "Formation 2",
            "description": "Description for Formation 2",
            "path_video": "videos/formation2.mp4",
            "path_pdf": "pdf/pdf2.pdf"
        },
        // Add more video entries to the playlist as needed
    ];

    let currentVideoIndex = 0;

    function updateVideo() {
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.src = playlist[currentVideoIndex].path_video;

        const videoTitle = document.getElementById('videoTitle');
        const videoDescription = document.getElementById('videoDescription');
        videoTitle.textContent = playlist[currentVideoIndex].title;
        videoDescription.textContent = playlist[currentVideoIndex].description;
    }

    function updatePdf() {
        const pdfViewerIframe = document.getElementById('pdfViewerIframe');
        pdfViewerIframe.src = playlist[currentVideoIndex].path_pdf;
    }

    function nextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % playlist.length;
        updateVideo();
        updatePdf();
    }

    function prevVideo() {
        currentVideoIndex = (currentVideoIndex - 1 + playlist.length) % playlist.length;
        updateVideo();
        updatePdf();
    }

    // Initial video update
    updateVideo();
    updatePdf();

    // Event listeners for next and previous buttons
    document.getElementById('nextBtn').addEventListener('click', nextVideo);
    document.getElementById('prevBtn').addEventListener('click', prevVideo);

    // Initially hide the PDF viewer
    document.getElementById('pdfViewer').style.display = 'none';
});

function togglePdfViewer() {
    var pdfViewer = document.getElementById('pdfViewer');
    var videoContainer = document.getElementById('videoContainer');

    if (pdfViewer.style.display === 'none' || pdfViewer.style.display === '') {
        pdfViewer.style.display = 'block';
        videoContainer.style.width = '50%';
        videoContainer.style.margin = '20px';
    } else {
        pdfViewer.style.display = 'none';
        videoContainer.style.width = '100%';
        videoContainer.style.margin = 'auto';
    }
}