document.addEventListener('DOMContentLoaded', function () {
    
    const playlist = [
        {
            "title": "1.1 Introduction",
            "description": "Introduction",
            "path_video": "https://drive.google.com/uc?id=1Q6GyHC-ozPG8YvMAadHkOke1xrFegSXf",
            "path_pdf": "",
        },
        {
            "title": "1.2 Création d'un projet Angular",
            "description": "Création d'un projet Angular",
            "path_video": "https://drive.google.com/uc?id=1zCsW8a-TqHg878BTZUvNrhy5J7boChVL",
            "path_pdf": "pdf/pdf2.pdf"
        },
        {
            "title": "1.3 Arborescence d'un projet Angular",
            "description": "Arborescence d'un projet Angular",
            "path_video": "https://drive.google.com/uc?id=1rVZAK89uDqPEPL1fQSIm1MxtlE-V8Yny",
            "path_pdf": ""
        },
        {
            "title": "1.4 Integrer Bootstrap à Angular",
            "description": "Integrer Bootstrap à Angular",
            "path_video": "https://drive.google.com/uc?id=1IyGRoWITCHWCfzEc3yIuR8LUdxi9nbMZ",
            "path_pdf": ""
        },
        {
            "title": "2.1 Architecture Angular les Modules",
            "description": "Architecture Angular les Modules",
            "path_video": "https://drive.google.com/uc?id=1TrjiC8ECDG4rhq55s8ryr-ZfMZ963_pt",
            "path_pdf": ""
        },

        {
            "title": "2.2 Angular les Composants",
            "description": "Angular les Composants",
            "path_video": "https://drive.google.com/uc?id=1YLBci6xN-xFpNKN7_XdJH0icgnsF-PoX",
            "path_pdf": ""
        },
        {
            "title": "2.3 Angular Créer votre premier composant",
            "description": "Angular Créer votre premier composant",
            "path_video": "https://drive.google.com/uc?id=1ClqILOlA710_48LIy_IbWVSBTyxS-3YG",
            "path_pdf": ""
        },
        {
            "title": "2.4 Angular le DataBinding",
            "description": "Dans cette vidéo, nous abordons une différence majeure pour les développeurs qui ont installé la dernière version d'Angular. Vous avez peut-être remarqué l'absence du fichier app.module.ts, une modification introduite à partir d'Angular 9. Ne vous inquiétez pas, nous avons la solution ! Regardez la vidéo pour comprendre cette transition, et découvrez comment adapter votre structure de projet. Nous allons également partager la solution détaillée dans un document PDF téléchargeable, pour que vous puissiez facilement suivre les étapes. Restez à jour avec les dernières évolutions d'Angular et optimisez votre workflow de développement.",
            "path_video": "https://drive.google.com/uc?export=download&id=1uoJ53a8xz-hhW6s5LCIOveohsYZcogIS",
            "path_pdf": "pdf/app_module_issues.pdf"
        },
        {
            "title": "2.5 Angular Interpolation",
            "description": "Angular Interpolation",
            "path_video": "https://drive.google.com/uc?export=download&id=16P9vmk9sqrq2sxf1iS4-eufLtwHBmJQr",
            "path_pdf": ""
        },
        {
            "title": "2.6 Angular Property Binding",
            "description": "Angular Property Binding",
            "path_video": "https://drive.google.com/uc?export=download&id=16mfQsrun6zOfLHj31IuvFQQN7pUjN7wi",
            "path_pdf": ""
        },
        {
            "title": "2.7 Angular Event Binding",
            "description": "Angular Event Binding",
            "path_video": "https://drive.google.com/uc?export=download&id=1hpMPjJ2ErAHTQ3DC3kC58VElztvNBoWb",
            "path_pdf": ""
        },
        {
            "title": "2.9 Correction Workshop 1- Composant Web",
            "description": "Correction Workshop 1- Composant Web",
            "path_video": "https://drive.google.com/uc?export=download&id=1-Hkf2TC_PSKtxprLnzCNibLwRAePpNRL",
            "path_pdf": ""
        },
        {
            "title": "3.1 Composants imbriqués",
            "description": "Composants imbriqués",
            "path_video": "https://drive.google.com/uc?export=download&id=1XTdLLiAEyDFWySvqT9GfZ6KPskmpQ98-",
            "path_pdf": ""
        },
        {
            "title": "3.2 Correction Workshop 2 Part 1",
            "description": "Correction Workshop 2 Part 1",
            "path_video": "https://drive.google.com/uc?export=download&id=1kSxeovF7U70A91uo3wWUtaRSoKy4byNP",
            "path_pdf": ""
        },
        {
            "title": "3.3 Correction Workshop 2 Part 2",
            "description": "Correction Workshop 2 Part 2",
            "path_video": "https://drive.google.com/uc?export=download&id=1qg5oWBC9DBepM4DltfcLe5d5XPcbzX3l",
            "path_pdf": ""
        }, 
        {
            "title": "4.1 Template Driven Form",
            "description": "Template Driven Form",
            "path_video": "https://drive.google.com/uc?export=download&id=1hMpSjGlT9lTQs9RbuLZcPlpqQso5f-_q",
            "path_pdf": ""
        }, 
        {
            "title": "4.2 Correction Workshop 3",
            "description": "Correction Workshop 3 , pour cette video est sur google drive voici le lien :https://drive.google.com/uc?export=download&id=1UPiv7RvRx6xmthaB-RLc80Gv0JnRmkjS",
            "path_video": "https://drive.google.com/uc?export=download&id=1UPiv7RvRx6xmthaB-RLc80Gv0JnRmkjS",
            "path_pdf": ""
        }, 

        {
            "title": "5.1 Angular routing: mise en place d'un système de routing",
            "description": "Angular routing: mise en place d'un système de routing",
            "path_video": "https://drive.google.com/uc?export=download&id=1q0-q3L5Za_ZlyE8IQbUm9zMhBfzu6ns7",
            "path_pdf": ""
        }, 

        {
            "title": "5.2 Correction Workshop 4",
            "description": "Correction Workshop 4",
            "path_video": "https://drive.google.com/uc?export=download&id=1XdcrcRVkPWfTfhWPQtTnlcJ3Kf0U86Gy",
            "path_pdf": ""
        }, 

        {
            "title": "6.1 Correction Workshop numéro 5",
            "description": "Correction Workshop numéro 5 , voici le lien de la video :     https://drive.google.com/file/d/1brzlzXPi4EtyOIUvhR4Uei-xkgSD60vn/view ",
            "path_video": "https://drive.google.com/file/d/1brzlzXPi4EtyOIUvhR4Uei-xkgSD60vn/view?usp=sharing",
            "path_pdf": ""
        }, 

        {
            "title": "7.1 HttpClient & Rest Api",
            "description": "HttpClient & Rest Api",
            "path_video": "https://drive.google.com/uc?export=download&id=1n2akbnsf3I5QwNhBMKYnusAG0P6iwOhl",
            "path_pdf": ""
        }, 

        {
            "title": "7.2 REST Api & HttpClient : GET",
            "description": "REST Api & HttpClient : GET",
            "path_video": "https://drive.google.com/uc?export=download&id=1Hn_kEdQmR08Q0RbgCLX9IfZsZriA5kyd",
            "path_pdf": ""
        }, 

        {
            "title": "7.3 REST Api & HttpClient: POST",
            "description": "REST Api & HttpClient : POST",
            "path_video": "https://drive.google.com/uc?export=download&id=1vLhR0BWZZ2F_2xzYAeMNHXTQ6aFrAZx_",
            "path_pdf": ""
        }, 
    ];

   const neverShowModal = localStorage.getItem('neverShowModal');
    if (!neverShowModal) {
        // Show the new year modal after a delay (adjust the delay as needed)
        setTimeout(function () {
            document.getElementById('newYearModal').style.display = 'block';
        }, 2000); // Display modal after 2 seconds (adjust as needed)
    }

    let currentVideoIndex = 0;
    let descriptionExpanded = false;
    const storedIndex = localStorage.getItem('currentVideoIndex');
    if (storedIndex !== null) {
        currentVideoIndex = parseInt(storedIndex, 10);
    }
    function saveCurrentVideoIndex() {
        localStorage.setItem('currentVideoIndex', currentVideoIndex);
    }
    
    function updateDescription() {
        const videoDescription = document.getElementById('videoDescription');
        const toggleDescriptionBtn = document.getElementById('toggleDescriptionBtn');
        const descriptionText = playlist[currentVideoIndex].description;
    
        // Regular expression to match URLs
        const urlRegex = /(https?:\/\/[^\s]+)/g;
    
        // Replace URLs with clickable links
        const formattedDescription = descriptionText.replace(urlRegex, '<a href="$1" target="_blank">$1</a>');
    
        if (descriptionExpanded) {
            videoDescription.innerHTML = formattedDescription;
            toggleDescriptionBtn.textContent = 'Show less';
        } else {
            const truncatedDescription = formattedDescription.substring(0, 150) + '...';
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
        const downloadBtn = document.getElementById('downloadBtn');
        
        if (playlist[currentVideoIndex].path_video) {
            // Enable the download button if a video path is available
            downloadBtn.disabled = false;
        } else {
            // Disable the download button if no video path is available
            downloadBtn.disabled = true;
        }

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
        saveCurrentVideoIndex();

    }

    function prevVideo() {
        currentVideoIndex = (currentVideoIndex - 1 + playlist.length) % playlist.length;
        updateVideo();
        updatePdf();
        saveCurrentVideoIndex();

    }
    function downloadVideo() {
        const videoUrl = playlist[currentVideoIndex].path_video;
        const videoTitle = playlist[currentVideoIndex].title;
    
        // Fetch the video content as a Blob
        fetch(videoUrl)
            .then(response => response.blob())
            .then(blob => {
                // Create a Blob object from the fetched data
                const blobUrl = URL.createObjectURL(blob);
    
                // Create an anchor element to trigger the download
                const downloadLink = document.createElement('a');
                downloadLink.href = blobUrl;
                downloadLink.download = `${videoTitle}.mp4`;
    
                // Trigger a click on the anchor element
                downloadLink.click();
    
                // Revoke the Blob URL to free up resources
                URL.revokeObjectURL(blobUrl);
            })
            .catch(error => {
                console.error('Error fetching video:', error.message);
            });
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
    document.getElementById('downloadBtn').addEventListener('click', downloadVideo);

    // Initially hide the PDF viewer
    document.getElementById('pdfViewer').style.display = 'none';
    document.getElementById('toggleDescriptionBtn').addEventListener('click', toggleDescription);

});

function closeNewYearModal() {
    document.getElementById('newYearModal').style.display = 'none';
}

function neverShowModalAgain() {
    // Save the user's preference in local storage
    localStorage.setItem('neverShowModal', 'true');
    closeNewYearModal(); // Close the modal immediately
}

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

const maxAttempts = 3;  // Nombre maximal d'essais autorisés
let unlockAttempts = 0;  // Initialiser le compteur d'essais

function unlockPage() {
    document.getElementById('learningPage').style.display = 'block';
    document.getElementById('unlockPage').style.display = 'none';

    // var unlockInput = document.getElementById('unlockInput').value;
    // // Concaténer le jour et le mois de la date d'aujourd'hui
    // var today = new Date();
    // var day = today.getDate();
    // var month = today.getMonth() + 1; // Les mois sont basés sur zéro, donc on ajoute 1
    // var concatenatedCode = parseInt(day.toString() + month.toString(), 10);
    // // console.log(getCurrentTemperature())
    // console.log(remainToday(1, concatenatedCode*2, 2024).toString())

    // // Vérifier si le code est correct
    // if (unlockInput === remainToday(1, concatenatedCode*2, 2024).toString()) {
    //     document.getElementById('unlockPage').style.display = 'none';
    //     document.getElementById('learningPage').style.display = 'block';
    // } else {
    //     // Incrémenter le compteur d'essais
    //     unlockAttempts++;

    //     // Vérifier si le nombre maximal d'essais a été atteint
    //     if (unlockAttempts >= maxAttempts) {
    //         // Bloquer l'entrée après le nombre maximal d'essais
    //         document.getElementById('unlockInput').disabled = true;

    //         // Afficher un message demandant de contacter Websolvus
    //         alert('Code incorrect. Veuillez contacter Websolvus pour obtenir de l\'assistance.');
    //     } else {
    //         alert('Code incorrect. Veuillez réessayer.');
    //     }
    // }
}


async function getCurrentTemperature() {
    const apiKey = 'cf202595c675b9cb8624c27eb3ddcbbe';
    const city = 'kénitra'; // Replace with the name of your city
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
