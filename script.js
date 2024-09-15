document.getElementById('emergency-sos').addEventListener('click', function() {
    alert('Emergency SOS activated!');
    // Add functionality to send SOS alert
});

document.getElementById('share-location').addEventListener('click', function() {
    alert('Location sharing activated!');
    // Add functionality to share live location
});

document.getElementById('start-sound-recognition').addEventListener('click', function() {
    alert('Sound recognition started!');
    // Add functionality to start sound recognition
});

document.getElementById('find-route').addEventListener('click', function() {
    alert('Finding safest route!');
    // Add functionality to find safest route
});
document.getElementById('start-sound-recognition').addEventListener('click', function() {
    window.location.href = 'sound-recognition.html';
});
document.getElementById('share-location').addEventListener('click', function() {
    window.location.href = 'live-location.html';
});
document.getElementById('start-video-recording').addEventListener('click', function() {
    window.location.href = 'video-recording.html';
});
document.getElementById('emergency-sos').addEventListener('click', function() {
    fetch('/sos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: 'SOS Alert!' })
    }).then(response => {
        if (response.ok) {
            alert('SOS request sent!');
        }
    }).catch(error => {
        console.error('Error sending SOS:', error);
    });
});

document.getElementById('share-location').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            fetch('/location', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ latitude, longitude })
            }).then(response => {
                if (response.ok) {
                    alert('Location shared!');
                }
            }).catch(error => {
                console.error('Error sharing location:', error);
            });
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});


