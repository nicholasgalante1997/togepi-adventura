import { LocalizedContextProvider, ServerConfigContextProvider, UserProvider } from '@web/contexts/index';
import { FixedNav } from '@web/components/FixedNav';
import { Footer } from '@web/components/Footer';
import { LandingPageComponent } from '@web/components/LandingPage';
import React from 'react';
import { type ServerConfig } from '@server/types/server-props';
import { useQueryLandingPageProps } from '@web/react-query/hooks/index';
import { withProfilerMetrics } from '@web/utils/profiler';

interface LandingPageProps {
  serverConfig: ServerConfig;
}

export function LandingPage(props: LandingPageProps) {
  const [serverConfig, setServerConfig] = React.useState(props.serverConfig);
  React.useEffect(() => {
    setServerConfig(props.serverConfig);
  }, [props.serverConfig]);

  const { data, isLoading, isError } = useQueryLandingPageProps();

  if (isError || (!isLoading && data == null)) {
    if (typeof window !== 'undefined') {
      window.location.assign('/500');
    }
    return null;
  }

  return (
    <React.StrictMode>
      <LocalizedContextProvider locale="en-US">
        <UserProvider>
          <ServerConfigContextProvider {...serverConfig}>
            <div className="page landing-page">
              <FixedNav />
              {data != null && <LandingPageComponent {...data} />}
              {data == null && isLoading && <p>Loading...</p>}
              <Footer pokemon="totodile" />
            </div>
          </ServerConfigContextProvider>
        </UserProvider>
      </LocalizedContextProvider>
    </React.StrictMode>
  );
}

export const MemoizedLandingPage = React.memo(withProfilerMetrics<LandingPageProps>('togepi-landing-page', LandingPage));
