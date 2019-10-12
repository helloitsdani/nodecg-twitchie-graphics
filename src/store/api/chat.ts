import twitchie, { ChatActionPayload, ChatBanPayload, ChatMessagePayload, ChatTimeoutPayload } from 'nodecg-twitchie'
import { Dispatch } from 'redux'

import { clearUserMessagesAction, getMessageAction, joinChannelAction } from '../actions/chat'

export default (dispatch: Dispatch) => {
  twitchie.channel.id.on('change', (channel, oldChannel) => {
    if (!channel) {
      return
    }

    if (channel === oldChannel) {
      return
    }

    dispatch(joinChannelAction(channel))
  })

  const dispatchClearUserMessage = (modAction: ChatBanPayload | ChatTimeoutPayload) => {
    dispatch(clearUserMessagesAction(modAction))
  }

  const dispatchChatMessage = (message: ChatActionPayload | ChatMessagePayload) => {
    dispatch(getMessageAction(message))
  }

  twitchie.on('chat.action', dispatchChatMessage)
  twitchie.on('chat.message', dispatchChatMessage)

  twitchie.on('chat.ban', dispatchClearUserMessage)
  twitchie.on('chat.timeout', dispatchClearUserMessage)
}
