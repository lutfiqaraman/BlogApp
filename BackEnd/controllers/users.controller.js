const db = require("../db/dbSet");
const crypto = require("crypto");

// Register a user and save it in database
exports.registerUser = async (req, res) => {
  const name = req.body.name.toLowerCase();
  const salt = crypto.randomBytes(16).toString("hex");
  const password = req.body.password;

  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");

  await db.User.create({
    name,
    password: hashedPassword,
    salt,
  }).then((result) => res.json(result));
};

// User Login
exports.loginUser = async (req, res) => {
  const name = req.body.name.toLowerCase();
  const password = req.body.password;

  db.User.findOne({
    where: { name },
  })
    .then((user) => {
      if (user !== null) {
        const enteredPassword = crypto
          .pbkdf2Sync(password, user.salt, 1000, 64, "sha512")
          .toString("hex");
        
        if (enteredPassword === user.password) {
          res.status(200).json("login successfully");
        } else {
          res.status(200).json("name or password is wrong");
        }
      } else {
        res.status(200).send('unknown name');
      }
    })
    .catch((err) => {
      if (err) {
        throw new Error('something bad happened');
      }
    });
};
