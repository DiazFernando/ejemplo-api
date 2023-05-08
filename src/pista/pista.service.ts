import { Injectable } from '@nestjs/common';

@Injectable()
export class PistaService {
     pistasAudio=[
        {
            "id":1,
            "titulo": "titulo1",
            "duracion": 123,
            "interprete": "interprete1" 
        },
        {
            "id":2,
            "titulo": "titulo2",
            "duracion": 55,
            "interprete": "interprete2" 
        },
        {
            "id":3,
            "titulo": "titulo3",
            "duracion": 12,
            "interprete": "interprete3" 
        },
        {
            "id":4,
            "titulo": "titulo4",
            "duracion": 140,
            "interprete": "interprete1" 
        }
    ];

    // get para mostrar todas las pistas
    public getPistas():any{
        return this.pistasAudio;
    }

    // get para buscar por ID
    public getPistaByID(id:number):any{
        let pista= this.pistasAudio.find(p => p.id === id);
        return pista;
    }

    //post para crear una pista
    public crearPista(body:any):any{
        let pista = {
            "id":body.id,
            "titulo": body.titulo,
            "duracion": body.duracion,
            "interprete": body.interprete
        }
        this.pistasAudio.push(pista);
        return {"msj" : "Se creo una nueva pista",
                "pista" : pista
        }
    }

}
