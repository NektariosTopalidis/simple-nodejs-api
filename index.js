import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use('/users', usersRoutes);

app.get('/', (req,res) => {
    res.send('Hello from homepage.');
})
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})
