import React from 'react';
import { ServerConfig } from '../../types/server-props';

const ServerConfigContext = React.createContext<ServerConfig>({});

type ServerConfigContextProviderProps = {
  children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
} & ServerConfig;

export const useGetServerCtx = () => React.useContext(ServerConfigContext);
export const useIsMobileDevice = () => {
  return (React.useContext(ServerConfigContext).userAgent ?? '').toLowerCase().includes('mobile');
};

export function ServerConfigContextProvider(props: ServerConfigContextProviderProps) {
  return (
    <ServerConfigContext.Provider
      value={{
        locale: props.locale,
        marketplace: props.marketplace,
        userAgent: props.userAgent,
      }}
    >
      {props.children}
    </ServerConfigContext.Provider>
  );
}
