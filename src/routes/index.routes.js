const {Router} = require('express');
const router = Router();

const{rederIndex, rederAbout} = require('../controllers/index.controller')

router.get('/',rederIndex);

router.get('/about', rederAbout);

module.exports = router;