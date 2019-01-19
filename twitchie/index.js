import replicants from './replicants'

import createReplicant from './utils/createReplicant'
import getEmote from './utils/getEmote'
import getCheermote from './utils/getCheermote'
import getCheermoteFromCurrentSets from './utils/getCheermoteFromCurrentSets'
import getBadge from './utils/getBadge'
import getBadgeFromCurrentSets from './utils/getBadgeFromCurrentSets'
import listenFor from './utils/listenFor'

export {
  createReplicant,
  listenFor,
  getEmote,
  getCheermote,
  getCheermoteFromCurrentSets,
  getBadge,
  getBadgeFromCurrentSets,
}

export default {
  ...replicants,
  on: listenFor,
}
