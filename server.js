require('dotenv')
.config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  .then(() => console.log('Connected to MongoDB'))
  .catch(e => console.log(e));
mongoose.set('debug', true);

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
}

// Routes for API and viewer
app.use(routes);



// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
