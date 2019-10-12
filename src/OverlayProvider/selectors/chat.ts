import { OverlayState } from '../reducers'

const getChat = (state: OverlayState) => state.chat

const getChatChannel = (state: OverlayState) => getChat(state).channel

const getChatMessages = (state: OverlayState) => getChat(state).messages

export { getChat, getChatChannel, getChatMessages }
