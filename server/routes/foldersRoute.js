const express = require('express');
const { models } = require('mongoose');
const router = express.Router();

let folders = [];
router.post("/folders", (req,res) => {
    try {
        const {title} = req.body;

        const newfolder = {
            id: Date.now(),
            title: title.trim()
        };

        folders.push(newfolder);

        res.status(201).json({
            message: "folder created",
            folder: newfolder
        });
    }catch(err){
        res.status(500).json({ error: "Something went wrong" });
    }
})


router.get('/folders', (req,res) => {
    res.json(folders);
})

module.exports = router;