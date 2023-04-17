import { HttpHandler, HttpHandlerInput } from '@solid/community-server';
import { getLoggerFor } from '@solid/community-server';


export class MacaroonMintHttpHandler extends HttpHandler {
  protected readonly logger = getLoggerFor(this);

  private path:string;

  constructor(args_path: string){
    super();
    this.path = args_path;
  }


  public async canHandle(input: HttpHandlerInput): Promise<void> {
    
    const {url } = input.request;

    // Check if endpoint for minting a macaroon is correct
    if(url && url!.includes(this.path)){
      // TODO: Should extract WebID of target 

      // TODO: Should check if body of request contains necessary information !

      // TODO: Should check if requestor is in follower-list of target !
    }else{
      throw new Error("Can't handle request for minting a new macaroon !");
      
    }
    
  }

  public async handle(input: HttpHandlerInput): Promise<void> {
    const {request, response } = input;
    response.statusMessage = "Succesfully minted macaroon for ... !";    
    //throw new Error('Method not implemented.');
  }
  
}