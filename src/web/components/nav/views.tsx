import React from 'react';
import styled from 'styled-components';

const NavShell = styled.div<{ withActiveHover?: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const ExtendedNavShell = styled.div`
  width: 100%;
  margin: 0;
  padding: 12px;
  background: #0075be;
  border-bottom: 1px solid #847c7c;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow: hidden;
`;

const MainNavShell = styled.div`
  width: 100%;
  margin: 0;
  padding: 8px;
  background: inherit;
  border-bottom: 1px solid #847c7c;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoShell = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: row;
  margin: 6px;
`;

const LogoSlotLeft = styled.div`
  width: 50%;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #0075be;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #ffcc00;
`;

const LogoSlotRight = styled.div`
  width: 50%;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0075be;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const LogoText = styled.h6`
  font-family: 'Secular One', sans-serif;
  font-weight: bold;
  color: #0075be;
  font-size: 30px;
  margin-block-start: 0.04em;
  margin-block-end: 0.04em;
`;

const LogoSubText = styled.p`
  font-family: 'Secular One', sans-serif;
  color: #ffcc00;
  font-size: 22px;
  margin-block-start: 0.04em;
  margin-block-end: 0.04em;
  max-width: 80%;
  line-height: 1;
`;

const ServicesShell = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 6px;
`;

const UserRegistryShell = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 6px;
`;

const ServiceLink = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: black;
  align-items: center;
  &:hover {
    font-size: 18px;
    color: #0075be;
  }
`;

const ExtendedColumn = styled.div`
  min-height: 60px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 240px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 4px;
  justify-content: flex-start;
  align-items: flex-start;

  & strong {
    margin-bottom: 8px;
    color: white;
    font-size: 14px;
    line-height: 1.15;
  }

  & div {
    margin-top: 4px;
  }

  & h3 {
    color: #ffcc00;
  }
`;

const OverlayShell = styled.div`
  min-height: 220px;
  min-width: 200px;
  height: 260px;
  width: 260px;
  border-radius: 4px;
  background: #fff;
  padding: 8px;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const OverlayOption = styled.a`
  font-weight: 600;
  font-size: 18px;
  display: block;
  margin-block-start: 0.4rem;
  margin-block-end: 0.4rem;
  cursor: pointer;
  transition-property: font-size, font-weight;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  &:hover {
    transition-property: font-size, font-weight;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
    font-size: 14px;
    font-weight: 500;
  }
`;

const OverlayOptionSubtext = styled.p`
  font-size: 12px;
  font-weight: 400px;
  color: rgba(0, 0, 0, 0.25);
  margin-block-start: 0.02em;
  margin-block-end: 0.2em;
`;

export const UserSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`

export {
  ExtendedNavShell,
  LogoShell,
  LogoSlotLeft,
  LogoSlotRight,
  LogoSubText,
  LogoText,
  MainNavShell,
  NavShell,
  ServiceLink,
  ServicesShell,
  UserRegistryShell,
  ExtendedColumn,
  OverlayShell,
  OverlayOption,
  OverlayOptionSubtext,
};
