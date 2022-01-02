const {db} = require('./server/db')
const {green, red} = require('chalk')

const {Campus, Student} = require('./server/db/models');

const students = [{
  firstName: 'Sammy',
  lastName: 'The Cage',
  email: 'sammy_the_cage_123454332@gmail.com',
  imageURL: 'https://www.placecage.com/149/300',
  gpa: 4.0
}, {
  firstName: 'Ben',
  lastName: `"You Can't Cage Me" Cage`,
  email: 'ben_123454332@gmail.com',
  imageURL: 'https://www.placecage.com/207/300',
  gpa: 3.8
}, {
  firstName: 'Nick',
  lastName: 'Cage',
  email: 'nick_C_123454332@gmail.com',
  imageURL: 'https://www.placecage.com/200/300',
  gpa: 1.3
}, {
  firstName: 'Batman',
  lastName: 'Nick',
  email: 'batman_123454332@gmail.com',
  imageURL: 'http://4.bp.blogspot.com/-wkdrHUo_2bw/VFN8AwcBfuI/AAAAAAAAfn8/ZmSLil8JwoY/s1600/Superman-Lives-criticsight-imagen-nicolas-cage-4.png',
  gpa: 2.8
},
{
  firstName: 'Super',
  lastName: 'Cage',
  email: 'super_123454332@gmail.com',
  imageURL: 'https://www.placecage.com/27/300',
  gpa: 2.8
}]

const campuses = [{
  name: 'School of Nick',
  imageURL: 'https://i.ytimg.com/vi/IrHeLbaQmrU/maxresdefault.jpg',
  address: '123 Nick Street',
  description: 'Main Campus of the School of Nick'
},
{
  name: 'Mansion Campus',
  imageURL: 'https://cdn.vox-cdn.com/thumbor/bc87DQxbEoZpr1bLLFde4RezlWo=/17x0:622x454/1200x800/filters:focal(17x0:622x454)/cdn.vox-cdn.com/uploads/chorus_image/image/47962361/nic_20cage.0.jpg',
  address: 'Campus of Cages, 17 Cage Courtyard',
  description: 'Home to all posh future Cage de Nicolas'
},
{
  name: 'Saint Nicolas House of Worship & Javascript',
  imageURL: 'https://i.pinimg.com/originals/0a/37/1d/0a371dc71093515336bbec15f837bce2.jpg',
  address: '14 Saint Nicolas Way, VatiNic City',
  description: `Those who praise the holy Nick come here to study the scripture`
},
{
  name: 'Island Campus',
  imageURL: 'http://d29l8fj0bhi1tg.cloudfront.net/wp-content/uploads/2017/03/14131325/Nicolas-Cage-Islands.jpg',
  address: '18 Beachside Javascript Lane, Port of St. Nicolas Islands',
  description: `Learn Javascipt with Nick, all the while sipping Pina Coladas out of a Cocunut`
},
{
  name: `Omnipotent Nick's School of Code`,
  imageURL: 'http://www.foxradionetwork.com/s/claudia-house-cage.jpg',
  address: '1 Nick Road, Everywhere, Universe',
  description: 'The only place to learn Javascript, from the only one who knows -- Nick Cage'
},
{
  name: `St. Nick's Javascript Workshop`,
  imageURL: 'https://www.santaclaushouse.com/public/images/pictures/sch_winter_2010.jpg',
  address: 'The North Pole, P.O. Box 01',
  description: `Learn to make toys, websites, and apps. Meet actual reindeer, while watching the hit film 'Reindeer Games'`
}]

const seed = async () => {
	try {
		await db.sync({force: true})
	  await Promise.all(students.map(async student => {
	    await Student.create(student)
	  }))
    await Promise.all(campuses.map(async campus => {
      await Campus.create(campus)
    }))
  } catch(err) {
    console.error(err)
  }

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
