const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/shop_db')
    .then((result) => {
        console.log('Koneksi ke database berhasil');
    })
    .catch((err) => {
        console.log(err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Selamat datang di API SMK Telkom Makassar');
})

app.listen(8080, () => {
    console.log('Server berjalan di http://localhost:8080');
})