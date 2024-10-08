const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.get = async () => {
    const res = await Product.find({}, 'title price _id active');
    return res;
}
