import React from 'react';
import { LandingPageComponent, LandingPageProps as LPComponentProps } from '../components/LandingPage';
import { LocalizedContextProvider, ServerConfigContextProvider, UserProvider } from '../contexts';
import { useQueryLandingPageProps } from '../react-query-hooks';
import { FixedNav } from '../components/FixedNav';
import { Footer } from '../components/Footer';
import { ServerConfig } from '../../types/server-props';

type LandingPageProps = {
  serverConfig: ServerConfig;
};

export function LandingPage(props: LandingPageProps) {
  const [serverConfig, setServerConfig] = React.useState(props.serverConfig);
  React.useEffect(() => {
    setServerConfig(props.serverConfig);
  }, [props.serverConfig]);

  const { data, isLoading, isError, error } = useQueryLandingPageProps();

  if (isLoading) {
    return (
      <div className="page landing-page">
        <p>loading...</p>
      </div>
    );
  }

  if (isError || error) {
    if (typeof window !== 'undefined') {
      window.location.assign('/500');
    }
  }

  return (
    <React.StrictMode>
      <LocalizedContextProvider locale="en-US">
        <UserProvider>
          <ServerConfigContextProvider {...serverConfig}>
            <div className="page landing-page">
              <FixedNav />
              <LandingPageComponent {...data!} />
              <Footer pokemon="totodile" />
            </div>
          </ServerConfigContextProvider>
        </UserProvider>
      </LocalizedContextProvider>
    </React.StrictMode>
  );
}
