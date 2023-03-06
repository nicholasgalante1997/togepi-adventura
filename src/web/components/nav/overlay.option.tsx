import React from 'react';
import { OverlayOption, OverlayOptionSubtext } from './views';

import { ServiceTab, serviceTabs } from './component';
import { titleCase } from '../../utils';

const optionsSubtextMap: Record<ServiceTab, string> = {
  cards: 'View your card inventory.',
  grade: 'Submit cards for grading.',
  purchase: 'Purchase singles or bulk.',
  sell: 'Sell your bulk or singles.',
  trade: 'Trade with others.',
};

export function OptionsSection() {
  const [activeTab, setActiveTab] = React.useState<ServiceTab>();
  return (
    <div>
      {serviceTabs.map((tab) => (
        <>
          <OverlayOption
            onMouseEnter={() => setActiveTab(tab)}
            onMouseLeave={() => setActiveTab(undefined)}
          >
            {titleCase(tab)}
          </OverlayOption>
          {activeTab === tab && (
            <OverlayOptionSubtext>
              {optionsSubtextMap[activeTab]}
            </OverlayOptionSubtext>
          )}
        </>
      ))}
    </div>
  );
}
