const jwt = require("jsonwebtoken");
const keys = require("./keys");

exports.jwtToken = (name) => {
  const payload = { name };

  const privateKey = {
    key: keys.keyGenerator.privateKey,
    passphrase: process.env.PASSPHRASE,
  };

  const signOptions = {
    expiresIn: "12h",
    algorithm: "RS256",
  };

  const token = jwt.sign(payload, privateKey, signOptions);

  return token;
};
