const mongoose = require('mongoose');

const subscribersSchema = new mongoose.Schema({
    name:{type:String,required:true},
    subscribeToChanel:{type:String,required:true},
    subscribeDate:{type:Date,required:true,default:Date.now}
})

module.exports = mongoose.model('Subscribers',subscribersSchema)