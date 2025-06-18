const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Schema & Model
const CustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
  },
  { collection: "Customers" } // Force MongoDB to use "customers" as the collection name
);

const CustomerModel = mongoose.model("Customer", CustomerSchema);

// Handle Form Submission
app.post("/api/booking", async (req, res) => {
  try {
    const newData = new CustomerModel(req.body);
    await newData.save();
    res.status(201).send("Data saved!");
  } catch (error) {
    res.status(500).send(error);
  }
});

//Get all bookings
app.get("/api/booking/list", async (req, res) => {
  try {
    const customers = await CustomerModel.find({});
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error });
  }
});


app.listen(5000, () => console.log("Server running on port 5000"));
