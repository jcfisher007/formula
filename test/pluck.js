import test from 'tape'
import error from '../fn/error'
import pluck from '../fn/pluck'

test('pluck', (t) => {
  t.plan(1)
  t.deepEqual( pluck('name', [{ name: 'John'}, { name: 'Peter'}]), ['John', 'Peter'])
})
