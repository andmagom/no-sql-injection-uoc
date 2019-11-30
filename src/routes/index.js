const express = require('express');
const userController = require('../controller/users');
const path = require('path');
const router = express.Router();

router.post('/login', async (req, res) => {
  const user = req.body.uname;
  const pass = req.body.psw;

  const result = await userController.validateCredential(user, pass);
  if(result) {
    return res.sendFile(path.join(__dirname+'/../../public/success.html'));
  } else {
    return res.sendFile(path.join(__dirname+'/../../public/error.html'));
  }
});

module.exports = router