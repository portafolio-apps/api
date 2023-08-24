// src/routes/miembros.js
const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
require('dotenv').config();

// Token Brawl Stars API
const API_BS = process.env.API_BS;

router.get("/", async (req, res) => {
    try {
        const response = await fetch("https://api.brawlstars.com/v1/clubs/%232GVC0QRPY/members", {
            headers: {
                Authorization: `Bearer ${API_BS}`
            }
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json(); // Parsea la respuesta como JSON

        const toReturn = data.items.map(member => ({
            tag: member.tag,
            name: member.name,
            trophies: member.trophies,
            color: member.nameColor,
            img: "https://cdn.brawlstats.com/player-thumbnails/" + member.icon.id + ".png"

        }));

        res.status(200).json(toReturn); // Envía el JSON como respuesta
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;
