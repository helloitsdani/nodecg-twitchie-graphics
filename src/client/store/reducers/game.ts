import { type GameInfo } from 'nodecg-twitchie'
import * as actions from '../actions/game'

export type GameState = GameInfo

const defaultState: GameState = {
  id: '0',
  name: 'Nothing...yet!',
  box_art_url: '',
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export default (state: GameState = defaultState, action: actions.GameActions): GameState => {
  switch (action.type) {
    case actions.GAME_UPDATE:
      return action.payload ? action.payload : defaultState

    default:
      return state
  }
}
