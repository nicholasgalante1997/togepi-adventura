import React from 'react';
import styled, { css } from 'styled-components';

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 28px;
  border-radius: 8px;
  background-color: #ffffff;
  color: #000000;
  padding: 8px;
  &:hover {
    cursor: pointer;
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
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
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
