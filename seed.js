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
  name: 'Beach Campus',
  imageURL: 'https://indianharbourbeach.org/vertical/Sites/%7B427C9040-E7BF-47FF-B72A-4E9FC9F68BCE%7D/uploads/sathigh-1170x420.jpg',
  address: '123 Beach Street',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla egestas dui eget mollis. Etiam tincidunt tincidunt orci ut feugiat. Nunc justo enim, feugiat vel eleifend in, egestas id velit. Fusce ultrices convallis nunc, sit amet vestibulum odio auctor in. Morbi id neque volutpat urna commodo venenatis. Quisque sed turpis et quam semper posuere id non sapien. Nam ullamcorper tincidunt lectus, commodo varius ipsum facilisis ac. Nunc dapibus est nisi, ut ultrices tellus rutrum quis.'
},
{
  name: 'Mansion Campus',
  imageURL: 'https://indianharbourbeach.org/vertical/Sites/%7B427C9040-E7BF-47FF-B72A-4E9FC9F68BCE%7D/uploads/sathigh-1170x420.jpg',
  address: 'Campus of Cages, 17 Cage Courtyard',
  description: 'Home to all posh future Cage de Nicolas'
},
{
  name: 'Forest Campus',
  imageURL: 'https://indianharbourbeach.org/vertical/Sites/%7B427C9040-E7BF-47FF-B72A-4E9FC9F68BCE%7D/uploads/sathigh-1170x420.jpg',
  address: '14 Forest Lane',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla egestas dui eget mollis. Etiam tincidunt tincidunt orci ut feugiat. Nunc justo enim, feugiat vel eleifend in, egestas id velit. Fusce ultrices convallis nunc, sit amet vestibulum odio auctor in. Morbi id neque volutpat urna commodo venenatis. Quisque sed turpis et quam semper posuere id non sapien. Nam ullamcorper tincidunt lectus, commodo varius ipsum facilisis ac. Nunc dapibus est nisi, ut ultrices tellus rutrum quis.'
},
{
  name: 'Island Campus',
  imageURL: 'https://indianharbourbeach.org/vertical/Sites/%7B427C9040-E7BF-47FF-B72A-4E9FC9F68BCE%7D/uploads/sathigh-1170x420.jpg',
  address: '18 Beachside Javascript Lane, Port of St. Nicolas Islands',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla egestas dui eget mollis. Etiam tincidunt tincidunt orci ut feugiat. Nunc justo enim, feugiat vel eleifend in, egestas id velit. Fusce ultrices convallis nunc, sit amet vestibulum odio auctor in. Morbi id neque volutpat urna commodo venenatis. Quisque sed turpis et quam semper posuere id non sapien. Nam ullamcorper tincidunt lectus, commodo varius ipsum facilisis ac. Nunc dapibus est nisi, ut ultrices tellus rutrum quis.'
},
{
  name: `Mountain Campus`,
  imageURL: 'https://indianharbourbeach.org/vertical/Sites/%7B427C9040-E7BF-47FF-B72A-4E9FC9F68BCE%7D/uploads/sathigh-1170x420.jpg',
  address: '1 Nick Road, Everywhere, Universe',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla egestas dui eget mollis. Etiam tincidunt tincidunt orci ut feugiat. Nunc justo enim, feugiat vel eleifend in, egestas id velit. Fusce ultrices convallis nunc, sit amet vestibulum odio auctor in. Morbi id neque volutpat urna commodo venenatis. Quisque sed turpis et quam semper posuere id non sapien. Nam ullamcorper tincidunt lectus, commodo varius ipsum facilisis ac. Nunc dapibus est nisi, ut ultrices tellus rutrum quis.'
},
{
  name: `Desert Campus`,
  imageURL: 'https://indianharbourbeach.org/vertical/Sites/%7B427C9040-E7BF-47FF-B72A-4E9FC9F68BCE%7D/uploads/sathigh-1170x420.jpg',
  address: 'The North Pole, P.O. Box 01',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla egestas dui eget mollis. Etiam tincidunt tincidunt orci ut feugiat. Nunc justo enim, feugiat vel eleifend in, egestas id velit. Fusce ultrices convallis nunc, sit amet vestibulum odio auctor in. Morbi id neque volutpat urna commodo venenatis. Quisque sed turpis et quam semper posuere id non sapien. Nam ullamcorper tincidunt lectus, commodo varius ipsum facilisis ac. Nunc dapibus est nisi, ut ultrices tellus rutrum quis.'
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
