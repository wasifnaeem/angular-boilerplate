import { JwtHelperService } from '@auth0/angular-jwt';

export interface IAuthData {
  id: string;
  permission: string;
  userType: string;
  LoginCount: number,
  LastLogin: Date
}

export interface IDecodeToken {
  authData: IAuthData;
  exp: number;
  iat: number;
}

export enum LOCAL_STORAGE {
  TOKEN = 'token',
  AUTH_DATA = 'auth_data',
  TOKEN_DECODE = 'token_decode',
  PROFILE_IMAGE_URL = 'profile_img_url',
}

export class LocalStorage {

  constructor() {
  }

  static get Token() {
    return localStorage.getItem(LOCAL_STORAGE.TOKEN)
  }

  static set Token(value: string) {
    localStorage.setItem(LOCAL_STORAGE.TOKEN, value)
  }

  static get Auth_Data(): IAuthData {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE.AUTH_DATA))
  }

  static set Auth_Data(value: IAuthData) {
    localStorage.setItem(LOCAL_STORAGE.AUTH_DATA, JSON.stringify(value))
  }

  static get Profile_Image_URL(): string {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE.PROFILE_IMAGE_URL));
  }

  static set Profile_Image_URL(value: string) {
    localStorage.setItem(LOCAL_STORAGE.PROFILE_IMAGE_URL, JSON.stringify(value));
  }

  static get Is_Token_Expired() {
    try {
      return new JwtHelperService().isTokenExpired(this.Token);
    } catch (error) {
      console.log(error);
      return true;
    }
  }

  static get Token_Expiry_Date(): Date {
    try {
      return new JwtHelperService().getTokenExpirationDate(this.Token);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static remove(item_name: string) {
    localStorage.removeItem(item_name);
  }

  static removeAll() {
    localStorage.clear();
  }

}
