const bcrypt = require('bcrypt');
const data = require('../DB/data');
exports.login = async (req, res, next) => {
  try {
    const { password, username } = req.params;
    const usersArr = [];
    // await User.find({ username: username });
    for (let user of data) {
      if (user.username === username) {
        usersArr.push(user);
      }
    }
    for (let user of usersArr) {
      console.log(password, user.password);
      let ans = await bcrypt.compare(password, user.password);
      console.log(ans);
      if (ans === true) {
        return res.send({ ans: 'yes', user: user });
      }
    }
    if (usersArr.length > 0) {
      throw { status: 400, message: 'password incorrect' };
    }
    throw { status: 400, message: 'username not exist' };
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.updateVerify = (req, res, next) => {
  try {
    let { num, username } = req.params;
    console.log(typeof num);
    // await User.find({ username: username });
    for (let user of data) {
      if (user.username === username) {
        user.twoPass = Number(num) === 1;
      }
      console.log(user.twoPass);
      return res.send(user);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
