const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Log requests to the console
app.use(morgan('dev'));

// Use routers
app.use('/', indexRouter);
app.use('/api', apiRouter);

// Handle 404
app.use((req, res, next) => {
  res.status(404).send('404: Page Not Found');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500: Internal Server Error');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
