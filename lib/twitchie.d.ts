import { Replicant, TwitchieClient } from 'nodecg-twitchie';
import { BRBStatus, SocialAccounts, Timer } from './types';
interface TwitchieGraphicsClient extends TwitchieClient {
    graphics: {
        brb: Replicant<BRBStatus>;
        social: Replicant<SocialAccounts>;
        timer: Replicant<Timer>;
    };
}
declare const twitchieGraphicsClient: TwitchieGraphicsClient;
export default twitchieGraphicsClient;
