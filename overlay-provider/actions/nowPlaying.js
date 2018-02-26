const updateNowPlaying = game => ({
  type: 'NOW_PLAYING_UPDATE',
  payload: {
    game,
  },
})

export {
  updateNowPlaying,
}
