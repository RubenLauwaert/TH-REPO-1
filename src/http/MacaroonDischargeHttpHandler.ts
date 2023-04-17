import { HttpHandler, HttpHandlerInput } from '@solid/community-server';
import { getLoggerFor } from '@solid/community-server';


export class MacaroonDischargeHttpHandler extends HttpHandler {
  protected readonly logger = getLoggerFor(this);
  private path:string;
  

  constructor(args_path: string){
    super();
    this.path = args_path;
  }

  public async canHandle(input: HttpHandlerInput): Promise<void> {
    const {url} = input.request;
    if(url &&  url.includes(this.path)){
      this.logger.info(url);
    }else{
      throw new Error("Invalid path");
      
    }
  }

  public async handle(input: HttpHandlerInput): Promise<void> {
    throw new Error('Method not implemented.');
  }
  
}