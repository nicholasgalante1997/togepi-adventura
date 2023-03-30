import React from 'react';

type Route = {
    path: string,
    component: JSX.Element;
    state?: RouteState;
};

export type SimpleClientRouterProps = {
    routes: Route[];
};

type Path = string;
type RouteState = Record<string, any>;

export type LocationContext = {
    href: string;
    path: string;
    state?: string;
    back(): void;
    push(p: Path, s?: RouteState): void;
    reload(): void;
};

const defaultLocationContext = {
    href: '',
    path: '',
    back(){},
    push(p:Path,s?:RouteState){},
    reload(){}
};

const RoutingContext = React.createContext<LocationContext>(defaultLocationContext);
export const useRouteCtx = () => React.useContext(RoutingContext);

export function SimpleClientRouter(props: SimpleClientRouterProps){
    const [path, setPath] = React.useState<string>();
    const [href, setHref] = React.useState<string>();
    const [state, setState] = React.useState<RouteState | undefined>();
    const [history, setHistory] = React.useState<{ path: Path, state: RouteState }[]>();

    React.useEffect(
        () => {
            const windowHref = window.location.href;
            const state = window.history.state;
            const safeUrl = new URL(windowHref);
            const { pathname, href,  } = safeUrl;
            setPath(pathname);
            setHref(href);
            setState(state);
        },
        []
    );

    const render = props.routes.find(r => r.path === path)?.component;

    if (!path || !render || !href) {
        return null;
    }

    return (
        // <RoutingContext.Provider value={{ href, path, state, }}>
        //     {render}
        // </RoutingContext.Provider>
    );
}