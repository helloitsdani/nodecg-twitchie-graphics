import twitchie from 'nodecg-twitchie'

import { type Dispatch } from 'redux'
import { updateGameInfoAction } from '../actions/game'

export default (dispatch: Dispatch) => {
  twitchie.game.info.on('change', (game) => {
    dispatch(updateGameInfoAction(game))
  })
}
