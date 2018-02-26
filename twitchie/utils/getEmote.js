const EMOTE_PREFIX = 'http://static-cdn.jtvnw.net/emoticons/v1'

const getEmote = (
  name,
  {
    size = '3.0',
  } = {}
) => (
  `${EMOTE_PREFIX}/${name}/${size}`
)

export {
  EMOTE_PREFIX,
}

export default getEmote
