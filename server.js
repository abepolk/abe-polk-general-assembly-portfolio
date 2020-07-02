const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.get('*', (req, res)=> {
    res.send(`<h1>
404, this is the wrong page, click <a href="/index.html">here</a>
to go back to the home page
</h1>`)
});
app.listen(PORT);