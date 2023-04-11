import { HttpHandler, HttpHandlerInput } from '@solid/community-server';
import { getLoggerFor } from '@solid/community-server';


export class MacaroonMintHttpHandler extends HttpHandler {
  protected readonly logger = getLoggerFor(this);

  private path:String;

  constructor(args_path: String){
    super();
    this.path = args_path;
  }


  public async canHandle(input: HttpHandlerInput): Promise<void> {
    
    if(input.request.url! != this.path){
      this.logger.info(input.request.url!);
      throw new Error("Invalid path");
    }
    
  }

  public async handle(input: HttpHandlerInput): Promise<void> {
    throw new Error('Method not implemented.');
  }
  
}