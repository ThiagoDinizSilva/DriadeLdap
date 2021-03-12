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
      .withMessage("the name must have minimum length of 3")
      .trim(),

    check("email")
      .isEmail()
      .withMessage("invalid email address")
      .normalizeEmail(),

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

    if (!error.isEmpty()) return res.status(422).json({ error: error.array() });

    next();
  },
  signup
);

// /auth/login
router.post(
  "/login",
  [
    check("email").isEmail().withMessage("invalid message").normalizeEmail(),

    check("password")
      .isLength({ min: 3})
      .withMessage("invalid password"),
  ],
  (req, res, next) => {
    let error = validationResult(req).formatWith(({ msg }) => msg);

    if (!error.isEmpty())
      return res.status(422).json({ errors: error.array() });

    next();
  },
  login
);

// /auth/me
router.get("/me", me);

module.exports = router;