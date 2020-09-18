import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import twitchie, { createReplicant } from 'nodecg-twitchie';

var ChatMessageTypeWithNotifications;
(function (ChatMessageTypeWithNotifications) {
    ChatMessageTypeWithNotifications["ACTION"] = "action";
    ChatMessageTypeWithNotifications["MESSAGE"] = "message";
    ChatMessageTypeWithNotifications["NOTIFICATION"] = "notification";
})(ChatMessageTypeWithNotifications || (ChatMessageTypeWithNotifications = {}));

const BRB_UPDATE = 'brb/UPDATE';
const updateBRBAction = (brbStatus) => ({
    type: BRB_UPDATE,
    payload: brbStatus,
});

const CHAT_MESSAGE = 'chat/MESSAGE';
const CHAT_NOTIFICATION = 'chat/NOTIFICATION';
const CHAT_JOIN_CHANNEL = 'chat/JOIN_CHANNEL';
const CHAT_CLEAR_USER_MESSAGES = 'chat/CLEAR_USER_MESSAGES';
const getMessageAction = (message) => ({
    type: CHAT_MESSAGE,
    payload: message,
});
const getNotificationAction = (notification) => ({
    type: CHAT_NOTIFICATION,
    payload: notification,
});
const joinChannelAction = (channel) => ({
    type: CHAT_JOIN_CHANNEL,
    payload: channel,
});
const clearUserMessagesAction = (modAction) => ({
    type: CHAT_CLEAR_USER_MESSAGES,
    payload: modAction,
});

const CUTOUT_UPDATE = 'cutout/UPDATE';
const updateCutoutAction = (coords) => ({
    type: CUTOUT_UPDATE,
    payload: coords,
});

const GAME_UPDATE = 'game/UPDATE';
const updateGameInfoAction = (gameInfo) => ({
    type: GAME_UPDATE,
    payload: gameInfo,
});

const QUEUE_NOTIFICATION = 'notifications/QUEUE_NOTIFICATION';
const CLEAR_NOTIFICATION = 'notifications/CLEAR_NOTIFICATION';
const queueNotificationAction = (notification) => ({
    type: QUEUE_NOTIFICATION,
    payload: notification,
});
const clearNotificationAction = (id) => ({
    type: CLEAR_NOTIFICATION,
    payload: id,
});

const SOCIAL_UPDATE = 'social/UPDATE';
const updateSocialAccountsAction = (accounts) => ({
    type: SOCIAL_UPDATE,
    payload: accounts,
});

const TIMER_UPDATE = 'timer/UPDATE';
const TIMER_CLEAR = 'timer/CLEAR';
const updateTimerAction = (target) => ({
    type: TIMER_UPDATE,
    payload: target,
});
const clearTimerAction = () => ({
    type: TIMER_CLEAR,
});

const STREAM_UPDATE = 'stream/UPDATE';
const updateStreamInfoAction = (accounts) => ({
    type: STREAM_UPDATE,
    payload: accounts,
});

const getBRB = (state) => state.brb;
const isAway = (state) => getBRB(state).away;
const getMessage = (state) => getBRB(state).message;

const getChat = (state) => state.chat;
const getChatChannel = (state) => getChat(state).channel;
const getChatMessages = (state) => getChat(state).messages;

const getCutout = (state) => state.cutout;

const getGameInfo = (state) => state.game;

const getNotifications = (state) => state.notifications;
const getNextNotification = (state) => getNotifications(state)[0];

const getSocialAccounts = (state) => state.social;

const getTimer = (state) => state.timer;

const getStreamInfo = (state) => state.stream;

const twitchieGraphicsClient = Object.assign(Object.assign({}, twitchie), { graphics: {
        brb: createReplicant('graphics.brb', { defaultValue: { away: false }, persistent: true }),
        social: createReplicant('graphics.social', { defaultValue: [], persistent: true }),
        timer: createReplicant('graphics.timer'),
    } });

