import { LOGIN_ERROR_MESSAGE, REGISTER_ERROR_MESSAGE } from '../constant/errorMessage';
import { REGISTER } from '../constant/rule';
import { postLoginServer, postRegisterServer } from '../utils/fetchServer';

export type UserInfoType = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export const login = async (loginUserInfo: { email: string; password: string }) => {
  try {
    return postLoginServer(loginUserInfo);
  } catch (error) {
    throw new Error(LOGIN_ERROR_MESSAGE.FAIL);
  }
};

export const register = async (userInfo: UserInfoType) => {
  try {
    return postRegisterServer(userInfo);
  } catch (error) {
    throw new Error(REGISTER_ERROR_MESSAGE.FAIL);
  }
};

export const validateLoginBehavior = (email: string, password: string) => {
  if (!email.length || !password.length) {
    throw new Error(LOGIN_ERROR_MESSAGE.BLANK_NOT_ALLOWED);
  }
};

export const validateRegisterBehavior = ({
  email,
  name,
  password,
  confirmPassword,
}: UserInfoType) => {
  if (isBlankInput(email, name, password, confirmPassword)) {
    throw new Error(REGISTER_ERROR_MESSAGE.BLANK_NOT_ALLOWED);
  }

  if (isExceedNameRange(name)) {
    throw new Error(REGISTER_ERROR_MESSAGE.EXCEED_NAME_RANGE);
  }

  if (isViolatePasswordRule(password)) {
    throw new Error(REGISTER_ERROR_MESSAGE.VIOLATE_PASSWORD_RULE);
  }

  if (isNotMatchWithPassword(password, confirmPassword)) {
    throw new Error(REGISTER_ERROR_MESSAGE.NO_MATCH_PASSWORD_CONFIRM);
  }
};

const isBlankInput = (email: string, name: string, password: string, confirmPassword: string) => {
  return !email.length || !name.length || !password.length || !confirmPassword.length;
};
const isExceedNameRange = (name: string) => {
  return name.length < REGISTER.NAME_MIN_LENGTH || name.length > REGISTER.NAME_MAX_LENGTH;
};
const isViolatePasswordRule = (password: string) => {
  return !REGISTER.PASSWORD_RULE.test(password);
};
const isNotMatchWithPassword = (password: string, confirmPassword: string) => {
  return password !== confirmPassword;
};
