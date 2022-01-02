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
  address: '123 Beach Street, Webpack City, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla egestas dui eget mollis. Etiam tincidunt tincidunt orci ut feugiat. Nunc justo enim, feugiat vel eleifend in, egestas id velit. Fusce ultrices convallis nunc, sit amet vestibulum odio auctor in. Morbi id neque volutpat urna commodo venenatis. Quisque sed turpis et quam semper posuere id non sapien. Nam ullamcorper tincidunt lectus, commodo varius ipsum facilisis ac. Nunc dapibus est nisi, ut ultrices tellus rutrum quis.'
},
{
  name: 'Mansion Campus',
  imageURL: 'https://i.ytimg.com/vi/MARPpXuTi7k/maxresdefault.jpg',
  address: 'Campus of Cages, 17 Cage Courtyard',
  description: 'Home to all posh future Cage de Nicolas'
},
{
  name: 'Forest Campus',
  imageURL: 'https://www.collegeconsensus.com/wp-content/uploads/2016/12/Wake-Forest-1024x400.jpg',
  address: '14 Binary Tree Lane, Postgres, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla egestas dui eget mollis. Etiam tincidunt tincidunt orci ut feugiat. Nunc justo enim, feugiat vel eleifend in, egestas id velit. Fusce ultrices convallis nunc, sit amet vestibulum odio auctor in. Morbi id neque volutpat urna commodo venenatis. Quisque sed turpis et quam semper posuere id non sapien. Nam ullamcorper tincidunt lectus, commodo varius ipsum facilisis ac. Nunc dapibus est nisi, ut ultrices tellus rutrum quis.'
},
{
  name: 'Island Campus',
  imageURL: 'https://images.squarespace-cdn.com/content/v1/574ddc364c2f85ac52a359e0/1517930124246-F1ZAH9A95G3KODO1LU4J/Screen+Shot+2018-02-06+at+10.14.20+AM.png?format=1500w',
  address: '18 Island Circle, Node Island',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla egestas dui eget mollis. Etiam tincidunt tincidunt orci ut feugiat. Nunc justo enim, feugiat vel eleifend in, egestas id velit. Fusce ultrices convallis nunc, sit amet vestibulum odio auctor in. Morbi id neque volutpat urna commodo venenatis. Quisque sed turpis et quam semper posuere id non sapien. Nam ullamcorper tincidunt lectus, commodo varius ipsum facilisis ac. Nunc dapibus est nisi, ut ultrices tellus rutrum quis.'
},
{
  name: `Mountain Campus`,
  imageURL: 'https://3.files.edl.io/3a65/21/02/25/175958-e0e3a32a-82ee-44d2-9bbb-f10bea77d94d.jpg',
  address: '1 Steep Lane, JavaScript Mountain',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla egestas dui eget mollis. Etiam tincidunt tincidunt orci ut feugiat. Nunc justo enim, feugiat vel eleifend in, egestas id velit. Fusce ultrices convallis nunc, sit amet vestibulum odio auctor in. Morbi id neque volutpat urna commodo venenatis. Quisque sed turpis et quam semper posuere id non sapien. Nam ullamcorper tincidunt lectus, commodo varius ipsum facilisis ac. Nunc dapibus est nisi, ut ultrices tellus rutrum quis.'
},
{
  name: `Desert Campus`,
  imageURL: 'https://www.iconeye.com/wp-content/uploads/2021/05/vinay_panjwani_DJI_0500-Edit-copy.jpg',
  address: '57 Desert Way, Babelville, JS',
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
