import Cookies from "js-cookie";
import jwt_decode, { JwtPayload } from "jwt-decode";

export function isAuthenticated(): boolean {
  const token = Cookies.get("jwtToken");

  if (!token) {
    return false;
  }
  if (token === undefined) {
    return false;
  }
  // You may want to check the token's expiration here
  const decodedToken: JwtPayload = jwt_decode(token);
  const currentTime = Date.now() / 1000;

  if (decodedToken.exp && decodedToken.exp < currentTime) {
    // Token has expired
    return false;
  }

  return true;
}
