exports.home = (req, res) => {
  res.sendFile(require('path').join(__dirname, '../public/index.html'));
};
