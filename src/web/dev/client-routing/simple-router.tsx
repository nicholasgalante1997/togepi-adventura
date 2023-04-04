import React from 'react';
import { Error404Page } from '../../pages';

export type Route = {
  path: string;
  component: JSX.Element;
};

export type SimpleClientRouterProps = {
  routes: Route[];
};

export function SimpleClientRouter(props: SimpleClientRouterProps) {
  const [path, setPath] = React.useState<string>(
    window?.location?.pathname ?? '/'
  );

  React.useEffect(() => {
    if (window.location.pathname !== path) {
      setPath(window.location.pathname);
    }
  }, [window.location.pathname]);


  const render = props.routes.find((r) => r.path === path)?.component;

  if (!path || !render) {
    return <Error404Page />;
  }

  return (
    <div className="page">
      {render}
    </div>
  );
}
