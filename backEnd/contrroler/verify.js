const twofactor = require('node-2fa');
exports.verify = async (req, res, next) => {
  try {
    const { secret, num } = req.params;
    let delta = twofactor.verifyToken(secret, num);
    console.log(delta);
    if (delta.delta === 0) {
      return res.send(true);
    } else {
      throw { status: 404, message: 'wrong verify code' };
    }
  } catch (error) {
    console.log(error);
  }
};
