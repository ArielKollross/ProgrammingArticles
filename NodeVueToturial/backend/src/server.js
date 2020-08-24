const app = require('./app');

const port = 3333;
const ip = 'localhost';

app.listen(port, ip, () => {
  console.log(`Server is running on http://${ip}:${port}`);
  console.log('Kill sever with: ctrl + c');
});