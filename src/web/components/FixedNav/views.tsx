import React from 'react';
import styled from 'styled-components';
import { Color } from '../../styles/models';

export const ModernNavContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0px;
  --transition-curve: cubic-bezier(0.05, 0, 0.2, 1);
  box-shadow: rgba(229, 232, 235, 0) 0px 1px 0px 0px;
  max-width: 100vw;
  height: 72px;
  top: 0px;
  position: sticky;
  isolation: isolate;
  z-index: 1;
  transition: top 0.5s var(--transition-curve), background-color 0.2s var(--transition-curve), box-shadow 0.2s var(--transition-curve),
    color 0.2s var(--transition-curve);
  background-color: ${Color.Tint200};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoContainer = styled.div`
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 20%;
  min-width: 240px;
  max-width: 500px;
  cursor: pointer;
`;

export const LogoBox = styled.div`
  height: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoCircleColorBackdrop = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Color.Palette200};
`;

export const LogoText = styled.h2`
  font-family: 'Poppins';
  color: ${Color.Text};
  margin-block: 0.25rem;
  margin-left: 8px;
  margin-right: 8px;
  font-size: 20px;
`;

export const TabContainer = styled.div`
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 7.5%;
  min-width: 72px;
  max-width: 112px;
  cursor: pointer;
  position: relative;
`;

export const TabText = styled.span`
  font-family: 'Poppins';
  color: ${Color.Text};
  margin-left: 4px;
  margin-right: 4px;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    transform: scale(1.2);
  }

  position: relative;
`;

export const LocalizedTabOverlay = styled.div<{ float: 'l' | 'r' }>`
  position: absolute;
  bottom: -200px;
  ${(props) => (props.float === 'l' ? 'left: 40px;' : 'right: 40px;')};
  width: 200px;
  height: 200px;
  border-radius: 4px;
  background-color: ${Color.TintMax};
  display: flex;
  flex-direction: column;
  padding: 4px;
  z-index: 10;
`;

export const LocalizedTabHeading = styled.h4`
  margin-block: 0.25rem;
  color: white;
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 14px;
`;

export const LocalizedTabLink = styled.a`
  margin-block: 0.04em;
  color: white;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;

  &:hover {
    transform: scale(1.2);
    color: ${Color.Tint200};
    margin-left: 20px;
    transition: margin-left 300ms, transform 300ms;
  }
`;

export const SearchBarContainer = styled.div`
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const SnapRightContainer = styled.div`
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const SearchLabel = styled.label`
  line-height: 1.15;
  font-size: 14px;
  font-family: 'Poppins';
  color: ${Color.Palette400};
  margin-left: 16px;
  margin-right: 16px;
`;

export const OverlayShell = styled.div`
  min-height: 220px;
  min-width: 200px;
  height: 260px;
  width: 260px;
  border-radius: 4px;
  background: #000000;
  padding: 8px;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 3;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.64) 0px 3px 8px;
  }
`;

export const OverlayOption = styled.a<{ focus: boolean }>`
  font-weight: ${(props) => (props.focus ? '500' : '600')};
  font-size: ${(props) => (props.focus ? '14px' : '18px')};
  display: block;
  margin-block-start: 0.4rem;
  margin-block-end: 0.4rem;
  cursor: pointer;
  transition-property: font-size, font-weight;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  color: white;
`;

export const OverlayOptionSubtext = styled.p`
  font-size: 12px;
  font-weight: 400px;
  color: #d3d3d3;
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
`;

export const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;
`;

export const DispatchUserMutationSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;
