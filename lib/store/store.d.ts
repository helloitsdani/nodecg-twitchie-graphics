import { Middleware, Reducer, Store } from 'redux';
import * as defaultReducers from './reducers';
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}
declare const createTwitchieStore: (reducers?: Reducer<any, import("redux").AnyAction> | undefined, middleware?: Middleware<{}, any, import("redux").Dispatch<import("redux").AnyAction>>[] | undefined) => Store<defaultReducers.OverlayState, import("redux").AnyAction>;
export default createTwitchieStore;
