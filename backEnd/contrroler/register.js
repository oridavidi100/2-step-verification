const bcrypt = require('bcrypt');
exports.addNewUser = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const usersArr = await User.find({ $or: [{ email: email }, { username: username }] });
    if (usersArr.length > 0) {
      throw { status: 404, message: 'Username or email already exists' };
    }
    const newUser = await User.create({
      username: username,
      email: email,
      password: password,
      connected: false,
    });
    res.status(200).send(newUser);
  } catch (error) {
    next(error);
  }
};
