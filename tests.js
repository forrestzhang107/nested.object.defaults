const defaults = require('./index')

const object = {
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

object.data.name='Forrest'
console.log('obj', object)
console.log('schem', schema)
