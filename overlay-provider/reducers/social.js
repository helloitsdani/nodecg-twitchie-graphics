import * as actions from '../actions/social'

const defaultState = {
  twitch: '',
  twitter: '',
}

export default (
  state = defaultState,
  {
    type,
    payload: {
      service,
      username,
    } = {},
  }
) => {
  switch (type) {
    case actions.SOCIAL_UPDATE:
      return {
        ...state,
        [service]: username,
      }
    default:
      return state
  }
}
