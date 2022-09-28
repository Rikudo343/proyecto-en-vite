import Card from "./cards";
import "../assets/styles/cards.css"
function Fullcards (){

    const games =[
        {
        name:"halo",
        descripcion:"Halo es una franquicia de videojuegos de ciencia ficción creada y desarrollada por Bungie Studios hasta Halo Infinite, y gestionada ahora por 343 Industries, propiedad de Xbox Game Studios. La serie se centra en una guerra interestelar entre la humanidad y una alianza teocrática de alienígenas conocidos como Covenant." ,
        foto:"/public/halo.png"
        },
        {
        name:"Doom",
        descripcion:"Doom (estilizado en documentos oficiales como DOOM) es un videojuego de disparos en primera persona creado por la compañía estadounidense ID Software en 1993 bajo la dirección de John Carmack y diseñado por John Romero, originalmente para el sistema operativo DOS y programado sobre una plataforma de computadoras NeXTSTEP. 1 ​" ,
        foto:"/public/doom.png"
        },
        {
        name:"touhou",
        descripcion:"Touhou Project toma lugar en Gensokyo , una tierra aislada del mundo exterior y habitada principalmente por humanos y yōkai, criaturas legendarias del folclore japonés personificadas como bishōjo al estilo del antropomorfismo moe. Reimu Hakurei, la miko del Santuario Hakurei y la protagonista de la serie, tiene la tarea de resolver los «incidentes» sobrenaturales causados dentro y alrededor de Gensokyo." ,
        foto:"/public/touhou.png"
        },
    ];
    return(
        <div className="divCard">
          {games.map((games)=>{
            return <Card name={games.name} descripcion={games.descripcion} img={games.foto}/>
          })}
        </div>
    );
}

export default Fullcards;