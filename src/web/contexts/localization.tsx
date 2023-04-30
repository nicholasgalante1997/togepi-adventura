import React from 'react';
import resourceBlob from '../localization/blobs/en-US/en-US.json';

type AppResourceBlob = typeof resourceBlob;
type ReactChildrenType = React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
type Locale = 'en-US';

const localizedResourceContext = React.createContext<AppResourceBlob>(resourceBlob);

export function LocalizedContextProvider(props: { children: ReactChildrenType; locale: Locale }) {
  const P = localizedResourceContext.Provider;
  return <P value={resourceBlob}>{props.children}</P>;
}

export function getString(key: string) {
  const {
    public: { strings },
  } = React.useContext(localizedResourceContext);
  for (const entry of Object.entries(strings)) {
    const [eKey, resourceObject] = entry;
    if (key === eKey) {
      return resourceObject.value;
    }
  }
}

export function getAsset(key: string) {
  const {
    public: { assets },
  } = React.useContext(localizedResourceContext);
  for (const entry of Object.entries(assets)) {
    const [eKey, asset] = entry;
    if (key === eKey) {
      return asset;
    }
  }
}
