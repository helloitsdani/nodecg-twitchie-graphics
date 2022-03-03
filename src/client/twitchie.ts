import twitchie, { createReplicant, type Replicant, type TwitchieClient } from 'nodecg-twitchie'
import { BRBStatus, SocialAccount } from './types'

interface TwitchieGraphicsClient extends TwitchieClient {
  graphics: {
    brb: Replicant<BRBStatus>
    social: Replicant<SocialAccount[]>
  }
}

const twitchieGraphicsClient: TwitchieGraphicsClient = {
  ...twitchie,
  graphics: {
    brb: createReplicant<BRBStatus>('graphics.brb', { defaultValue: { away: false }, persistent: true }),
    social: createReplicant<SocialAccount[]>('graphics.social', { defaultValue: [], persistent: true }),
  },
}

export default twitchieGraphicsClient
