import { environment } from "../../environments/environment";

const base_url = environment.baseUrl;

export class TipoVehiculo{
  constructor(
    public nombre : string,
    public icono: string,
    public precio: number,
    public img: string,
    public status: string,
    public _id?: string

  ){}

}

