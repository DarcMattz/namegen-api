const express = require("express");
const router = express.Router();
const nameController = require("../controllers/nameController");

router.get("/names", nameController.getAllNames);
// router.put("/names", nameController.addNewName);
router.get("/random", nameController.getRandomName);
router.get("/random/category/:category",nameController.getRandomNameByCategory);
router.get("/random/gender/:gender", nameController.getRandomNameByGender);

module.exports = router;
