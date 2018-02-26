const defaultState = 'Nothing...yet!'

export default (
  state = defaultState,
  {
    type,
    payload: {
      game,
    } = {},
  },
) => {
  switch (type) {
    case 'NOW_PLAYING_UPDATE':
      return game || defaultState
    default:
      return state
  }
}
