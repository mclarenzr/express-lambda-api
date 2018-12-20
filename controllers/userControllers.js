var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var userRepo = require("../repository/user");
var moment = require('moment');
var Memcached = require('memcached');



const register = (req, res) => {
    const newUser = userRepo.users[0];
    newUser.hashPassword = bcrypt.hashSync("test123", 10);
    newUser.save((err, user) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            user.hashPassword = undefined;
            return res.json(user);
        }
    })
}

const login = (req, res) => {
   /*User.findOne({
       email: req.body.email
   }, (err, user) => {
       if (err) throw err;
       if (!user) {
           res.status(401).json({ message: 'Authentication failed. No user found!'});
       } else if (user) {
           if (!user.comparePassword(req.body.password, user.hashPassword)) {
                res.status(401).json({ message: 'Authentication failed. Wrong password!'});
       } else {
           return res.json({token: jwt.sign({ email: user.email, username: user.username, _id: user.id}, 'RESTFULAPIs')});
       }
    }
   });*/
   let m = moment(new Date());
   m.add(2, 'm');
   console.log(m.unix());
   var memcache1 = new Memcached('memcachedtest.ophlcj.cfg.apse2.cache.amazonaws.com:11211');
   memcache1.set('blttest1', userRepo.users[0], 300, (err, res) => {
       console.log("blt memcache completed");
   })
   return res.json({
       token: jwt.sign(userRepo.users[0], 'mysecretorprivatekey', { expiresIn : '1m' }) 
    }
   );
}

const loginRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!'});
    }
}

module.exports = { register, login, loginRequired };