import { GameInfo } from 'nodecg-twitchie'

const GAME_UPDATE = 'game/UPDATE'

interface UpdateGameInfoAction {
  type: typeof GAME_UPDATE
  payload?: GameInfo
}

type GameActions = UpdateGameInfoAction

const updateGameInfo = (gameInfo?: GameInfo): GameActions => ({
  type: GAME_UPDATE,
  payload: gameInfo,
})

export { GAME_UPDATE, updateGameInfo, GameActions }
