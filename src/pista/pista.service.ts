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

    //Put para modificar pista por ID
    public modificarPista(id:number,body:any):any{
        let existe = false;
        let pos = 0;
        for(let i=0; i<this.pistasAudio.length;i++){
            if(id===this.pistasAudio[i].id){
                existe=true;
                pos=i;
            }
        }
        if(existe){
            this.pistasAudio[pos].titulo = body.titulo;
            this.pistasAudio[pos].duracion = body.duracion;
            this.pistasAudio[pos].interprete = body.interprete;

            return {"msj" : "Pista modificada",
                "pista" : this.pistasAudio[pos]
            }
        }else{
            return {"msj" : `Pista ${id} no encontrada`}
        }
    }


    public eliminarPista(id:number):any{
        let existe = false;
        let pos = 0;
        for(let i=0; i<this.pistasAudio.length;i++){
            if(id===this.pistasAudio[i].id){
                existe=true;
                pos=i;
            }
        }
        if(existe){
            this.pistasAudio.splice(pos,1)
            return {"msj" : `Pista ${id} eliminada`}
        } else{
            return {"msj" : `Pista ${id} no encontrada`}
        }
    
        }
    }
