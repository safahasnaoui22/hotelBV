require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoutes.js');
const roomRoutes = require('./routes/roomRoutes.js');

const Room = require('./models/roomModel.js');
const app = express();
const multer = require('multer');
const path = require('path');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, welcome to the Nova API!');
});

app.use('/api/auth', authRouter);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save uploaded files in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`); // Append timestamp to the filename to ensure uniqueness
  },
});

// Multer instance
const upload = multer({ storage });

// Route to create a new room with image uploads
app.post('/api/rooms', async (req, res) => {
  try {
    const { roomNumber, type, price, maxPerson, description, isAvailable } = req.body;

    const room = new Room({
      roomNumber,
      type,
      price,
      maxPerson,
      description,
      isAvailable,
    });
    
    await room.save();
    res.status(201).json(room);
  } catch (error) {
    console.error('Error creating room:', error);
    res.status(500).json({ error: 'An error occurred while creating the room' });
  }
});


// Route to get all rooms
app.get('/api/rooms', async (req, res) => {
    try {
      const rooms = await Room.find();
      res.json(rooms);
    } catch (error) {
      console.error('Error getting rooms:', error);
      res.status(500).json({ error: 'An error occurred while getting the rooms' });
    }
  });  

// Route to get a room by ID
app.get('/api/rooms/:id', async (req, res) => {
    try {
      const room = await Room.findById(req.params.id);
      if (!room) {
        return res.status(404).json({ error: 'Room not found' });
      }
      res.json(room);
    } catch (error) {
      console.error('Error getting room by ID:', error);
      res.status(500).json({ error: 'An error occurred while getting the room' });
    }
  });
 
// Route to update a room by ID
app.put('/api/rooms/:id', async (req, res) => {
    try {
      const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!room) {
        return res.status(404).json({ error: 'Room not found' });
      }
      res.json(room);
    } catch (error) {
      console.error('Error updating room by ID:', error);
      res.status(500).json({ error: 'An error occurred while updating the room' });
    }
  });
  
// Route to delete a room by ID
app.delete('/api/rooms/:id', async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.json({ message: 'Room deleted successfully' });
  } catch (error) {
    console.error('Error deleting room by ID:', error);
    res.status(500).json({ error: 'An error occurred while deleting the room' });
  }
});




const bookingSchema = new mongoose.Schema({
  userData: {
      phoneNumber: { type: Number, },
      firstName: { type: String,  },
      lastName: { type: String,},
      email: { type: String, },
      gender: { type: String,  },
      checkin: { type: String,},
      checkout: { type: String,  }
  },
  bookingDetails: {
      checkInDate: { type: Date,  },
      checkOutDate: { type: Date,  },
      numberOfNights: { type: Number,},
      adults: { type: String,  },
      kids: { type: String, },
      rooms: { type: Number,  },
      selectedRoomType: { type: String,  },
      totalPrice: { type: Number,  }
  }
});

const Booking = mongoose.model('Booking', bookingSchema);


app.post('/api/bookings', async (req, res) => {
  try {
    const { userData, bookingDetails } = req.body;

    const booking = new Booking({
      userData,
      bookingDetails,
    });

    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'An error occurred while creating the booking' });
  }
});


app.get('/api/bookings', async (req, res) => {
  try {
    // Fetch all bookings data from the database
    const bookings = await Booking.find();
    // Send the bookings data as a JSON response
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    // If there's an error, send a 500 status code with an error message
    res.status(500).json({ error: 'An error occurred while fetching the bookings' });
  }
});




app.get('/api/bookings/:id', async (req, res) => {
  try {
    // Extract the booking ID from the request parameters
    const bookingId = req.params.id;
    // Find the booking in the database by its ID
    const booking = await Booking.findById(bookingId);
    
    // If the booking is not found, send a 404 status code with an error message
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // If the booking is found, send the booking data as a JSON response
    res.status(200).json(booking);
  } catch (error) {
    console.error('Error fetching booking:', error);
    // If there's an error, send a 500 status code with an error message
    res.status(500).json({ error: 'An error occurred while fetching the booking' });
  }
});



mongoose.connect('mongodb+srv://nova:nova@cluster0.haxquto.mongodb.net/')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Failed to connect to MongoDB:', error));

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

const PORT =  8080;
app.listen(PORT, () => {
    console.log(`Nova Running on port ${PORT}`);
});
