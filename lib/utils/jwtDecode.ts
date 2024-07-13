import * as jose from "jose";

declare module "jose" {
  export interface JWTPayload {
    id: number;
    email: string;
  }
}

type jwtFuncProps = {
  token: string;
};

export const jwtFunc = async ({ token }: jwtFuncProps) => {
  const secretKey = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET as string);
  let isAuthenticated;

  try {
    const { payload } = await jose.jwtVerify(token, secretKey);
    isAuthenticated = payload;
    return isAuthenticated;
  } catch (err) {
    if (err instanceof Error) {
      if (err.name === "JWTExpired") {
        isAuthenticated = "Login is Failed! Token is Expired!";
        throw isAuthenticated;
      }
      if (err.name === "JWSInvalid") {
        isAuthenticated = "Login is Failed! Token is not Valid!";
        throw isAuthenticated;
      }
      throw err;
    }
  }
};
