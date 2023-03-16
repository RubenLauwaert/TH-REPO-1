import { getLoggerFor } from '@solid/community-server';
import type { HttpHandlerInput } from '@solid/community-server';
import { HttpHandler } from '@solid/community-server';

const MACAROON_BASE_PATH = "/.macaroon";
const DISCHARGE_PATH = MACAROON_BASE_PATH + "/discharge";
const FETCH_PATH = MACAROON_BASE_PATH + "/fetch";


/**
 * HTTP handler for macaroons
 */
export class MacaroonHttpHandler extends HttpHandler {
  protected readonly logger = getLoggerFor(this);

  public constructor() {
    super();
  }

  public static isFetchURL(url:string|undefined):boolean{
    return url!.normalize() === FETCH_PATH.normalize();
  }

  public static isDischargeURL(url: string|undefined):boolean{  
    return url!.normalize() === DISCHARGE_PATH.normalize();
  }

  public async canHandle(input: HttpHandlerInput): Promise<void> {
      
    
  }


  public async handle(input: HttpHandlerInput): Promise<void> {
    this.logger.info("Handling request for macaroons !");
    const { request } = input;
      const { url } = request;

    // Handle fetching of macaroons
    if(MacaroonHttpHandler.isFetchURL(url)){
      console.log("Checking if fetching of macaroon is allowed!");
    }
    // Handle discharging of macaroons
    else if(MacaroonHttpHandler.isDischargeURL(url)){
      console.log("Checking if discharging of macaroon is allowed!");
    }
  }




}