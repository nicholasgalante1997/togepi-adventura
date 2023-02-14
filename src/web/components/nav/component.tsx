import React from 'react';
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
  ExtendedColumn
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
        >
          {sTab.toUpperCase()}
        </ServiceLink>
      ))}
    </ServicesShell>
  );
}

function ExtendedActiveGradeBar(){
  return (
    <>
      <ExtendedColumn>
        <h3>Grade Submission Packs</h3>
        <strong>We offer a variety of packages for when you want to submit your extremely dope cards for grading.</strong>
        <div>
          <a target="_self" href="/grading/mini-pack-submission">
            1 - 5 Cards
          </a>
        </div>
        <div>
          <a target="_self" href="/grading/standard-pack-submission">
            5 - 25 Cards
          </a>
        </div>
        <div>
          <a target="_self" href="/grading/superior-pack-submission">
            25 - 100 Cards
          </a>
        </div>
        <div>
          <a target="_self" href="/grading/national-dex-pack-submission">
            100 or More Cards
          </a>
        </div>
      </ExtendedColumn>
      <ExtendedColumn>
        <h3>View our <i>Grading Standards</i></h3>
        <strong>Everyone has standards, some high, some so low they couldnt trip on them in skis. We try to fall on the higher side. But you see for yourself. See how our grading process works below before you're ready to submit your boys.</strong>
        <div>
          <a target="_self" href="/grading-standards">
            Grading Manifest
          </a>
        </div>
      </ExtendedColumn>
      <ExtendedColumn>
        <h3>Packing and Shipping Recommendations</h3>
        <strong>Shipping in the United States absolutely blows. We're here to work with you to make this the least blow-y experience possible.</strong>
        <div>
          <a target="_self" href="/packing-guide">
            Packing Guide
          </a>
        </div>
        <div>
          <a target="_self" href="/shipping-guide">
            Shipping Guide
          </a>
        </div>
      </ExtendedColumn>
      <ExtendedColumn>
        <h3>View Our Perfect 10 Gallery</h3>
        <strong>If your submitted card is a perfect 10, we display it here. The Elite Four, Hall of Fame if you'll indulge us.</strong>
        <div>
          <a target="_self" href="/perfect-tens">
            Champion's Room
          </a>
        </div>
      </ExtendedColumn>
    </>
  );
}

function ExtendedActivePurchaseBar(){
  return (
    <>
      <ExtendedColumn>
        <h3>Bulk Grab Commons By Set</h3>
        <strong>Grab in packs of 50</strong>
        <div>
          <a target="_self" href="/grading/mini-pack-submission">
            1 - 5 Cards
          </a>
        </div>
      </ExtendedColumn>
      <ExtendedColumn>
        <h3>View our <i>Grading Standards</i></h3>
        <strong>Everyone has standards, some high, some so low they couldnt trip on them in skis. We try to fall on the higher side. But you see for yourself. See how our grading process works below before you're ready to submit your boys.</strong>
        <div>
          <a target="_self" href="/grading-standards">
            Grading Manifest
          </a>
        </div>
      </ExtendedColumn>
      <ExtendedColumn>
        <h3>Packing and Shipping Recommendations</h3>
        <strong>Shipping in the United States absolutely blows. We're here to work with you to make this the least blow-y experience possible.</strong>
        <div>
          <a target="_self" href="/packing-guide">
            Packing Guide
          </a>
        </div>
        <div>
          <a target="_self" href="/shipping-guide">
            Shipping Guide
          </a>
        </div>
      </ExtendedColumn>
      <ExtendedColumn>
        <h3>View Our Perfect 10 Gallery</h3>
        <strong>If your submitted card is a perfect 10, we display it here. The Elite Four, Hall of Fame if you'll indulge us.</strong>
        <div>
          <a target="_self" href="/perfect-tens">
            Champion's Room
          </a>
        </div>
      </ExtendedColumn>
    </>
  );
}

function getExtendedContent(activeTab: ServiceTab){
  const ld: Record<ServiceTab, JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNode[]> = {
    grade: <ExtendedActiveGradeBar />,
    purchase: null,
    sell: null,
    trade: null
  };
  return ld[activeTab];
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
        <ExtendedNavShell onMouseLeave={() => setActiveTab(undefined)}>
          {getExtendedContent(activeTab)}
        </ExtendedNavShell>
      )}
    </NavShell>
  );
}
