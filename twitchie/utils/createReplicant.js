/* global nodecg */

import { BUNDLE_NAME } from '../constants'

const createReplicant = (name, options = {}) => (
  nodecg.Replicant(name, BUNDLE_NAME, options)
)

export default createReplicant
