const express = require("express");

const keys = require("./configs/keys");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

const app = express();

const PORT = 55000;


app.get("/auth/facebook", passport.authenticate("facebook"));

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.fb_appID,
      clientSecret: keys.fb_appSecret,
      callbackURL: "http://localhost:55000/auth/facebook/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);


app.listen(PORT);
