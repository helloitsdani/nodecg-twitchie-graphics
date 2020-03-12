import { GameInfo } from 'nodecg-twitchie'

export const GAME_UPDATE = 'game/UPDATE'

export interface UpdateGameInfoAction {
  type: typeof GAME_UPDATE
  payload?: GameInfo
}

export type GameActions = UpdateGameInfoAction

export const updateGameInfoAction = (gameInfo?: GameInfo): GameActions => ({
  type: GAME_UPDATE,
  payload: gameInfo,
})
