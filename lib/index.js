import replicants from './replicants'

import getEmote from './utils/getEmote'
import getCheermote from './utils/getCheermote'
import getCheermoteFromCurrentSets from './utils/getCheermoteFromCurrentSets'
import listenFor from './utils/listenFor'

export {
  listenFor,
  getEmote,
  getCheermote,
  getCheermoteFromCurrentSets,
}

export default {
  channel: replicants.channel,
  stream: replicants.stream,
  chat: replicants.chat,
  on: listenFor,
}
