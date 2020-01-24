const express = require("express")
const router = express.Router()
const db = require("../../models")
const passport = require("../../passport")

console.log('in api/users')

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

router.post('/', (req, res) => {
    console.log("user post / is getting hit")
    const {username, password, active} = req.body
    // can add email & phone n future versions
    db.User.findOne({ username }, (err, user) => {
        if (err) {
            console.log("User.js post error: ", err)
        } else if (user) {
            res.json({
                error: `Sorry, ${username} has already been taken.`
                // should work in some kind of validation to let the user know if that username is taken
            })
        }
        else {
            console.log("a new user was created successfully")
            const newUser = new db.User({
                username: username,
                passwordHash: password,
                active: active
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

module.exports = router