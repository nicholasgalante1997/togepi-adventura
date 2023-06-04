import { validateEmail, validatePassword, buildEmailErrors, EmailNotLongEnough, InvalidEmail } from './auth';

describe('validateEmail', () => {
  test('it returns true for a valid email', () => {
    var email = 'chief.dumpling@colorado.com';
    expect(validateEmail(email)).toBeTruthy();
  });
  test('it returns false for an invalid email thats too short', () => {
    var email = 'smol';
    expect(validateEmail(email)).toBeFalsy();
  });
  test('it returns false for an email with invalid characters', () => {
    var email = '$%^&*(@mail.com';
    expect(validateEmail(email)).toBeFalsy();
  });
  test('it returns false for an email with invalid domain', () => {
    var email = 'chief.dumpling@mail.cork';
    expect(validateEmail(email)).toBeFalsy();
  });
});

describe('validatePassword', () => {
  test('it returns true for a valid password', () => {
    var validPassword = 'mAggieSimpson1999!';
    expect(validatePassword(validPassword)).toBeTruthy();
  });
  test('it returns false if theres no number', () => {
    var invalidPassword = 'Nick!Nick!';
    expect(validatePassword(invalidPassword)).toBeFalsy();
  });
  test('it returns false if its less than 8 characters', () => {
    var invalidPassword = 'Nick!';
    expect(validatePassword(invalidPassword)).toBeFalsy();
  });
  test('it returns false if theres no special characters', () => {
    var invalidPassword = 'NickNick123';
    expect(validatePassword(invalidPassword)).toBeFalsy();
  });
  test('it returns false is theres no capital letters', () => {
    var invalidPassword = 'chief_dumpling123';
    expect(validatePassword(invalidPassword)).toBeFalsy();
  });
});

describe('buildEmailErrors', () => {
  test('it returns null if it is a valid email', () => {
    var email = 'ash@pokemon.com';
    expect(buildEmailErrors(email)).toBeFalsy();
  });
  test('it returns an array with errors if the email is invalid', () => {
    var email = 'stub';
    expect(buildEmailErrors(email)).toBeTruthy();
    expect(buildEmailErrors(email)).toHaveLength(2);
    expect(buildEmailErrors(email)?.includes(EmailNotLongEnough)).toBeTruthy();
    expect(buildEmailErrors(email)?.includes(InvalidEmail)).toBeTruthy();
  })
})
