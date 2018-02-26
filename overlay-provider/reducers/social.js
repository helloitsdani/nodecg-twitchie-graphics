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
    case 'SOCIAL_UPDATE':
      return {
        ...state,
        [service]: username,
      }
    default:
      return state
  }
}
