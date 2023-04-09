import { HttpHandler, HttpHandlerInput } from '@solid/community-server';
import { getLoggerFor } from '@solid/community-server';


export class MacaroonMintHttpHandler extends HttpHandler {
  protected readonly logger = getLoggerFor(this);

  public async canHandle(input: HttpHandlerInput): Promise<void> {
    
    this.logger.info(input.request.url!);
    
  }

  public async handle(input: HttpHandlerInput): Promise<void> {
    throw new Error('Method not implemented.');
  }
  
}