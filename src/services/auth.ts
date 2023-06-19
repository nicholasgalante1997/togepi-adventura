import axios from 'axios';
import { Email } from '@server/types/auth';
import { logger } from '@server/utils/log';

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

  public async attemptSignUp(email: Email, password: string) {
    try {
      const { data, status } = await AuthService.net.post('users/create', { email, password });
      if (status !== 201) {
        throw new Error(JSON.stringify(data));
      }
      return data;
    } catch(e: any) {
      logger.error(e);
      return null;
    }
  }

  public async attemptSignIn(email: Email, password: string) {
    try {
      const { data, status } = await AuthService.net.post('users/login', { email, password });
      if (status !== 200) {
        throw new Error(JSON.stringify(data));
      }
      return data;
    } catch(e: any) {
      logger.error(e);
      return null;
    }
  }
}

export const authService = new AuthService();
