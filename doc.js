\const http = require('http');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>My Node App</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .container {
      text-align: center;
      padding: 40px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      max-width: 500px;
      width: 90%;
    }

    .emoji { font-size: 60px; margin-bottom: 20px; }

    h1 {
      font-size: 2rem;
      margin-bottom: 10px;
      color: #00d4ff;
    }

    p {
      font-size: 1rem;
      color: rgba(255,255,255,0.7);
      margin-bottom: 30px;
      line-height: 1.6;
    }

    .badge {
      display: inline-block;
      background: #00d4ff;
      color: #000;
      padding: 6px 18px;
      border-radius: 50px;
      font-size: 0.85rem;
      font-weight: bold;
      margin-bottom: 30px;
    }

    .cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 20px;
    }

    .card {
      background: rgba(255,255,255,0.08);
      border-radius: 12px;
      padding: 16px;
      border: 1px solid rgba(255,255,255,0.1);
    }

    .card h3 { font-size: 1.4rem; color: #00d4ff; }
    .card p  { font-size: 0.8rem; margin: 0; color: rgba(255,255,255,0.6); }

    footer {
      margin-top: 30px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.4);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="emoji">🐳</div>
    <h1>Hello from Docker!</h1>
    <p>Your Node.js app is running successfully inside a Docker container.</p>
    <span class="badge">✅ Server is Live</span>

    <div class="cards">
      <div class="card">
        <h3>3000</h3>
        <p>Running Port</p>
      </div>
      <div class="card">
        <h3>Node.js</h3>
        <p>Runtime</p>
      </div>
      <div class="card">
        <h3>Alpine</h3>
        <p>Docker Image</p>
      </div>
      <div class="card">
        <h3>Active</h3>
        <p>Server Status</p>
      </div>
    </div>

    <footer>Running on localhost:3000 inside Docker 🚀</footer>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
