const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/paris-zen'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(_dirname,'/dist/paris-zen/index.html'));
});
app.listen(process.env.PORT || 8080);