import twitchie, { createReplicant, type Replicant, type TwitchieClient } from 'nodecg-twitchie'
import { BRBStatus, SocialAccount } from './types'

interface TwitchieGraphicsClient extends TwitchieClient {
  stream: {
    info: TwitchieClient['stream']['info']
    status: Replicant<string>
  }
  graphics: {
    brb: Replicant<BRBStatus>
    social: Replicant<SocialAccount[]>
  }
}

const twitchieGraphicsClient: TwitchieGraphicsClient = {
  ...twitchie,
  stream: {
    ...twitchie.stream,
    status: createReplicant<string>('stream.status', { defaultValue: undefined, persistent: true }),
  },
  graphics: {
    brb: createReplicant<BRBStatus>('graphics.brb', { defaultValue: { away: false }, persistent: true }),
    social: createReplicant<SocialAccount[]>('graphics.social', { defaultValue: [], persistent: true }),
  },
}

export default twitchieGraphicsClient
