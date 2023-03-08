import { Macaroon, MacaroonsBuilder, MacaroonsVerifier, MacaroonsConstants, MacaroonsDeSerializer, MacaroonsSerializer} from "macaroons.js";

export class MacaroonWrapper {

  public static deserializeMacaroon(serializedMacaroon:string):Macaroon {
    return MacaroonsDeSerializer.deserialize(serializedMacaroon);
  }

  public static serializeMacaroon(macaroon:Macaroon):string {
    return MacaroonsSerializer.serialize(macaroon);
  }

  public static createMacaroon(location: string, secretKey: string, identifier: string): Macaroon {
    return MacaroonsBuilder.create(location,secretKey,identifier);
  }



}