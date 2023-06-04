import { Color } from '@web/styles/models';
import React from 'react';
import styled, { css } from 'styled-components';

export const StyledInputContainer = styled.div<{ inErrorState?: boolean; }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 28px;
  border-radius: 8px;
  background-color: #ffffff;
  color: #000000;
  border-color: ${props => props.inErrorState ? '1px solid red' : '1px solid black'};
  padding: 8px;
  &:hover {
    cursor: pointer;
    border: 1px solid ${Color.Palette300};
  }

  &:focus {
    border: 1px solid ${Color.Palette400};
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.65);
  }
`;

export function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="#000000"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-search"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}

export const StyledInput = styled.input<{ withSearchIcon?: boolean }>`
  all: unset;
  display: flex;
  height: 28.5px;
  border: none;
  border-radius: 8px;
  background-color: inherit;
  color: #000000;

  ${(props) =>
    props.withSearchIcon
      ? css`
          width: calc(100%-24px);
        `
      : ''};

  &:hover {
    cursor: pointer;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.65);
  }
`;

export const ListItem = styled.li`
    color: red;
    line-height: 1.15;
    font-size: 12px;
    margin-block: 0.25rem;
`;

export const UList = styled.ul``