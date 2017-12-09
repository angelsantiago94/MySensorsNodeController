const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/usuarios');

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt' );
    opts.secretOrKey = "mysensors";
    passport.use(new JwtStrategy(opts,function(jwt_payload ,done){
        User.findById(jwt_payload.data._id,function(err,usuario){
            if(err){
                return done(err,false);
            }
            if(usuario){
                return done(null,usuario);
            }else{
                return done(null,false);
            }
        });
    }));
}