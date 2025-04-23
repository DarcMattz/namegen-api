const Name = require("../models/Name");

const getAvailableMeta = async () => {
  const categories = await Name.distinct("category");
  const genders = await Name.distinct("gender");
  return { categories, genders };
};

module.exports = { getAvailableMeta };
