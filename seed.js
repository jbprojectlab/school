const {db} = require('./server/db')
const {green, red} = require('chalk')

const {Campus, Student} = require('./server/db/models');

const campuses = [
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

const students = [{
  firstName: 'Sammy',
  lastName: 'Syntax',
  email: 'sammy_syntax_123454332@gmail.com',
  imageURL: 'https://randomuser.me/api/portraits/men/44.jpg',
  gpa: 4.0,
  campusId: 3
}, {
  firstName: 'Carl',
  lastName: 'Coder',
  email: 'ben_123454332@gmail.com',
  imageURL: 'https://randomuser.me/api/portraits/men/28.jpg',
  gpa: 3.8,
  campusId: 2
}, {
  firstName: 'Nick',
  lastName: 'Hacker',
  email: 'nick_hacker_123454332@gmail.com',
  imageURL: 'https://randomuser.me/api/portraits/men/73.jpg',
  gpa: 1.3,
  campusId: 2
}, {
  firstName: 'Scott',
  lastName: 'Scripter',
  email: 'scott_scripter_123454332@gmail.com',
  imageURL: 'https://randomuser.me/api/portraits/men/57.jpg',
  gpa: 2.8,
  campusId: 1
},
{
  firstName: 'Kevin',
  lastName: 'Component',
  email: 'kevin_c_123454332@gmail.com',
  imageURL: 'https://randomuser.me/api/portraits/men/94.jpg',
  gpa: 2.4,
  campusId: 2
},
{
  firstName: 'Ron',
  lastName: 'React',
  email: 'super_123454332@gmail.com',
  imageURL: 'https://randomuser.me/api/portraits/men/18.jpg',
  gpa: 3.7,
  campusId: 3
},
{
  firstName: 'Bob',
  lastName: 'Redux',
  email: 'bob_redux_123454332@gmail.com',
  imageURL: 'https://randomuser.me/api/portraits/men/27.jpg',
  gpa: 2.5,
  campusId: 1
},
{
  firstName: 'John',
  lastName: 'JavaScript',
  email: 'john_js_123454332@gmail.com',
  imageURL: 'https://randomuser.me/api/portraits/men/51.jpg',
  gpa: 4.0,
  campusId: 2
},
{
  firstName: 'William',
  lastName: 'Webpack',
  email: 'will_webpack_123454332@gmail.com',
  imageURL: 'https://randomuser.me/api/portraits/men/82.jpg',
  gpa: 3.7,
  campusId: 3
},
{
  firstName: 'Alex',
  lastName: 'Styles',
  email: 'alex_styles_123454332@gmail.com',
  imageURL: 'https://randomuser.me/api/portraits/men/62.jpg',
  gpa: 2.9,
  campusId: 1
},
{
  firstName: 'Peter',
  lastName: 'Postgres',
  email: 'peter_postgres_123454332@gmail.com',
  imageURL: 'https://randomuser.me/api/portraits/men/79.jpg',
  gpa: 2.8,
  campusId: 3
},
{
  firstName: 'Fred',
  lastName: 'Function',
  email: 'fred_function_123454332@gmail.com',
  imageURL: 'https://randomuser.me/api/portraits/men/24.jpg',
  gpa: 3.4,
  campusId: 1
},
{
  firstName: 'Bobby',
  lastName: 'Babel',
  email: 'bobby_babel_123454332@gmail.com',
  imageURL: 'https://randomuser.me/api/portraits/men/36.jpg',
  gpa: 3.1,
  campusId: 2
}]

const seed = async () => {
	try {
		await db.sync({force: true})
    await Promise.all(campuses.map(async campus => {
      await Campus.create(campus)
    }))
	  await Promise.all(students.map(async student => {
	    await Student.create(student)
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
