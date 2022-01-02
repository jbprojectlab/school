const {Student} = require('../db/models')
const router = require('express').Router()

router.use('/', async (req, res, next) => {
  try {
    const students = await Student.findAll()
    res.json(students)
  } catch(err) {
    next(err)
  }
})

module.exports = router
