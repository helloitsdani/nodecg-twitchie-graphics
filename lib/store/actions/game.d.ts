import { GameInfo } from 'nodecg-twitchie';
export declare const GAME_UPDATE = "game/UPDATE";
export interface UpdateGameInfoAction {
    type: typeof GAME_UPDATE;
    payload?: GameInfo;
}
export declare type GameActions = UpdateGameInfoAction;
export declare const updateGameInfoAction: (gameInfo?: GameInfo | undefined) => UpdateGameInfoAction;
