const express = require("express");
const { IPO } = require("../models"); // Import the IPO model

const router = express.Router();

// Get all IPOs
router.get("/", async (req, res) => {
  try {
    const ipos = await IPO.findAll();
    res.json(ipos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch IPOs" });
  }
});

// Create a new IPO
router.post("/", async (req, res) => {
  try {
    const { name, company, price, openDate, closeDate } = req.body;
    const newIpo = await IPO.create({ name, company, price, openDate, closeDate });
    res.status(201).json(newIpo);
  } catch (err) {
    res.status(500).json({ error: "Failed to create IPO" });
  }
});

// Get an IPO by ID
router.get("/:id", async (req, res) => {
  try {
    const ipo = await IPO.findByPk(req.params.id);
    if (!ipo) return res.status(404).json({ error: "IPO not found" });
    res.json(ipo);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch IPO" });
  }
});

// Update an IPO
router.put("/:id", async (req, res) => {
  try {
    const { name, company, price, openDate, closeDate } = req.body;
    const ipo = await IPO.findByPk(req.params.id);
    if (!ipo) return res.status(404).json({ error: "IPO not found" });

    await ipo.update({ name, company, price, openDate, closeDate });
    res.json(ipo);
  } catch (err) {
    res.status(500).json({ error: "Failed to update IPO" });
  }
});

// Delete an IPO
router.delete("/:id", async (req, res) => {
  try {
    const ipo = await IPO.findByPk(req.params.id);
    if (!ipo) return res.status(404).json({ error: "IPO not found" });

    await ipo.destroy();
    res.json({ message: "IPO deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete IPO" });
  }
});

module.exports = router;
