import twitchie, { createReplicant, type Replicant, type TwitchieClient } from 'nodecg-twitchie'
import { BRBStatus, SocialAccounts, Timer } from './types'

interface TwitchieGraphicsClient extends TwitchieClient {
  graphics: {
    brb: Replicant<BRBStatus>
    social: Replicant<SocialAccounts>
    timer: Replicant<Timer>
  }
}

const twitchieGraphicsClient: TwitchieGraphicsClient = {
  ...twitchie,
  graphics: {
    brb: createReplicant<BRBStatus>('graphics.brb', { defaultValue: { away: false }, persistent: true }),
    social: createReplicant<SocialAccounts>('graphics.social', { defaultValue: [], persistent: true }),
    timer: createReplicant<Timer>('graphics.timer'),
  },
}

export default twitchieGraphicsClient
