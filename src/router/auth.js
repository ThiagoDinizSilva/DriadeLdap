const express = require("express");
const { check, validationResult } = require("express-validator");

const { login, signup, me } = require("../controllers/authController");

const router = express.Router();
 
// /auth/signup 
router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("Login must have minimum length of 3")
      .trim(),

    check("password")
      .isLength({ min: 3})
      .withMessage("your password should have more then 3 characters"),

    check("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("confirm password does not match");
      }
      return true;
    }),
  ],
  (req, res, next) => {
    const error = validationResult(req).formatWith(({ msg }) => msg);

    if (!error.isEmpty()) return res.status(422).send({ error: error.array() });

    next();
  },
  signup
);
 
// /auth/login
router.post(
  "/login",
  (req, res, next) => {
    let error = validationResult(req).formatWith(({ msg }) => msg);

    if (!error.isEmpty())
      return res.send({ error: error.array() });
      
    next();
  },
  login
);

module.exports = router;