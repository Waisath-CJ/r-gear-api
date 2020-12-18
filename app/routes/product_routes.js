const express = require('express')
const passport = require('passport')

const Product = require('../models/product')

const router = express.Router()
const requiresToken = passport.authenticate('bearer', { session: false })
const { BadCredentialsError, BadParamsError, handle404, requireOwnership } = require('../../lib/custom_errors')

// CREATE
// Create a Product
router.post('/products', requiresToken, (req, res, next) => {
  const productInfo = req.body.product
  productInfo.owner = req.user.id

  Product.create(productInfo)
    .then(product => res.status(201).json(product))
    .catch(next)
})

// INDEX
// Show all Products
router.get('/products', requiresToken, (req, res, next) => {
  Product.find()
    .populate('owner')
    .then(products => {
      const newProducts = []
      products.forEach(product => {
        newProducts.push({
          _id: product._id,
          name: product.name,
          description: product.description,
          price: product.price,
          owner: product.owner.email
        })
      })
      return newProducts
    })
    .then(products => res.json(products))
    .catch(next)
})

// SHOW
// Show a specific Product
router.get('/products/:product_id', requiresToken, (req, res, next) => {
  Product.findById(req.params.product_id)
    .populate('owner')  
    .then(handle404)
    .then(product => {
      const newProduct = []
      newProduct.push({
        _id: product._id,
        name: product.name,
        description: product.description,
        price: product.price,
        owner: product.owner.email
      })
      return newProduct
    })
    .then(product => res.json(product))
    .catch(next)
})

// UPDATE
// Update a Post
router.patch('/products/:product_id', requiresToken, (req, res, next) => {
  delete req.body.product.owner

  Product.findById(req.params.product_id)
    .then(handle404)
    .then(product => requireOwnership(req, product))
    .then(product => product.updateOne(req.body.product))
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DELETE
// Delete a specific Product
router.delete('/products/:product_id', requiresToken, (req, res, next) => {
  Product.findById(req.params.product_id)
    .then(handle404)
    .then(product => requireOwnership(req, product))
    .then(product => product.deleteOne())
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router