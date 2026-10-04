const http = require('http');
const fs = require('fs');
const path = require('path');
const root = process.cwd();
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.jfif': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.mp4': 'video/mp4' };
http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const target = path.resolve(root, `.${pathname}`);
  if (!target.startsWith(root + path.sep) && target !== root) return response.writeHead(403).end('Forbidden');
  fs.readFile(target, (error, content) => {
    if (error) return response.writeHead(404).end('Not found');
    response.writeHead(200, { 'Content-Type': types[path.extname(target).toLowerCase()] || 'application/octet-stream' });
    response.end(content);
  });
}).listen(4173, '127.0.0.1', () => console.log('Serving current workspace on http://127.0.0.1:4173'));
