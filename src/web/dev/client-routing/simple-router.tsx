import React from 'react';
import { Error404Page } from '../../pages';

export type Route = {
  path: string;
  component: JSX.Element;
  state?: RouteState;
};

export type SimpleClientRouterProps = {
  routes: Route[];
};

type Path = string;
type RouteState = Record<string, any>;

export type LocationContext = {
  path: string;
  state?: RouteState;
  back(): void;
  push(p: Path, s?: RouteState): void;
  reload(): void;
};

const defaultLocationContext = {
  path: '',
  back() {},
  push(p: Path, s?: RouteState) {},
  reload() {},
};

const RoutingContext = React.createContext<LocationContext>(
  defaultLocationContext
);
export const useRouteCtx = () => React.useContext(RoutingContext);

export function SimpleClientRouter(props: SimpleClientRouterProps) {
  const [path, setPath] = React.useState<string>(
    window?.location?.pathname ?? '/'
  );
  const [state, setState] = React.useState<RouteState | undefined>(
    window.history.state ?? undefined
  );
  const [history, setHistory] = React.useState<
    { path: Path; state?: RouteState }[]
  >([{ path: window.location.pathname }]);

  React.useEffect(() => {
    function preventNaturalNavigationInDev(e: PopStateEvent) {
      e.preventDefault();
    }
    window.addEventListener('popstate', preventNaturalNavigationInDev);
    return window.removeEventListener(
      'popstate',
      preventNaturalNavigationInDev
    );
  }, []);

  function push(p: Path, s?: RouteState): void {
    setPath(p);
    setState(s);
    setHistory((prev) => [...(prev ? prev : []), { path: p, state: s }]);
    window.history.replaceState(s ?? {}, '', p);
  }

  function back() {
    if (history && history?.length > 2) {
      const historyEntry = history[history.length - 2];
      push(historyEntry.path, historyEntry.state);
    }
  }

  function reload() {
    window.location.reload();
  }

  const render = props.routes.find((r) => r.path === path)?.component;

  if (!path || !render) {
    return <Error404Page />;
  }

  return (
    <RoutingContext.Provider value={{ path, state, back, reload, push }}>
      {render}
    </RoutingContext.Provider>
  );
}
