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

    public getPistas():any{
        return this.pistasAudio;
    }

    public getPistaByID(id:number):any{
        let pista= this.pistasAudio.find(p => p.id === id);
        return pista;
    }

}
