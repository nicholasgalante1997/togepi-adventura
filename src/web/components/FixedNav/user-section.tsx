import React from 'react';
import { AvatarSection, DispatchUserMutationSection, UserSectionContainer } from './views';

export function UserSection() {
  return (
    <UserSectionContainer>
      <AvatarSection></AvatarSection>
      <DispatchUserMutationSection></DispatchUserMutationSection>
    </UserSectionContainer>
  );
}
