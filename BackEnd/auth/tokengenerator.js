const jwt = require("jsonwebtoken");
const keys = require("./keys");
const c = require("crypto");

exports.jwtToken = (name) => {
  const payload = { name };

  const key = keys.keyGenerator.privateKey;
  const passphrase = process.env.PASSPHRASE;

  const signOptions = {
    expiresIn: "12h",
    algorithm: "RS256"
  };

  const token = jwt.sign(payload, { key, passphrase }, signOptions);

  return token;
};
