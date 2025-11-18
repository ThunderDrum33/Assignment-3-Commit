const express = require("express");
const app = express();
app.use(express.json());
app.post("/count", (req, res) => {
    const sentence = req.body.sentence || "";
    const vowels = sentence.match(/[aeiouAEIOU]/g)?.length || 0;
    const consonants = sentence.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;
    res.json({ vowels, consonants });
});
app.listen(3000, () => console.log("Server running on port 3000"));
