import test from 'tape'
import join from '../fn/join'

test('join', (t) => {
  t.plan(1)
  t.equal( join( [1,2,3], ',' ), '1,2,3')
})
