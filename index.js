require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());
// app.use(express.json());

app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
    );
    res.json(response.data);
    // console.log(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`
    );
    res.json(response.data);
    // console.log(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/comics/:comicId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`
    );
    res.json(response.data);
    // console.log(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "page non trouvée" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server has started on port ${process.env.PORT}`);
});
