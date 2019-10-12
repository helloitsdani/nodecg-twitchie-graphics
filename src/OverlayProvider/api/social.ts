import { Dispatch } from 'redux'

import twitchie from '../../twitchie'
import { updateSocialAccounts } from '../actions/social'

export default (dispatch: Dispatch) => {
  twitchie.graphics.social.on('change', newAccounts => {
    dispatch(updateSocialAccounts(newAccounts || []))
  })
}
