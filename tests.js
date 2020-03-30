const defaults = require('./index')

const object = {
  name: {
    first: 'Kevin',
  },
  data: {
    age: 26,
    pets: {},
  }
}

const schema = {
  name: {
    first: '',
    last: '',
  },
  data: {
    pets: {
      dogs: [],
      cats: []
    },
  }
}

defaults(object, schema)
console.log(object)
