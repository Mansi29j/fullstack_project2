# GullyBites 🍛

A web application for discovering and sharing local food spots in your neighborhood. Find hidden gems, street food vendors, and local eateries with community-verified recommendations.


## Features

- **Discover Local Spots**: Browse a curated collection of food spots with ratings and descriptions
- **Community-Driven**: Add new spots and help verify them with location and image data
- **Search & Filter**: Find spots by name, category, or location
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: See new spots as they're added by the community

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **CORS** for cross-origin requests
- **dotenv** for environment variables

### Frontend
- **HTML5** with modern CSS
- **Vanilla JavaScript** (no frameworks)
- **Google Fonts** (Syne & DM Sans)
- **Responsive design** with CSS Grid

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fullstack_project2
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory:
   ```
   MONGO_URI=mongodb://localhost:27017/gullybitez
   # Or use your MongoDB Atlas connection string
   PORT=5000
   ```

4. **Start the Server**
   ```bash
   node server.js
   ```
   The server will run on http://localhost:5000

5. **Open Frontend**
   Open `index.html` in your browser or serve it with a local server:
   ```bash
   # Using Python
   python -m http.server 3000
   
   # Or using Node.js
   npx serve .
   ```

## Usage

1. **View Spots**: Browse the grid of food spots on the homepage
2. **Search**: Use the search bar to find specific spots by name or location
3. **Filter**: Click filter buttons to view spots by category (Chai, Street Food, Biryani, Rolls, Sweets, Juice)
4. **Add New Spot**: Click the "+ Add a Spot" button to contribute a new location
5. **Verify Spots**: Spots become verified (✅ badge) when both map location and image are provided
6. **Delete Spots**: Remove spots using the "Remove" button on each card

## API Endpoints

### GET /api/spots
Retrieve all food spots, sorted by creation date (newest first).

**Response:**
```json
[
  {
    "_id": "spot_id",
    "name": "Spot Name",
    "location": "Location",
    "category": "Category",
    "rating": 4,
    "description": "Description of the spot",
    "mapLocation": "Google Maps URL",
    "imageUrl": "Image URL",
    "isVerified": true,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### POST /api/spots
Add a new food spot.

**Request Body:**
```json
{
  "name": "Spot Name",
  "location": "Location/Area",
  "category": "Category",
  "rating": 4,
  "description": "What's special about this place?",
  "mapLocation": "Google Maps URL (optional)",
  "imageUrl": "Image URL (optional)"
}
```

**Response:** The created spot object with verification status.

### DELETE /api/spots/:id
Delete a spot by ID.

**Response:**
```json
{
  "message": "Deleted"
}
```

## Categories

The following food categories are available:
- ☕ Chai
- 🌮 Street Food
- 🍚 Biryani
- 🌯 Rolls
- 🍬 Sweets
- 🥤 Juice

## Project Structure

```
fullstack_project2/
├── index.html          # Frontend (HTML + CSS + JavaScript)
├── server.js           # Express backend server
├── package.json        # Node.js dependencies
├── package-lock.json   # Dependency lock file
├── .env               # Environment variables (create this)
└── README.md          # Project documentation
```

## Database Schema

### Spot Model
```javascript
{
  name: String,           // Name of the food spot
  location: String,       // Area/Location
  category: String,       // Food category
  rating: Number,         // Star rating (1-5)
  description: String,    // Description of the spot
  mapLocation: String,    // Google Maps link
  imageUrl: String,       // Image URL
  isVerified: Boolean,    // Verified if both map and image provided
  createdAt: Date        // Creation timestamp
}
```

## Design System

### Color Palette
- **Background**: `#fdf6ee` (Cream)
- **Primary**: `#e8622a` (Orange)
- **Secondary**: `#f28c5e` (Light Orange)
- **Dark**: `#3d2b1f` (Brown)
- **Accent**: `#f5e6d3` (Light Cream)

### Typography
- **Headers**: Syne (700-800 weight)
- **Body**: DM Sans (300-500 weight)

## Important Notes

⚠️ **Before Running:**
1. Ensure MongoDB is running locally or provide a valid MongoDB Atlas connection string
2. The frontend API calls point to `http://localhost:5000/api/spots` - adjust if needed
3. Both backend and frontend must be running simultaneously

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Future Enhancements

- 👤 User authentication and profiles
- 📤 Image upload functionality
- 🗺️ Google Maps integration
- ⭐ Advanced review and rating system
- 📱 Mobile app version
- 🔍 Advanced search filters with distance
- 💬 User comments and community discussions

## Contact

**Author**: Mansi Jangid | CSE Student

---

Made with ❤️ for food lovers! 🍛✨
