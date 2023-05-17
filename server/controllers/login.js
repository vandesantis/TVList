const handleLogin = (req, res, db, bcrypt) => {
  // const {username, password} = req.body;

  // db.login.findOne( {
  //     where: {
  //         email: req.body.email
  //     }
  // })
  if (!req.body.email || !req.body.password) {
    return res.status(400).json('incorrect form submission');
  }

  db.select('*')
    .from('login')
    .where({ email: req.body.email })
    .then((login) => {
      if (!login) {
        throw error;
      } else {
        bcrypt.compare(req.body.password, login[0].hash, (err, result) => {
          if (result === true) {
            console.log('password correct');
            db.select('*')
              .from('users')
              .where({ email: login[0].email })
              .then((user) => {
                res.json(user[0]);
              })
              .catch((err) => console.log(err));
          } else {
            console.log('error, incorrect password');
            res.send('wrong password');
          }
        });
      }
    });
};

module.exports = {
  handleLogin: handleLogin,
};
