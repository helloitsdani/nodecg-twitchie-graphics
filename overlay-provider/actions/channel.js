const CHANNEL_UPDATE = 'channel/UPDATE'

const updateChannelInfo = ({
  game,
  status,
}) => ({
  type: CHANNEL_UPDATE,
  payload: {
    game,
    status,
  },
})

export {
  CHANNEL_UPDATE,
  updateChannelInfo,
}
