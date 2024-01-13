const http = require('http');

const localhost = 'localhost';
const port = 3000;

const requstListener = (req, res) => {
  res.end('Hello World');
};

const server = http.createServer(requstListener);

server.listen(port, localhost, () => {
  console.log(`Server is running on http://${localhost}:${port}`);
});
