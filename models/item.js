const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tradeSchema = new Schema({
    title : {type: String, required : [true,"title is required"]},
    author: {type: Schema.Types.ObjectId, ref: 'User'}, 
    category : {type: String, required : [true,"category is required"]},
    details : {type: String, required : [true,"details is required"],minlength: [10,'The content should be of atleast 10 characters']},
    Status : {type: String, required : [true,"status is required"]}, 
    image : {type: String, required : [true,"image is required"]},
    tradeOffered: { type: Boolean },
    Saved: { type: Boolean },
    offerName: { type: String }
},
{ timestamps: { createdAt: 'createdDate',updatedAt: 'updatedDate' }}
)

module.exports = mongoose.model('trade', tradeSchema)
