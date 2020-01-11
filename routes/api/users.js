const express = require("express")
const router = express.Router()
const db = require("../../models")
const passport = require("../../passport")

router.post('/', (req, res) => {
    const {username, password} = req.body
    // can add email & phone n future versions
    db.User.findOne({ username }, (err, user) => {
        if (err) {
            console.log("User.js post error: ", err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${user}`
                // should work in some kind of validation to let the user know if that username is taken
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                active: true
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    "/login",
    function (req, res, next) {
        next()
    },
    passport.authenticate("local", {failureRedirect: "/login"}),
    (req, res) => {
        let userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

// from passport - look into this
// app.post('/login', 
// passport.authenticate('local', { failureRedirect: '/login' }),
// function(req, res) {
//   res.redirect('/');
// });

router.get('/', (req, res, next) => {
    db.User.findOne({ username }, (err, user) => {
    if (req.user) {
        res.json({ user: user })
    } else {
        res.json({ user: null })
    }
})
})

router.put("/:id",(req,res)=>{
    db.User.findOneAndUpdate({_id:req.params.id}, {$push: req.body }, { new: true })
    .then(dbModel=>{
        res.json(dbModel)
        console.log(res.json(dbModel))
    }).catch(err=> res.status(422).json(err))
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
        // need to redirect on logout
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router