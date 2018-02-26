/* global nodecg */

import { BUNDLE_NAME } from './constants'

const createReplicant = name => (
  nodecg.Replicant(name, BUNDLE_NAME)
)

const defaultReplicants = {
  channel: {
    info: createReplicant('channel.info'),
    followers: createReplicant('channel.followers'),
  },
  stream: {
    info: createReplicant('stream.info'),
  },
  chat: {
    badges: createReplicant('chat.badges'),
    cheermotes: createReplicant('chat.cheermotes'),
  },
}

export {
  createReplicant,
}

export default defaultReplicants
