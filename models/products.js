const {model, Schema}  = require("mongoose")

const productsSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    inCart: {type: Boolean, default: false},
    imageCard: { type: String, required: true },
    imageDetail:{ type: String, required:true },
    imageDetail1:{ type: String, required:true },
    imageDetail2:{ type: String, required:true },
    brand: { type: String, required: true },
    color: { type: String, required: true },
    description: { type: String, required: true }
})

module.exports = model('Product', productsSchema);