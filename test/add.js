import test from 'tape'
import add from '../fn/add'
import error from '../fn/error'

test('and', (t) => {
  t.plan(5)
  t.equal( add(2), error.na)
  t.equal( add(2, 2, 2), error.na)
  t.equal( add('foo', 2), error.value)
  t.equal( add(2, 'foo'), error.value)
  t.equal( add(2, 2), 4)
});
