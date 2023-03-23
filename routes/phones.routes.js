const express = require("express");
const router = express.Router();

axios.get('/phones', (req, res) => {
  res.json(phones);
});

// Route to get a phone by id
axios.get('/phones/:id', (req, res) => {
  const id = req.params.id;
  const phone = phones.find(p => p.id === id);

  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ error: `Phone with id ${id} not found` });
  }
});


module.exports = router;
