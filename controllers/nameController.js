const Name = require("../models/Name");

exports.getAllNames = async (req, res) => {
  const { category, gender } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (gender) filter.gender = gender;

  try {
    const names = await Name.find(filter);
    res.json(names);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addNewName = async (req, res) => {
  const { name, gender, category } = req.body;

  const newName = new Name({ name, gender, category });
  try {
    const savedName = await newName.save();
    res.status(201).json(savedName);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getRandomName = async (req, res) => {
  const { category, gender } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (gender) filter.gender = gender;

  try {
    const names = await Name.find(filter);
    const randomName = names[Math.floor(Math.random() * names.length)];
    res.json(randomName);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getRandomNameByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const names = await Name.find({ category });
    const randomName = names[Math.floor(Math.random() * names.length)];
    res.json(randomName);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getRandomNameByGender = async (req, res) => {
  const { gender } = req.params;

  try {
    const names = await Name.find({ gender });
    const randomName = names[Math.floor(Math.random() * names.length)];
    res.json(randomName);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
