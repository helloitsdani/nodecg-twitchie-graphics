import twitchie from '../../twitchie'

import { getMessage, joinChannel, clearUserMessages } from '../actions/chat'
import { queueNotification } from '../actions/notifications'

import getUsername from '../utils/getUsername'

export default (dispatch) => {
  const dispatchClearUserMessage = ({ user }) => {
    dispatch(clearUserMessages(user))
  }

  const dispatchChatMessage = ({ user, message } = {}) => {
    dispatch(getMessage(user, message))
  }

  const dispatchCheerNotification = ({ user, cheer } = {}) => {
    dispatch(queueNotification({
      topic: 'cheer',
      user: getUsername(user),
      scale: cheer.bits,
    }))
  }

  const dispatchJoinChannel = ({ channel } = {}) => {
    dispatch(joinChannel(channel))
  }

  twitchie.on(
    'chat.chat',
    dispatchChatMessage,
  )

  twitchie.on(
    'chat.cheer',
    ({ user, message, cheer } = {}) => {
      dispatchChatMessage({ user, message })
      dispatchCheerNotification({ user, cheer })
    }
  )

  twitchie.on(
    'chat.join',
    ({ channel, self } = {}) => {
      if (!self) {
        return
      }

      dispatchJoinChannel({ channel })
    }
  )

  twitchie.on('chat.ban', dispatchClearUserMessage)
  twitchie.on('chat.timeout', dispatchClearUserMessage)
}
