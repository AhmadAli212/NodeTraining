import express from 'express';

const app = express();
const port = 3000;

const userRoutes = require('./routes/userRoutes');

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});