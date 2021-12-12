const bcrypt = require('bcrypt');
const data = require('../DB/data');
const twofactor = require('node-2fa');
exports.addNewUser = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    // const usersArr = await User.find({ $or: [{ email: email }, { username: username }] });
    let usernum = 0;
    for (let user of data) {
      if (user.username === username) {
        usernum++;
      }
    }
    if (usernum > 0) {
      throw { status: 404, message: 'Username or email already exists' };
    }
    const newSecret = twofactor.generateSecret({ name: 'My Awesome App', account: username });
    const newUser = {
      username: username,
      email: email,
      password: password,
      twoPass: true,
      Secret: newSecret,
    };
    data.push(newUser);
    res.status(200).send({ ans: 'yes', newUser: newUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
