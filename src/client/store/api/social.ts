import { type Dispatch } from 'redux'

import twitchie from '../../twitchie'
import { updateSocialAccountsAction } from '../actions/social'

export default (dispatch: Dispatch) => {
  twitchie.graphics.social.on('change', (newAccounts) => {
    dispatch(updateSocialAccountsAction(newAccounts || []))
  })
}
