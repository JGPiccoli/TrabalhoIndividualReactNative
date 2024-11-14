export type PropsRoute = {
    StackLogin: undefined;
    TabsHome: undefined;
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends PropsRoute {}
    }
}