var brb = (dispatch) => {
    twitchieGraphicsClient.graphics.brb.on('change', status => {
        if (!status) {
            return;
        }
        dispatch(updateBRBAction(status));
    });
};

var chat = (dispatch) => {
    twitchie.channel.id.on('change', (channel, oldChannel) => {
        if (!channel) {
            return;
        }
        if (channel === oldChannel) {
            return;
        }
        dispatch(joinChannelAction(channel));
    });
    const dispatchClearUserMessage = (modAction) => {
        dispatch(clearUserMessagesAction(modAction));
    };
    const dispatchChatMessage = (message) => {
        dispatch(getMessageAction(message));
    };
    twitchie.on('chat.action', dispatchChatMessage);
    twitchie.on('chat.message', dispatchChatMessage);
    twitchie.on('chat.ban', dispatchClearUserMessage);
    twitchie.on('chat.timeout', dispatchClearUserMessage);
};

var followers = (dispatch) => {
    twitchie.on('user.follower', follower => {
        dispatch(queueNotificationAction({
            topic: 'follower',
            user: follower.from_name,
        }));
    });
};

var game = (dispatch) => {
    twitchie.game.info.on('change', game => {
        dispatch(updateGameInfoAction(game));
    });
};

var social = (dispatch) => {
    twitchieGraphicsClient.graphics.social.on('change', newAccounts => {
        dispatch(updateSocialAccountsAction(newAccounts || []));
    });
};

var subscribers = (dispatch) => {
    twitchie.on('user.subscription', subscriber => {
        dispatch(queueNotificationAction({
            topic: 'subscriber',
            user: subscriber.name,
            message: subscriber.message,
            scale: subscriber.months,
        }));
    });
};

var timer = (dispatch) => {
    twitchieGraphicsClient.graphics.timer.on('change', newTimer => {
        if (!newTimer) {
            dispatch(clearTimerAction());
            return;
        }
        dispatch(updateTimerAction(newTimer));
    });
};

var stream = (dispatch) => {
    twitchieGraphicsClient.stream.info.on('change', info => {
        if (!info) {
            return;
        }
        dispatch(updateStreamInfoAction(info));
    });
};

const bindDispatchToAPIEvents = ({ dispatch }) => {
    game(dispatch);
    social(dispatch);
    brb(dispatch);
    chat(dispatch);
    followers(dispatch);
    subscribers(dispatch);
    timer(dispatch);
    stream(dispatch);
};

const defaultState = {
    away: false,
    message: undefined,
};
var brb$1 = (state = defaultState, action) => {
    switch (action.type) {
        case BRB_UPDATE:
            return {
                away: !!action.payload.away,
                message: action.payload.message,
            };
        default:
            return state;
    }
};

let id = 0;
const defaultState$1 = {
    channel: '',
    messages: [],
};
const createNaughtyUserFilter = (user) => (message) => {
    if (message.type === ChatMessageTypeWithNotifications.NOTIFICATION) {
        return;
    }
    return user !== message.user.name;
};
var chat$1 = (state = defaultState$1, action) => {
    switch (action.type) {
        case CHAT_NOTIFICATION:
            id += 1;
            return Object.assign(Object.assign({}, state), { messages: [
                    ...state.messages,
                    Object.assign(Object.assign({}, action.payload), { type: ChatMessageTypeWithNotifications.NOTIFICATION, id: `notification-${id}` }),
                ] });
        case CHAT_MESSAGE:
            id += 1;
            return Object.assign(Object.assign({}, state), { messages: [
                    ...state.messages,
                    Object.assign(Object.assign({}, action.payload.message), { id: `message-${id}` }),
                ] });
        case CHAT_CLEAR_USER_MESSAGES:
            return Object.assign(Object.assign({}, state), { messages: state.messages.filter(createNaughtyUserFilter(action.payload.user)) });
        case CHAT_JOIN_CHANNEL:
            return action.payload !== state.channel
                ? {
                    channel: action.payload,
                    messages: [],
                }
                : state;
        default:
            return state;
    }
};

