import React from 'react';
import styled from 'styled-components';
import {
  LogoShell,
  LogoSlotLeft,
  LogoText,
  ServicesShell,
  ServiceLink,
  NavShell,
  MainNavShell,
  LogoSlotRight,
  LogoSubText,
  ExtendedNavShell,
  UserRegistryShell,
} from './views';

type ServiceTab = 'grade' | 'trade' | 'purchase' | 'sell';

const serviceTabs: readonly ServiceTab[] = [
  'grade',
  'purchase',
  'trade',
  'sell',
] as const;

/** functional components */

function LogoSlot() {
  return (
    <LogoShell>
      <LogoSlotLeft>
        <LogoText>PALLET</LogoText>
      </LogoSlotLeft>
      <LogoSlotRight>
        <LogoSubText>
          Trading CO
        </LogoSubText>
      </LogoSlotRight>
    </LogoShell>
  );
}

function ServicesSlot(props: {
  activeServiceTab?: ServiceTab;
  setActiveTab: React.Dispatch<React.SetStateAction<ServiceTab | undefined>>;
}) {
  return (
    <ServicesShell>
      {serviceTabs.map((sTab) => (
        <ServiceLink
          onMouseEnter={() => props.setActiveTab(sTab)}
          onMouseLeave={() => props.setActiveTab(undefined)}
        >
          {sTab.toUpperCase()}
        </ServiceLink>
      ))}
    </ServicesShell>
  );
}

/** Main Export */

export function Nav() {
  const [activeTab, setActiveTab] = React.useState<ServiceTab>();
  return (
    <NavShell withActiveHover={typeof activeTab !== "undefined"}>
      <MainNavShell>
        <LogoSlot />
        <ServicesSlot
          setActiveTab={setActiveTab}
          activeServiceTab={activeTab}
        />
        <UserRegistryShell>
          
        </UserRegistryShell>
      </MainNavShell>
      {typeof activeTab !== "undefined" && (
        <ExtendedNavShell>

        </ExtendedNavShell>
      )}
    </NavShell>
  );
}
