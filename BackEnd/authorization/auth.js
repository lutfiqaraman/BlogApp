const tokenManagement = require("./tokenmanagement");

const auth = async (req, res, next) => {
  const token = req.get("Authorization");
  const verified = tokenManagement.verifyToken(token);

  console.log(token);
  if (!verified) {
    return res.status(401).send("User is not authenticated");
  } 

  next();
};

module.exports = auth;