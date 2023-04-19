import test from 'ava'

test('should user loader', async t => {
  const anyfile = await import('./anyfile.js')

  t.is(anyfile.default, 'fromloader')
})
