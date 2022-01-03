const router = require('express').Router()
const {Campus, Student} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll()
    res.json(campuses)
  } catch(err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
		const campus = await Campus.findOne({
			where: {id},
			include: [{
        model: Student,
        where: {
				  campusId: id
        }
			}]
		})
    res.json(campus)
  } catch(err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const {name, imageURL, address, description} = req.body
  try {
		const campus = await Campus.create({
			name,
      imageURL,
      address,
      description
		})
    res.status(201).json(campus)
  } catch(err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await Campus.destroy({where: {
      id: req.params.id
    }})
    res.status(204).end()
  } catch(err) {
    next(err)
  }
})

module.exports = router
