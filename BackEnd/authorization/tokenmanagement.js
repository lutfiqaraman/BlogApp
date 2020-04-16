const jwt = require("jsonwebtoken");
const keys = require("./keys");

// Sign Token
exports.signToken = (name) => {
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

// Verify Token
exports.verifyToken = (token) => {
  const publicKey = keys.keyGenerator.publicKey;

  const verifyOptions = {
    expiresIn: "12h",
    algorithm: "RS256",
  };

  try {
    return jwt.verify(token, publicKey, verifyOptions);  
  } catch (error) {
    return false;
  }
}
