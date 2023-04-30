import React from 'react';
import { OverlayOption, OverlayOptionSubtext } from './views';

import { ServiceTab, serviceTabs } from './component';
import { titleCase } from '../../utils';

const optionsSubtextMap: Record<ServiceTab, string> = {
  'search cards': 'Search for cards to purchase or claim.',
  'deck builder': 'Use ChatGPT-4 to assist you in building a deck/deck strategies',
  grade: 'Submit cards for grading.',
  sell: 'Sell your bulk or singles.',
};

const optionsNavigationMap: Record<ServiceTab, string> = {
  'search cards': '/cards/search',
  'deck builder': '/deck/builder',
  grade: '/g/submit',
  sell: '/cards/sell',
};

export function OptionsSection() {
  const [activeTab, setActiveTab] = React.useState<ServiceTab>();
  return (
    <div>
      {serviceTabs.map((tab) => (
        <div onMouseEnter={() => setActiveTab(tab)} onMouseLeave={() => setActiveTab(undefined)}>
          <OverlayOption href={optionsNavigationMap[tab]} target="_self" focus={activeTab === tab}>
            {titleCase(tab)}
          </OverlayOption>
          {activeTab === tab && <OverlayOptionSubtext>{optionsSubtextMap[activeTab]}</OverlayOptionSubtext>}
        </div>
      ))}
    </div>
  );
}
