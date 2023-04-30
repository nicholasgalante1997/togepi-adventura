import React from 'react';
import { UserSectionContainer, AvatarSection, DispatchUserMutationSection } from './views';

export function UserSection() {
  return (
    <UserSectionContainer>
      <AvatarSection></AvatarSection>
      <DispatchUserMutationSection></DispatchUserMutationSection>
    </UserSectionContainer>
  );
}
