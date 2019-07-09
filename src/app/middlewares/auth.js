const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return next();

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_TOKEN);

    req.user = decoded.sub;

    return next();
  } catch (error) {
    return res.status(401).send("Invalid authorization token");
  }
};
