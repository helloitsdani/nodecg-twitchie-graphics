import { GameInfo } from 'nodecg-twitchie';
import * as actions from '../actions/game';
export declare type GameState = GameInfo;
declare const _default: (state: GameInfo | undefined, action: actions.UpdateGameInfoAction) => GameInfo;
export default _default;
