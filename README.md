# nested.object.defaults

Like object.defaults but also works for nested objects.
Very useful for safely retrieving values from embedded MongoDB documents.

## Install

```
npm i nested.object.defaults
```

## Usage

```javascript

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

// prints:
// {
//   name: {
//     first: 'Kevin',
//     last: ''
//   },
//   data: {
//     age: 26,
//     pets: {
//       dogs: [],
//       cats: []
//     }
//   }
// }

```
