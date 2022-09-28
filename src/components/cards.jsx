import "../assets/styles/cards.css"

function Card({name,descripcion,img}){

    return(
        <div className="backCard">
            <img src={img} alt="foto" height={170} width={260} className="picture"/>
            <div className="content">
                <div className="titulito">
                    <h2 className="tittleName">{name}</h2>
                </div>
                <div>
                    <h2 className="description">{descripcion}</h2>
                </div>
            </div>
        </div>
    );
}

export default Card;