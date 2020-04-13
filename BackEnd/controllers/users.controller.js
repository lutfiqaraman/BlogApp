const db = require("../db/dbSet");
const crypto = require("crypto");

exports.registerUser = async (req, res) => {
  const name = (req.body.name).toLowerCase();
  const salt = crypto.randomBytes(16).toString("hex");
  const password = req.body.password;

  const passwordHash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");

  await db.User.create({
    name,
    password: passwordHash,
    salt,
  }).then((result) => res.json(result));
};