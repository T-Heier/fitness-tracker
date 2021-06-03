const router = require('express').Router();

const fitnessRoutes = require('./api/fitnessRoutes.js');
const homeRoutes = require('./homeroutes');

router.use('/', homeRoutes);
router.use('/api', fitnessRoutes);

module.exports = router;