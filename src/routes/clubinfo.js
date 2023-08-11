// src/routes/miembros.js
const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
require('dotenv').config();

// Token Brawl Stars API
const API_BS = process.env.API_BS;

router.get("/", async (req, res) => {
    try {
        const response = await fetch("https://api.brawlstars.com/v1/clubs/%232GVC0QRPY/", {
            headers: {
                Authorization: `Bearer ${API_BS}`
            }
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        const clubData = await response.json(); // Parsea la respuesta como JSON

        const toReturn = {
            tag: clubData.tag,
            name: clubData.name,
            description: clubData.description,
            img: "https://brawlace.com/assets/images/brawlstars/icons-clubs/" + clubData.badgeId + ".png",
            trophies: clubData.trophies,
        };

        res.status(200).json(toReturn); // Envía el JSON como respuesta
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;

module.exports = router;
