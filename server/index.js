const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const foldersRoute = require('./routes/foldersRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', foldersRoute);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
