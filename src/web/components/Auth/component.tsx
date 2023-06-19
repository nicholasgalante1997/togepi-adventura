import React, { memo, useEffect, useState } from 'react';
import { AuthColumn, AuthContainer, AuthHeading, AuthTab, AuthTabBar, Image, ImageColumn, InputBlock, Label } from './styles';
import { withProfilerMetrics } from '@web/utils/profiler';
import { useTrackComponentMount } from '@web/hooks/useOnMount';
import { Input } from '../Input';
import { validateEmail, validatePassword, buildEmailErrors } from '@web/utils/auth';
import { authService } from '@server/services/auth';
import { Email } from '@server/types/auth';
import { logger } from '@server/utils/log';

function AuthComponent() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [validForm, setValidForm] = useState(false);
  const [returningUser, setReturningUser] = useState<boolean>(false);

  useTrackComponentMount('Auth');

  useEffect(
    () => {
      console.log({ email });
      console.log({ password });
      console.log({ validPassword: validatePassword(password ?? '') })
      const valid = validateEmail(email ?? '') && validatePassword(password ?? '');
      console.log({ valid, validForm });
      if (validForm !== valid) {
        setValidForm(valid);
      }
    },
    [email, password]
  );

  const onSubmit = async () => {
    if (!validForm) {
      return;
    }
    try {
      const authFn = returningUser ? authService.attemptSignIn : authService.attemptSignUp;
      const data = await authFn(email as Email, password!);
      logger.info(data);
    } catch (e: unknown) {
      logger.error(e);
    }
  }

  return (
    <AuthContainer>
      <AuthColumn>
        <AuthHeading>Sign In</AuthHeading>
        <AuthTabBar>
          <AuthTab onClick={() => setReturningUser(true)} active={returningUser}>Sign In</AuthTab>
          <AuthTab onClick={() => setReturningUser(false)} active={!returningUser}>Sign Up</AuthTab>
        </AuthTabBar>
        <InputBlock>
          <Label>Email</Label>
          <Input value={email} onChangeHandler={(e) => setEmail(e.target.value)} inErrorState={!!email && !validateEmail(email)} errors={buildEmailErrors(email ?? '') ?? []} placeholder="professor.oak@kanto.com" />
        </InputBlock>
        <InputBlock>
          <Label>password</Label>
          <Input value={password} onChangeHandler={(e) => setPassword(e.target.value)} inErrorState={!!password && !validatePassword(password)} placeholder="cufantguessthispassword" type="password" />
        </InputBlock>
        <button onClick={onSubmit} disabled={!validForm}>Submit</button>
      </AuthColumn>
      <ImageColumn>
        <Image src="/kanto.gif" alt="Bulbasaur, Charmander, and Squirtle looking at a pokedex, completely engaged" />
      </ImageColumn>
    </AuthContainer>
  );
}

export const Auth = withProfilerMetrics('auth-component', memo(AuthComponent));
