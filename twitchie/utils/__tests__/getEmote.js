import test from 'ava'

import getEmote, { EMOTE_PREFIX } from '../getEmote'

test('getEmote builds a URL for a specified emote', (t) => {
  const expectedURL = `${EMOTE_PREFIX}/test/1.0`

  t.is(
    getEmote('test', { size: '1.0' }),
    expectedURL,
  )
})
