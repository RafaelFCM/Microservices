const mongoose = require('mongoose');
const repository = require('../repositories/product-repository')

exports.get = async (req, res, next) => {
    const data = await repository.getProduct();
    res.status(200).send(data);
}

// const Product = require('../models/product');

// // Método para buscar produtos no banco de dados
// exports.get = async (req, res, next) => {
//     try {
//         const data = await Product.find({});
//         res.status(200).send(data); // Retorna todos os produtos
//     } catch (e) {
//         res.status(500).send({ message: 'Falha ao processar sua requisição.' });
//     }
// };
