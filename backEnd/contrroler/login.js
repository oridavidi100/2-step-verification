const bcrypt = require('bcrypt');
exports.login = async (req, res, next) => {
  try {
    const { password, username } = req.params;
    const usersArr = await User.find({ username: username });
    for (let user of usersArr) {
      let ans = await bcrypt.compare(password, user.password);
      if (ans === true) {
        await User.updateOne({ username: username }, { connected: true });
        const user = { password: password, user: username };
        const accessToken = jwt.sign(user, SECRET);
        return res.send({ ans: 'yes', accessToken: accessToken });
        console.log(usersArr[0]);
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