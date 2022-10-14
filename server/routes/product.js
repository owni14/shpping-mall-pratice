const express = require('express');
const router = express.Router();
const { User } = require('../models/User');

const { auth } = require('../middleware/auth');

//=================================
//             Product
//=================================

router.post('/image', (req, res) => {
  // 가져온 이미지를 저장을 해주면 된다.
});

module.exports = router;
