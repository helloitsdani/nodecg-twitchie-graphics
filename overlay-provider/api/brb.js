import twitchie from '../../twitchie'

import { updateBRB } from '../actions/brb'

export default (dispatch) => {
  const dispatchUpdateBRB = ({
    away = false,
    message,
  } = {}) => {
    dispatch(updateBRB(away, message))
  }

  twitchie.brb.on(
    'change',
    dispatchUpdateBRB,
  )
}
