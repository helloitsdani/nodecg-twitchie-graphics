/* global nodecg */

import { BUNDLE_NAME } from '../constants'

const listenFor = (name, handler) => (
  nodecg.listenFor(name, BUNDLE_NAME, handler)
)

export default listenFor
