const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const routes = require("./routes");
const { getAvailableMeta } = require("./utils/meta");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

app.get("/", async (_, res) => {
  try {
    const { categories, genders } = await getAvailableMeta();
    res.render("index", { categories, genders });
  } catch (err) {
    res.status(500).send("Something went wrong.");
  }
});

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
