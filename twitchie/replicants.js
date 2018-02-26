import createReplicant from './utils/createReplicant'

const replicants = {
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

export default replicants
