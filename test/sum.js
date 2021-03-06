import sum from '../fn/sum'
import error from '../fn/error'
import test from 'tape'

test('sum', function(t) {
  t.plan(6)
  t.equal( sum(2,2), 4 )
  t.equal( sum(2,2.2), 4.2 )
  t.equal( sum([2,2]), 4 )
  t.equal( sum([[2], [2]]), 4 )
  t.equal( sum([[2]], 2), 4 )
  t.equal( sum([[2]], {}), error.value )
})
