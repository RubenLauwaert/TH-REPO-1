import { HttpError, HttpRequest } from '@solid/community-server';
import {MacaroonsBuilder, Macaroon, MacaroonsVerifier} from 'macaroons.js';

const SECRET_KEY = 'Bob';
const BASE_PATH = 'http://localhost:3000';

type MacaroonAccessTokenPayload = {
  isValid: boolean,
  webid?: string,
  macaroon?: string
}


export function verifyMacaroon(bearerAuthHeader: string, httpRequest:HttpRequest):MacaroonAccessTokenPayload {
  const serializedMacaroon = bearerAuthHeader.split(" ")[1];
  // Deserialize macaroon
  const macaroon = MacaroonsBuilder.deserialize(serializedMacaroon as string);

  // -Verify caveats of root macaroon
  let verifier = new MacaroonsVerifier(macaroon);
  // --Check if location of requested resource matches location of request
  verifier.satisfyExact(`resourceURI = ${BASE_PATH + httpRequest.url}`);
  // --Check if method of request is the same as method in macaroon
  verifier.satisfyExact(`method = ${httpRequest.method}`);
  // --Check if WebId from DPOP or Bearer matches WebId in macaroon

  // --Check Third-Party caveats

 
  return {
    isValid : verifier.isValid(SECRET_KEY),
    webid : "This WebId is hardcoded and should be extracted from macaroon",
    macaroon: macaroon.inspect()
  };
  
}