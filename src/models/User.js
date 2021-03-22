const {Schema, model} =require('mongoose');
const bcrypt = require('bcryptjs');


const UserSchema= Schema({
    name: {type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true}
},{
    timestamps:true
});

UserSchema.methods.encrypPassword = async password =>{
    const salt= await bcrypt.genSalt();
    return await bcrypt.hash(password,salt);
}

UserSchema.methods.matchPassword = function(password){
   return await bcrypt.compare(password, this.password);
}

module.exports= model('User', UserSchema);


