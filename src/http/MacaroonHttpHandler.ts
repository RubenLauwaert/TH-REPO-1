import { getLoggerFor } from '@solid/community-server';
import type { HttpHandlerInput } from '@solid/community-server';
import { HttpHandler } from '@solid/community-server';


/**
 * HTTP handler for macaroons
 */
export class MacaroonHttpHandler extends HttpHandler {
  protected readonly logger = getLoggerFor(this);

  public constructor() {
    super();
  }

  public async canHandle(input: HttpHandlerInput): Promise<void> {
      const { request } = input;
      console.log(`Checking if request must be handled by MacaroonHttpHandler!`);
  }


  public async handle({ request, response }: HttpHandlerInput): Promise<void> {
    this.logger.info("Handling request for macaroons !");
  }
}