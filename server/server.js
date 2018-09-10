const path = require('path');
const express = require('express');
const app = express();
const { whyDidYouUpdate } = require('why-did-you-update');
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React, {
    groupByComponent: true,
    collapseComponentGroups: false
  });
}

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('server is up!');
});
