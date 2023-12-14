// import { playlist } from './constants.js';

// import { playlist } from "./constants";

document.addEventListener('DOMContentLoaded', function () {
    
    const playlist = [
        {
            "title": "Formation 1",
            "description": "Lorem is simply dummy text of the printing and typesetting s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "path_video": "videos/formation1.mp4",
            "path_pdf": "pdf/pdf1.pdf",
        },
        {
            "title": "Formation 2",
            "description": "Description for Formation 2",
            "path_video": "videos/formation2.mp4",
            "path_pdf": "pdf/pdf2.pdf"
        },
        {
            "title": "Formation 3",
            "description": "Description for Formation 2",
            "path_video": "videos/formation2.mp4",
            "path_pdf": "pdf/pdf2.pdf"
        },
        {
            "title": "Formation 4",
            "description": "Description for Formation 4",
            "path_video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "path_pdf": "pdf/pdf2.pdf"
        },
        {
            "title": "Formation 5",
            "description": "Description for Formation 5",
            "path_video": "https://drive.google.com/uc?export=download&id=1Z3KxnDd2eMO3xVGeIHnhQe82xjLiYfwL",
            "path_pdf": "pdf/pdf2.pdf"
        },
    ];
  
    let currentVideoIndex = 0;
    let descriptionExpanded = false;

    function updateDescription() {
        const videoDescription = document.getElementById('videoDescription');
        const toggleDescriptionBtn = document.getElementById('toggleDescriptionBtn');
        const descriptionText = playlist[currentVideoIndex].description;
        if (descriptionExpanded) {
            videoDescription.innerHTML = descriptionText;
            toggleDescriptionBtn.textContent = 'Show less';
        } else {
            const truncatedDescription = descriptionText.substring(0, 150) + '...';
            videoDescription.innerHTML = truncatedDescription;
            toggleDescriptionBtn.textContent = 'Show more';
        }
    }

    function toggleDescription() {
        descriptionExpanded = !descriptionExpanded;
        updateDescription();
    }

    function updateVideo() {
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.src = playlist[currentVideoIndex].path_video;

        const videoTitle = document.getElementById('videoTitle');
        const pageTitle = document.getElementById('pageTitle');
        videoTitle.textContent = playlist[currentVideoIndex].title;
        pageTitle.textContent = playlist[currentVideoIndex].title;

        updateDescription();
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
    function populateVideoList() {
        const videoList = document.getElementById('videoList');
    
        // Clear existing list items
        videoList.innerHTML = "";
    
        // Populate the list with buttons for each video in the playlist
        playlist.forEach((video, index) => {
            const listItem = document.createElement('li');
            const playIcon = document.createElement('i');
            
            // Add Font Awesome classes for the play icon
            playIcon.classList.add('fas', 'fa-play', 'play-icon');
    
            listItem.appendChild(playIcon);
    
            // Add a click event listener to switch to the corresponding video
            listItem.addEventListener('click', function () {
                currentVideoIndex = index;
                updateVideo();
                updatePdf();
    
                // Remove "active" class from all items
                document.querySelectorAll('.video-list li').forEach(item => {
                    item.classList.remove('active');
                });
    
                // Add "active" class to the clicked item
                listItem.classList.add('active');
            });
    
            // Create a span for the video title
            const titleSpan = document.createElement('span');
            titleSpan.textContent = video.title;
    
            // Append the title span to the list item
            listItem.appendChild(titleSpan);
    
            // Append the list item to the video list
            videoList.appendChild(listItem);
        });
    }
    
    
    // Initial video update
    updateVideo();
    updatePdf();
    populateVideoList();

    // updateDescription()
    // Event listeners for next and previous buttons
    document.getElementById('nextBtn').addEventListener('click', nextVideo);
    document.getElementById('prevBtn').addEventListener('click', prevVideo);

    // Initially hide the PDF viewer
    document.getElementById('pdfViewer').style.display = 'none';
    document.getElementById('toggleDescriptionBtn').addEventListener('click', toggleDescription);

});


function togglePdfViewer() {
    var pdfViewer = document.getElementById('pdfViewer');
    var videoContainer = document.getElementById('videoContainer');

    if (pdfViewer.style.display === 'none' || pdfViewer.style.display === '') {
        pdfViewer.style.display = 'block';
        videoContainer.style.width = '50%';
        // videoContainer.style.margin = '20px';
    } else {
        pdfViewer.style.display = 'none';
        videoContainer.style.width = '50%';
        // videoContainer.style.margin = 'auto';
    }
    
}

function isPrime(n) {
    if (n < 2) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function primeList(a, b) {
    const primes = [];
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function remainsList(a, b) {
    const primes = primeList(a, b);
    const remains = [];
    for (let i = 0; i < primes.length - 1; i++) {
        remains.push(Math.floor((primes[i + 1] - primes[i]) / 2));
    }
    return remains;
}

function romainSigma(a, b) {
    let sum = 0;
    const remains = remainsList(a, b);
    for (let i = 0; i < remains.length; i++) {
        sum += remains[i];
    }
    return sum;
}

function remainToday(a, b, r) {
    const remains = remainsList(a, b);
    if (r > remains.length) {
        // r = Math.floor(Math.random() * remains.length);
        r = Math.floor(remains.length / 2) + 1;
    }
    return remains[r] + romainSigma(a, b);
}

// function unlockPage() {
//     var unlockInput = document.getElementById('unlockInput').value;
//     var unlockCode = remainToday(1, 2023, 100); // Use your desired range and value for 'r'
//     if (unlockInput === unlockCode.toString()) {
//         document.getElementById('unlockPage').style.display = 'none';
//         document.getElementById('learningPage').style.display = 'block';
//     } else {
//         alert('Incorrect code. Please try again.');
//     }
// }


function unlockPage() {
    var unlockInput = document.getElementById('unlockInput').value;

    // Concatenate the day and month of today's date
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; // Months are zero-based, so we add 1
    var concatenatedCode = parseInt(day.toString() + month.toString(), 10);

    if (unlockInput === remainToday(1, concatenatedCode, 1).toString()) {
        document.getElementById('unlockPage').style.display = 'none';
        document.getElementById('learningPage').style.display = 'block';
    } else {
        alert('Incorrect code. Please try again.'+getCurrentTemperature());
    }
}


async function getCurrentTemperature() {
    const apiKey = 'cf202595c675b9cb8624c27eb3ddcbbe';
    const city = 'kenitra'; // Replace with the name of your city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            // Assuming the temperature is available in the 'main' object
            const temperature = Math.round(data.main.temp);
            return temperature;
        } else {
            console.error('Failed to fetch temperature:', data.message);
            return null;
        }
    } catch (error) {
        console.error('Error fetching temperature:', error.message);
        return null;
    }
}
