import React from 'react';
import styled from 'styled-components';

const OverlayShell = styled.div`
  min-height: 220px;
  min-width: 200px;
  height: 260px;
  width: 260px;
  border-radius: 4px;
  background: #ffde00;
  padding: 8px;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.64) 0px 3px 8px;
  }
`;

const OverlayOption = styled.a<{ focus: boolean }>`
  font-weight: ${(props) => (props.focus ? '500' : '600')};
  font-size: ${(props) => (props.focus ? '14px' : '18px')};
  display: block;
  margin-block-start: 0.4rem;
  margin-block-end: 0.4rem;
  cursor: pointer;
  transition-property: font-size, font-weight;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
`;

const OverlayOptionSubtext = styled.p`
  font-size: 12px;
  font-weight: 400px;
  color: rgba(0, 0, 0, 0.44);
  margin-block-start: 0.02em;
  margin-block-end: 0.2em;
`;

const UserSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`;

const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;
`;

const DispatchUserMutationSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;

export {
  OverlayShell,
  OverlayOption,
  OverlayOptionSubtext,
  UserSectionContainer,
  AvatarSection,
  DispatchUserMutationSection,
};
