import { getLoggerFor, CredentialGroup, CredentialSet, CredentialsExtractor } from '@solid/community-server';


/**
 * Should extract the Macaroon from request 
 */
export class MacaroonExtractor extends CredentialsExtractor {

  protected readonly logger = getLoggerFor(this);
  
  public async handle(): Promise<CredentialSet> {
    this.logger.info("In MacaroonExtractor !");
    return { [CredentialGroup.public]: {}};
  }
}