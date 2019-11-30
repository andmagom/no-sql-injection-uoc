const express = require('express');
const userController = require('../controller/users');
var jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', async (req, res) => {
  const user = req.body.uname;
  const pass = req.body.psw;

  const result = await userController.validateCredential(user, pass);
  if(result) {
    const token = jwt.sign({email: user}, 'secret');
    return res.json({token});
  } else {
    return res.status(401).json(
      {
        error: {
          title: 'Credentials Incorrect', 
          description: 'Username or Password incorrect'
        }
      }
    );
  }
});

module.exports = router