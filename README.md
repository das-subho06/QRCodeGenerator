<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>QR Code Generator - Project README</title>
  <style>
    body {
      font-family: "Segoe UI", sans-serif;
      background-color: #f4f6f8;
      margin: 0;
      padding: 20px;
      color: #333;
      line-height: 1.6;
    }

    .container {
      max-width: 800px;
      margin: auto;
      background: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    h1, h2 {
      color: #2c3e50;
    }

    code {
      background-color: #eef;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.95em;
    }

    pre {
      background-color: #f0f0f0;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }

    img {
      max-width: 100%;
      border-radius: 8px;
    }

    .screenshot {
      text-align: center;
      margin: 20px 0;
    }

    footer {
      margin-top: 40px;
      font-size: 0.9em;
      text-align: center;
      color: #777;
    }

    ul {
      list-style: disc;
      margin-left: 20px;
    }

    a {
      color: #0066cc;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

  </style>
</head>
<body>
  <div class="container">
    <h1>📱 QR Code Generator</h1>
    <p>A lightweight and user-friendly QR Code Generator built using <strong>React + Vite</strong>. It supports generating QR codes from any plain text or URL.</p>

    <h2>✨ Features</h2>
    <ul>
      <li>Generate QR codes in real time</li>
      <li>Accepts both plain text and URLs</li>
      <li>Fast and responsive UI with React + Vite</li>
      <li>Uses the free <a href="https://goqr.me/api/" target="_blank">QR Code API</a></li>
    </ul>

    <h2>🛠️ Tech Stack</h2>
    <ul>
      <li>React (via Vite)</li>
      <li>JavaScript (ES6+)</li>
      <li>HTML & CSS</li>
    </ul>

    <h2>🚀 Getting Started</h2>
    <pre><code>git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npm run dev</code></pre>

    <p>Then open <code>http://localhost:5173</code> in your browser.</p>

    <div class="screenshot">
      <h2>📸 Screenshot</h2>
      <img src="./screenshots/app-preview.png" alt="QR Code Generator Screenshot" />
      <p><em>Example: QR code generated for "https://openai.com"</em></p>
    </div>

    <h2>📁 Project Structure</h2>
    <pre><code>qr-code-generator/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── components/
│       └── QRGenerator.jsx
├── screenshots/
│   └── app-preview.png
├── index.html
├── package.json
└── readme.html
</code></pre>

    <h2>🙋‍♀️ Author</h2>
    <p><strong>Subhashree Das</strong></p>
    <p>
      🔗 <a href="https://www.linkedin.com/in/your-link" target="_blank">LinkedIn</a> • 
      <a href="https://github.com/your-username" target="_blank">GitHub</a>
    </p>

    <footer>
      <p>&copy; 2025 Subhashree Das • MIT License</p>
    </footer>
  </div>
</body>
</html>
