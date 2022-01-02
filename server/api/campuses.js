const router = require('express').Router()
const {Campus} = require('../db/models')

router.use('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll()
    res.json(campuses)
  } catch(err) {
    next(err)
  }
})

module.exports = router
