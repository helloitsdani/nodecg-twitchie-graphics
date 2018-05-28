const NOW_PLAYING_UPDATE = 'nowPlaying/UPDATE'

const updateNowPlaying = (game) => ({
  type: NOW_PLAYING_UPDATE,
  payload: {
    game,
  },
})

export {
  NOW_PLAYING_UPDATE,
  updateNowPlaying,
}
