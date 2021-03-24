import { httpService } from './httpService';

const URL = `https://dev.enmon.tech/auth`;

export interface IToken {
  accessToken: string,
}

export const authService = {
  async getAccessToken(email: string, password: string): Promise<IToken> {
    return (await httpService.post(`${URL}/login`, { email, password })).data;
  },
};
