const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const historyRoutes = require('./routes/historial');

const app = express();
const PORT = process.env.PORT || 3000; // Changed to 3000, as 27017 is MongoDB's default port

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/api/historial', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connection successful'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/historial', historyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
