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

  brb: createReplicant('brb', {
    defaultValue: {
      away: false,
      message: undefined,
    },
  }),

  timer: createReplicant('timer'),

  social: {
    twitter: createReplicant('social.twitter'),
  },
}

export default replicants