const defaultState$2 = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 0,
    width: 0,
};
var cutout = (state = defaultState$2, action) => {
    var _a, _b, _c, _d, _e, _f;
    switch (action.type) {
        case CUTOUT_UPDATE:
            return {
                top: (_a = action.payload.top) !== null && _a !== void 0 ? _a : state.top,
                left: (_b = action.payload.left) !== null && _b !== void 0 ? _b : state.left,
                bottom: (_c = action.payload.bottom) !== null && _c !== void 0 ? _c : state.bottom,
                right: (_d = action.payload.right) !== null && _d !== void 0 ? _d : state.right,
                height: (_e = action.payload.height) !== null && _e !== void 0 ? _e : state.height,
                width: (_f = action.payload.width) !== null && _f !== void 0 ? _f : state.width,
            };
        default:
            return state;
    }
};

const defaultState$3 = {
    id: '0',
    name: 'Nothing...yet!',
    box_art_url: '',
};
var game$1 = (state = defaultState$3, action) => {
    switch (action.type) {
        case GAME_UPDATE:
            return action.payload ? action.payload : defaultState$3;
        default:
            return state;
    }
};

let id$1 = 0;
const defaultState$4 = [];
const createNotificationFilter = (idToRemove) => (notification) => notification.id !== idToRemove;
var notifications = (state = defaultState$4, action) => {
    switch (action.type) {
        case QUEUE_NOTIFICATION:
            id$1 += 1;
            return [
                ...state,
                Object.assign(Object.assign({}, action.payload), { id: `notification-${id$1}` }),
            ];
        case CLEAR_NOTIFICATION:
            return state.filter(createNotificationFilter(action.payload));
        default:
            return state;
    }
};

const defaultState$5 = [];
var social$1 = (state = defaultState$5, action) => {
    switch (action.type) {
        case SOCIAL_UPDATE:
            return action.payload ? action.payload : [];
        default:
            return state;
    }
};

const defaultState$6 = null;
var timer$1 = (state = defaultState$6, action) => {
    switch (action.type) {
        case TIMER_UPDATE:
            return action.payload;
        case TIMER_CLEAR:
            return defaultState$6;
        default:
            return state;
    }
};

const defaultState$7 = null;
var stream$1 = (state = defaultState$7, action) => {
    switch (action.type) {
        case STREAM_UPDATE:
            return action.payload;
        default:
            return state;
    }
};



var defaultReducers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    brb: brb$1,
    social: social$1,
    game: game$1,
    chat: chat$1,
    cutout: cutout,
    notifications: notifications,
    timer: timer$1,
    stream: stream$1
});

const createTwitchieStore = (reducers, middleware) => {
    const currentReducers = reducers
        ? Object.assign(Object.assign({}, defaultReducers), reducers) : Object.assign({}, defaultReducers);
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(combineReducers(currentReducers), composeEnhancers(middleware ? applyMiddleware(...middleware) : applyMiddleware()));
    bindDispatchToAPIEvents(store);
    return store;
};

export default twitchieGraphicsClient;
export { BRB_UPDATE, CHAT_CLEAR_USER_MESSAGES, CHAT_JOIN_CHANNEL, CHAT_MESSAGE, CHAT_NOTIFICATION, CLEAR_NOTIFICATION, CUTOUT_UPDATE, ChatMessageTypeWithNotifications, GAME_UPDATE, QUEUE_NOTIFICATION, SOCIAL_UPDATE, STREAM_UPDATE, TIMER_CLEAR, TIMER_UPDATE, clearNotificationAction, clearTimerAction, clearUserMessagesAction, createTwitchieStore, getBRB, getChat, getChatChannel, getChatMessages, getCutout, getGameInfo, getMessage, getMessageAction, getNextNotification, getNotificationAction, getNotifications, getSocialAccounts, getStreamInfo, getTimer, isAway, joinChannelAction, queueNotificationAction, updateBRBAction, updateCutoutAction, updateGameInfoAction, updateSocialAccountsAction, updateStreamInfoAction, updateTimerAction };
//# sourceMappingURL=index.js.map
