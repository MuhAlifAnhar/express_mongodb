const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost/shop_db')
    .then((result) => {
        console.log('Koneksi ke database berhasil');
    }).catch((err) => {
        console.log(err);
    });

const seedProducts = [
    {
        "name": "Sepatu Nike",
        "brand": "Nike",
        "price": 100000,
        "color": "Hitam",
        "size": "M"
    },
    {
        "name": 'Sepatu Adidas',
        "brand": 'Adidas',
        "price": 80000,
        "color": 'Putih',
        "size": 'L'
    },
    {
        "name": 'Sepatu Puma',
        "brand": 'Puma',
        "price": 90000,
        "color": 'Merah',
        "size": 'XL'
    }
]

Product.insertMany(seedProducts)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err)
    })