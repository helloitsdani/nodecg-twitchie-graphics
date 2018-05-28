const getChannelInfo = (state) => (
  state.channel
)

const getGame = (state) => (
  getChannelInfo(state).game
)

const getStatus = (state) => (
  getChannelInfo(state).status
)

export {
  getChannelInfo,
  getGame,
  getStatus,
}
