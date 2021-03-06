import test from 'ava'
const fs = require('fs')
const path = require('path')
const parse = require('../parser')
const render = require('../render')

test('parse/render form identity transform', t => {
  for (var i = 1; i < 6; i++) {
    let text = fs.readFileSync(path.join(__dirname, 'fixtures/lorem' + i + '.md'), 'utf8')
    let tree = parse(text)
    t.is(text, render(tree), 'lorem' + i + '.md')
  }
})
