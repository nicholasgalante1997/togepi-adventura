import React from 'react';
import { getAsset, getString } from '../../contexts';
import { Input } from '../Input';
import { HamburgerMenuIcon } from './hamburger-menu.icon';
import { NavOverlay } from './overlay';
import {
  ModernNavContainer,
  LogoBox,
  LogoCircleColorBackdrop,
  LogoContainer,
  LogoText,
  TabContainer,
  TabText,
  SearchBarContainer,
  SearchLabel,
  SnapRightContainer,
  LocalizedTabOverlay,
  LocalizedTabHeading,
  LocalizedTabLink,
} from './views';

export type ServiceTab = 'grade' | 'sell' | 'search cards' | 'deck builder';

export const serviceTabs: readonly ServiceTab[] = ['grade', 'sell', 'search cards', 'deck builder'] as const;

const COMPONENT_PREFIX = 'desktopNavBar' as const;

export function MobileFixedNav() {
  const [visible, setVisible] = React.useState(false);
  return (
    <div onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} className="fixed-nav">
      <HamburgerMenuIcon />
      <NavOverlay visible={visible} />
    </div>
  );
}

export function FixedNav() {
  const [activeOverlay, setActiveOverlay] = React.useState<string | undefined>();
  const [activeOverlaySubtext, setActiveOverlaySubtext] = React.useState<string | undefined>();

  function onLogoBoxClick() {
    if (typeof window !== 'undefined') {
      window.location.assign('/');
    }
  }

  const logoTextOrUndefined = getString(COMPONENT_PREFIX + '_logoText');
  const logoIconImageOrUndefined = getAsset(COMPONENT_PREFIX + '_logoInnerIcon');
  const tokensTabTitleOrUndefined = getString(COMPONENT_PREFIX + '_tokensTab_title');

  function renderLogo() {
    return (
      <LogoContainer tabIndex={1} onClick={onLogoBoxClick}>
        <LogoBox>
          <LogoCircleColorBackdrop>
            <img src={logoIconImageOrUndefined} />
          </LogoCircleColorBackdrop>
        </LogoBox>
        <LogoText>{logoTextOrUndefined}</LogoText>
      </LogoContainer>
    );
  }

  function renderTokensInteractiveTab() {
    return (
      <TabContainer
        tabIndex={1}
        onMouseEnter={function () {
          setActiveOverlay('tokens');
        }}
        onMouseLeave={function () {
          setActiveOverlay(undefined);
        }}
      >
        <TabText tabIndex={1}>{tokensTabTitleOrUndefined}</TabText>
        {activeOverlay === 'tokens' && (
          <LocalizedTabOverlay tabIndex={1} float="l">
            <LocalizedTabHeading tabIndex={1}>Tokens and Other Virtual Collectibles</LocalizedTabHeading>
            <hr style={{ width: '95%' }} color={'#000000'} />
            <LocalizedTabLink
              onMouseEnter={function () {
                setActiveOverlaySubtext('popular-tokens');
              }}
              onMouseLeave={function () {
                setActiveOverlaySubtext(undefined);
              }}
              id="nav-link__popular-tokens"
            >
              Popular Tokens
            </LocalizedTabLink>
            <LocalizedTabLink
              onMouseEnter={function () {
                setActiveOverlaySubtext('submit-art');
              }}
              onMouseLeave={function () {
                setActiveOverlaySubtext(undefined);
              }}
              id="nav-link__submit-art"
            >
              Submit Art
            </LocalizedTabLink>
            <LocalizedTabLink
              onMouseEnter={function () {
                setActiveOverlaySubtext('claim-tokens');
              }}
              onMouseLeave={function () {
                setActiveOverlaySubtext(undefined);
              }}
              id="nav-link__claim-tokens"
            >
              Claim Token Codes
            </LocalizedTabLink>
          </LocalizedTabOverlay>
        )}
      </TabContainer>
    );
  }

  function renderGradingInteractiveTab() {
    return (
      <TabContainer
        onMouseEnter={function () {
          setActiveOverlay('grading');
        }}
        onMouseLeave={function () {
          setActiveOverlay(undefined);
        }}
      >
        <TabText>Grading</TabText>
        {activeOverlay === 'grading' && (
          <LocalizedTabOverlay float="l">
            <LocalizedTabHeading>Submit Cards for Grading</LocalizedTabHeading>
            <hr style={{ width: '95%' }} color={'#000000'} />
            <LocalizedTabLink>Submission Guide</LocalizedTabLink>
            <LocalizedTabLink>Professor Oak</LocalizedTabLink>
            <LocalizedTabLink>Submit a Card for Grading</LocalizedTabLink>
          </LocalizedTabOverlay>
        )}
      </TabContainer>
    );
  }

  function renderSearchBar() {
    return (
      <SearchBarContainer>
        <SearchLabel>Search Cards, Tokens, Sets</SearchLabel>
        <Input placeholder="Entei V..." />
      </SearchBarContainer>
    );
  }

  function renderUserInteractiveTab() {
    return (
      <TabContainer>
        <TabText
          onMouseEnter={function () {
            setActiveOverlay('user');
          }}
          onMouseLeave={function () {
            setActiveOverlay(undefined);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-user"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </TabText>
        {activeOverlay === 'user' && <LocalizedTabOverlay float="r"></LocalizedTabOverlay>}
      </TabContainer>
    );
  }

  function renderCartInteractiveTab() {
    return (
      <TabContainer
        onMouseEnter={function () {
          setActiveOverlay('cart');
        }}
        onMouseLeave={function () {
          setActiveOverlay(undefined);
        }}
      >
        <TabText>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-shopping-cart"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </TabText>
        {activeOverlay === 'cart' && <LocalizedTabOverlay float="r"></LocalizedTabOverlay>}
      </TabContainer>
    );
  }

  function renderRightLockedTabs() {
    return (
      <SnapRightContainer>
        {renderUserInteractiveTab()}
        {renderCartInteractiveTab()}
      </SnapRightContainer>
    );
  }

  return (
    <ModernNavContainer tabIndex={1}>
      {renderLogo()}
      {renderTokensInteractiveTab()}
      {renderGradingInteractiveTab()}
      {renderSearchBar()}
      {renderRightLockedTabs()}
    </ModernNavContainer>
  );
}
