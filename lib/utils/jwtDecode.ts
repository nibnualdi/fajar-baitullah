import * as jose from "jose";

type jwtFuncProps = {
  token: string;
};

export const jwtFunc = async ({ token }: jwtFuncProps) => {
  const secretKey = new TextEncoder().encode(process.env.JWT_SECRET as string);
  let isAuthenticated;

  try {
    const { payload } = await jose.jwtVerify(token, secretKey);
    isAuthenticated = payload;
    return isAuthenticated;
  } catch (err) {
    if (err instanceof Error) {
      if (err.name === "JWTExpired") {
        isAuthenticated = "Token is Expired!";
        throw "Token is Expired!";
      }
      if (err.name === "JWSInvalid") {
        isAuthenticated = "Token is not Valid!";
        throw "Token is not Valid!";
      }
    }
  }
};
