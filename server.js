const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for community support page
app.get('/community.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'community.html'));
});

// Route for contact page
app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Route for live location page
app.get('/live-location.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'live-location.html'));
});

// Route for login page
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Route for register page
app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });

// app.post('/emergency-sos', (req, res) => {
//     const { userId, message } = req.body;
    
//     // For now, we'll just log the message and send a response
//     console.log(`Emergency SOS request from user ${userId}: ${message}`);
    
//     res.json({ status: 'success', message: 'SOS alert sent!' });
// });

// // Route for handling safest route requests
// app.post('/safest-route', (req, res) => {
//     const { startLocation, endLocation } = req.body;
    
//     // Dummy response for safest route
//     console.log(`Finding safest route from ${startLocation} to ${endLocation}`);
    
//     res.json({ 
//         status: 'success', 
//         message: 'Safest route calculated!',
//         route: [startLocation, endLocation] // Dummy data
//     });
// });
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle SOS requests
app.post('/emergency-sos', (req, res) => {
    const { userId, message } = req.body;

    // Basic validation
    if (!userId || !message) {
        return res.status(400).json({ message: 'Invalid request' });
    }

    // Here you can add additional logic to process the SOS request
    // For now, just send an acknowledgment
    console.log(`SOS received from user ${userId}: ${message}`);
    res.json({ message: 'SOS sent successfully. Help is on the way!' });
});

// Endpoint to handle safest route requests
app.post('/find-route', (req, res) => {
    const { userId, request } = req.body;

    // Basic validation
    if (!userId || !request) {
        return res.status(400).json({ message: 'Invalid request' });
    }

    // Mock logic to find the safest route
    let routeMessage = 'The safest route is unavailable at the moment.';
    if (request.toLowerCase().includes('safest route')) {
        routeMessage = 'The safest route has been found and is being sent to you.';
    }

    console.log(`Route request received from user ${userId}: ${request}`);
    res.json({ message: routeMessage });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})