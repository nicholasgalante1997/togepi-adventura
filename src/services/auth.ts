import axios from 'axios';
import { Email } from '@server/types/auth';

class AuthService {
  private static headers = {
    'x-togepi-adventura-rainbow-card': process.env.TOGEPI_ADVENTURA_RAINBOW_CARD,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  private static getUrl() {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:8080/';
    }
    return process.env.CYNDAQUIL_SERVICE_URL;
  }
  private static net = axios.create({ url: this.getUrl(), headers: this.headers });

  public attemptSignUp(email: Email, password: string) {}

  public attemptSignIn(email: Email, password: string) {}
}

export { AuthService };
