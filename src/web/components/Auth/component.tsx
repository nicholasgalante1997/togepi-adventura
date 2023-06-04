import React, { memo, useEffect, useState } from 'react';
import { AuthColumn, AuthContainer, AuthHeading, AuthTab, AuthTabBar, Image, ImageColumn, InputBlock, Label } from './styles';
import { withProfilerMetrics } from '@web/utils/profiler';
import { useTrackComponentMount } from '@web/hooks/useOnMount';
import { Input } from '../Input';
import { validateEmail, validatePassword } from '@web/utils/auth';

function AuthComponent() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [validForm, setValidForm] = useState(false);

  useTrackComponentMount('Auth');

  useEffect(
    () => {
      const valid = validateEmail(email ?? '') && validatePassword(password ?? '');
      if (validForm !== valid) {
        setValidForm(valid);
      }
    },
    [email, password]
  );

  return (
    <AuthContainer>
      <AuthColumn>
        <AuthHeading>Sign In</AuthHeading>
        <AuthTabBar>
          <AuthTab active>Sign In</AuthTab>
          <AuthTab>Sign Up</AuthTab>
        </AuthTabBar>
        <InputBlock>
          <Label>email</Label>
          <Input placeholder="professor.oak@kanto.com" />
        </InputBlock>
        <InputBlock>
          <Label>password</Label>
          <Input placeholder="cufantguessthispassword" type="password" />
        </InputBlock>
      </AuthColumn>
      <ImageColumn>
        <Image src="/kanto.gif" alt="Bulbasaur, Charmander, and Squirtle looking at a pokedex, completely engaged" />
      </ImageColumn>
    </AuthContainer>
  );
}

export const Auth = withProfilerMetrics('auth-component', memo(AuthComponent));
