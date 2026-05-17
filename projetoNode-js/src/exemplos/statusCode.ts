const http = require('http');
const app = express();


const server = http.createServer((req, res) => {
    // 1. Send interim 102 Processing status
    // Note: Standard res.writeHead() or res.end() finishes the response.
    // We use raw socket or specific methods for 1xx if supported.
    res.writeHead(102, 'Processing');

    // 2. Simulate long task
    setTimeout(() => {
        // 3. Send final status and data
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Operation completed successfully!');
    }, 5000);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

app.get('/old-path', (req, res) => {
    // Express defaults to 302 if only the path is provided
    res.redirect('/new-path');
});

// Or explicitly:
app.get('/temporary-maintenance', (req, res) => {
    res.redirect(302, '/maintenance-page');
});

app.listen(3000);

app.get('/', (req, res) => {
    try {
        // Risky logic here
        throw new Error('Database connection failed');
    } catch (err) {
        // Send 500 status with a JSON message
        res.status(500).json({
            success: false,
            message: 'Something went wrong on our end.'
        });
    }
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000);
