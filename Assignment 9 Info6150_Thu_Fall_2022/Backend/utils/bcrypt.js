import bcrypt from "bcrypt";

export const encryptPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS), (err, salt) => {
      bcrypt.hash(password, salt, function (err, hash) {
        resolve(hash);
      });
    });
  });
};

export const verifyHash = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, result) => {
      if (err) reject(err.message);
      resolve(result);
    });
  });
};
