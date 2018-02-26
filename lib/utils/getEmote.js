const getEmote = (
  name,
  {
    size = '3.0',
  } = {}
) => (
  `http://static-cdn.jtvnw.net/emoticons/v1/${name}/${size}`
)

export default getEmote
