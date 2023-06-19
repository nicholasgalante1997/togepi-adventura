const NumbersAndLetters = new RegExp(/[\w\d\._]/g);
const MailDomain = new RegExp(/[\w]*.(com|net|edu|mail|eth|dev)/g);
const NumbersOnly = new RegExp(/[\d]/g);
const SpecialChars = new RegExp(/[^\d\w]/g);

export const EmailNotLongEnough = 'Email is not long enough.';
export const InvalidEmail = 'Email must be a valid email. For example, "ash@pokemon.com"';

export function validateEmail(email: string): boolean {
  if (email.length < 5) return false;
  if (!email.includes('@')) return false;
  if (!email.includes('.')) return false;

  const splitEmail = email.split('@');
  if (splitEmail.length !== 2) return false;
  const [address, domain] = splitEmail;
  if (!NumbersAndLetters.test(address)) return false;
  if (!MailDomain.test(domain)) return false;
  return true;
}

export function validatePassword(password: string) {
  /** too short */
  if (password.length < 8) return false;
  /** no numbers */
  if (!NumbersOnly.test(password)) return false;
  console.log('in validate password getting here')
  /** no special characters */
  if (!SpecialChars.test(password)) return false;
  /** no capital letters */
  let hasCapitalLetters = false;
  for (const char of password) {
    /** Capital letters have a value between 65 and 90 */
    if (char.charCodeAt(0) <= 90 && char.charCodeAt(0) >= 65) {
      hasCapitalLetters = true;
    }
  }
  if (!hasCapitalLetters) return false;
  return true;
}

export function buildEmailErrors(email: string): string[] | null {
  let errs: string[] = [];
  const length = email.length > 5;
  const hasAtChar = email.includes('@');
  const [addr = null, domain = null] = email.split('@');
  const hasValidAddress = addr && NumbersAndLetters.test(addr);
  const hasValidDomain = domain && MailDomain.test(domain);

  if (!length) {
    errs.push(EmailNotLongEnough);
  }
  if (!hasAtChar || !hasValidAddress || !hasValidDomain) {
    errs.push(InvalidEmail);
  }
  if (errs.length) return errs;
  return null;
}
