import React from 'react';

export function ComponentWithProps(props: { text: string }) {
  return <div>{props.text}</div>;
}
