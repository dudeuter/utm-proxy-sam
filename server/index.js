const express = require('express');
const morgan = require('morgan');

const request = require('request');
const url = require('url');

const Feedback = 'http://localhost:3001/';
const FeedbackBundle = 'https://utm-proxy-assets.s3-us-west-1.amazonaws.com/feedback/bundle.js';
const CourseOverview = 'http://localhost:3011/';
const CourseOverviewBundle = 'https://utm-proxy-assets.s3-us-west-1.amazonaws.com/overview/bundle.js';
const Checkout = 'http://localhost:3007/';
const CheckoutBundle = 'https://utm-proxy-assets.s3-us-west-1.amazonaws.com/checkout/bundle.js';

const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.use(express.static('dist'));

app.get('/Feedback.js', (req, res) => {
  request({
    method: 'GET',
    // url: url.resolve(Feedback, 'bundle.js'),
    url: FeedbackBundle,

  }, (error, response) => {
    if (error) {
      res.statusCode = 500;
      res.end();
    } else {
      res.statusCode = 200;
      res.set({
        'Content-Type': 'text/javascript',
      });
      res.end(response.body);
    }
  });
});

app.get('/Checkout.js', (req, res) => {
  request({
    method: 'GET',
    // url: url.resolve(Checkout, 'bundle.js'),
    url: CheckoutBundle,

  }, (error, response) => {
    if (error) {
      res.statusCode = 500;
      res.end();
    } else {
      res.statusCode = 200;
      res.set({
        'Content-Type': 'text/javascript',
      });
      res.end(response.body);
    }
  });
});

app.get('/Overview.js', (req, res) => {
  request({
    method: 'GET',
    // url: url.resolve(CourseOverview, 'bundle.js'),
    url: CourseOverviewBundle,
  }, (error, response) => {
    if (error) {
      res.statusCode = 500;
      res.end();
    } else {
      res.statusCode = 200;
      res.set({
        'Content-Type': 'text/javascript',
      });
      res.end(response.body);
    }
  });
});

app.get('/entry', (req, res) => {
  request({
    method: 'GET',
    url: url.resolve(Feedback, '/entry'),
    headers: {
      'Content-Type': 'application/json',
    },
  }, (error, response) => {
    if (error) {
      res.statusCode = 500;
      res.end();
    } else {
      res.statusCode = 200;
      res.end(response.body);
    }
  });
});

app.get('/products/:id', (req, res) => {
  request({
    method: 'GET',
    url: url.resolve(Checkout, `products/${req.params.id}`),
  }, (error, response) => {
    if (error) {
      res.statusCode = 500;
      res.end();
    } else {
      res.statusCode = 200;
      res.end(response.body);
    }
  });
});

app.get('/test1', (req, res) => {
  request({
    method: 'GET',
    url: url.resolve(CourseOverview, 'test1'),
    headers: {
      'Content-Type': 'application/json',
    },
  }, (error, response) => {
    if (error) {
      res.statusCode = 500;
      res.end();
    } else {
      res.statusCode = 200;
      res.end(response.body);
    }
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening on port ${PORT}`);
});
