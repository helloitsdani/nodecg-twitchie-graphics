import { SocialAccounts } from '../../types';
export declare const SOCIAL_UPDATE = "social/UPDATE";
export interface UpdateSocialAccountsAction {
    type: typeof SOCIAL_UPDATE;
    payload: SocialAccounts;
}
export declare type SocialActions = UpdateSocialAccountsAction;
export declare const updateSocialAccountsAction: (accounts: SocialAccounts) => UpdateSocialAccountsAction;
