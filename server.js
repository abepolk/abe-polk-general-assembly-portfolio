const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.get('*', (req, res)=> {
    res.send(`<h1>
404, Page Not Found - <a href="/index.html">Home</a></h1>`)
});
app.listen(PORT);