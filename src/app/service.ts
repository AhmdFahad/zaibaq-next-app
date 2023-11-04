import Cookies from "js-cookie";
import jwt_decode, { JwtPayload } from "jwt-decode";
export const isTokenValid = (): boolean => {
  const token = Cookies.get("token");
  try {
    if (token === undefined) {
      return false;
    }
    const decoded: { exp: number } = jwt_decode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp < currentTime) {
      Cookies.remove("token");
      return false;
    } else {
      return true;
    }
  } catch (error) {
    Cookies.remove("token");
    return false;
  }
};

export const isUserauthenticated = (): boolean => {
  const token = Cookies.get("token");
  try {
    if (token === undefined) {
      return false;
    }
    const decoded: { exp: number } = jwt_decode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp < currentTime) {
      Cookies.remove("token");
      return false;
    } else {
      return true;
    }
  } catch (error) {
    Cookies.remove("token");
    return false;
  }
};
