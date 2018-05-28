const getBRB = (state) => (
  state.brb
)

const isAway = (state) => (
  getBRB(state).isAway
)

const getMessage = (state) => (
  getBRB(state).message
)

const getTimer = (state) => (
  getBRB(state).timer
)

export {
  getBRB,
  isAway,
  getMessage,
  getTimer,
}
