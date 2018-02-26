import { createReplicant } from '../../twitchie'
import { updateBRB } from '../actions/brb'

export default (dispatch) => {
  const brb = createReplicant('brb', {
    defaultValue: {
      away: false,
      message: undefined,
    },
  })

  const dispatchUpdateBRB = ({
    away = false,
    message,
  } = {}) => {
    dispatch(updateBRB(away, message))
  }

  brb.on(
    'change',
    dispatchUpdateBRB,
  )
}
