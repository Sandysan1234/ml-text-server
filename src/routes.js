const { getEmotionByText } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/predict',
    handler: getEmotionByText,
  },
];

module.exports = routes;
