import * as actions from '../actions/social'

const defaultState = []

export default (
  state = defaultState,
  {
    type,
    payload: accounts,
  }
) => {
  switch (type) {
    case actions.SOCIAL_UPDATE:
      return accounts
        ? [...accounts]
        : []
    default:
      return state
  }
}
