const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const spotSchema = new mongoose.Schema({
  name: String,
  location: String,
  category: String,
  rating: Number,
  description: String,
  mapLocation: String,
  imageUrl: String,
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Spot = mongoose.model('Spot', spotSchema);

app.get('/api/spots', async (req, res) => {
  const spots = await Spot.find().sort({ createdAt: -1 });
  res.json(spots);
});

app.post('/api/spots', async (req, res) => {
  try {
    const data = req.body;
    // Spot is verified only if both mapLocation and imageUrl are provided
    if (data.mapLocation && data.imageUrl) {
      data.isVerified = true;
    } else {
      data.isVerified = false;
    }
    const spot = new Spot(data);
    await spot.save();
    res.status(201).json(spot);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add spot' });
  }
});

app.delete('/api/spots/:id', async (req, res) => {
  await Spot.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

app.listen(5000, () => console.log('Server running on port 5000'));