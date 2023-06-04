import { LocalizedContextProvider, ServerConfigContextProvider, UserProvider } from '@web/contexts/index';
import { FixedNav } from '@web/components/FixedNav';
import { Footer } from '@web/components/Footer';
import { LandingPageComponent } from '@web/components/LandingPage';
import React from 'react';
import { type ServerConfig } from '@server/types/server-props';
import styled from 'styled-components';
import { useQueryLandingPageProps } from '@web/react-query/hooks/index';
import { withProfilerMetrics } from '@web/utils/profiler';
import { useTrackComponentMount } from '@web/hooks/useOnMount';

interface LandingPageProps {
  serverConfig: ServerConfig;
}

const LoadingSection = styled.section`
  height: 500px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function LandingPage(props: LandingPageProps) {
  const [serverConfig, setServerConfig] = React.useState(props.serverConfig);
  React.useEffect(() => {
    setServerConfig(props.serverConfig);
  }, [props.serverConfig]);

  const { data, isLoading, isError } = useQueryLandingPageProps();

  useTrackComponentMount('Togepi-Landing-Page');

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
              {data == null && isLoading && (
                <LoadingSection>
                  <img src="/eevee.gif" alt="loading screen, eevee running in place" />
                </LoadingSection>
              )}
              <Footer pokemon="togepi" />
            </div>
          </ServerConfigContextProvider>
        </UserProvider>
      </LocalizedContextProvider>
    </React.StrictMode>
  );
}

export const MemoizedLandingPage = React.memo(withProfilerMetrics<LandingPageProps>('togepi-landing-page', LandingPage));
