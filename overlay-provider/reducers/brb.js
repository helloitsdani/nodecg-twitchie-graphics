const defaultState = {
  away: false,
  message: undefined,
}

export default (
  state = defaultState,
  {
    type,
    payload: {
      away,
      message,
    } = {},
  },
) => {
  switch (type) {
    case 'BRB_UPDATE':
      return {
        away: away || false,
        message,
      }
    default:
      return state
  }
}
