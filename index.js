const { Liquid } = require('liquidjs')
const path = require('path')

const engine = new Liquid({
	root: path.resolve(__dirname, 'views/'),
    extname: '.liquid'
})

// can be used in the browser as well:
// see: https://www.npmjs.com/package/liquidjs

// basic template rendering
// engine.renderFile('basic', { name: 'lucy' }).then(console.log)

// loops + including partials
// engine.renderFile('users', { users: [{ name: "Peter", age: 24 }, { name: "Lucy", age: 34 }] }).then(console.log)

// using blocks
engine.renderFile('block-sample', { name: 'lucy' }).then(console.log)

