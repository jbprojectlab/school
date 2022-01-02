const {Student, Campus} = require('../db/models')
const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll()
    res.json(students)
  } catch(err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const student = await Student.findById(id)
    const {campusId} = student
    const studentWithCampus = await Student.findOne({
      where: {id},
      include: [{
        model: Campus,
        where: {id: campusId}
      }]
    })
    res.json(studentWithCampus)
  } catch(err) {
    next(err)
  }
})

module.exports = router
