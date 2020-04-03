// These urls for RouterModule
export const ngRoutes = {
    account: {
        url: 'account',
        childrens: {
            login: 'login',
            signup: 'signup',
            forgot_password: 'forgot-password',
            recover_password: 'recover-password',
            change_password: 'change-password',
        }
    }
}

// These urls for anchors or routerLink
export const AnchorURLs = {
    account: {
        login: `/${ngRoutes.account.url}/${ngRoutes.account.childrens.login}`,
        signup: `/${ngRoutes.account.url}/${ngRoutes.account.childrens.signup}`,
        forgot_password: `/${ngRoutes.account.url}/${ngRoutes.account.childrens.forgot_password}`,
        recover_password: `/${ngRoutes.account.url}/${ngRoutes.account.childrens.recover_password}`,
        change_password: `/${ngRoutes.account.url}/${ngRoutes.account.childrens.change_password}`,
    }
}
