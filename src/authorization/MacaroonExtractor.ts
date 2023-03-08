import { getLoggerFor, CredentialGroup, CredentialSet, CredentialsExtractor, HttpRequest, joinFilePath, UnauthorizedHttpError, BadRequestHttpError } from '@solid/community-server';
import {} from '@solid/community-server';
import { NotImplementedHttpError } from '@solid/community-server';
import { matchesAuthorizationScheme } from '@solid/community-server';

import {  verifyMacaroon } from './MacaroonVerifier';



/**
 * Should extract the Macaroon from request 
 */
export class MacaroonExtractor extends CredentialsExtractor {

  protected readonly logger = getLoggerFor(this);


  public async canHandle({headers}: HttpRequest): Promise<void> {
    const { authorization } = headers;
    if (!matchesAuthorizationScheme('Bearer', authorization)) {
      throw new NotImplementedHttpError('No Bearer Authorization header specified.');
    }
  }

  public async handle(request: HttpRequest): Promise<CredentialSet> {
    const { headers: { authorization }} = request;
    const { isValid, macaroon, webid } = verifyMacaroon(authorization!,request);
    if(isValid){
      this.logger.info(`Verified WebID via Macaroon access token: ${webid}`);
      this.logger.info(`Serialized macaroon token : ${macaroon}`);
      return { [CredentialGroup.public]: {}};
    }else{
      throw new BadRequestHttpError("Error verifying webid via Macaroon access token");
    }
    
  }
}