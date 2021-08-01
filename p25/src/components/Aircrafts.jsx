import { Link, useRouteMatch } from "react-router-dom";

export default function Aircrafts() {
    const aircrafts = [
        {name: "Dassault Rafale", img: "rafale.jpg"},
        {name: "Sukhoi Su-30", img: "su30.jpg"},
        {name: "HAL Tejas", img: "haltejas.jpg"},
        {name: "MiG-29", img: "mig29.jpg"},
        {name: "Mirage 2000", img: "mirage2000.jpg"},
        {name: "SEPECAT Jaguar", img: "jaguar.jpg"},
        {name: "MiG-21", img: "mig21.jpg"}
    ];

    return (
        <div className="pb-10">
            <div className="text-white text-3xl pl-5 pt-2">Aircrafts</div>
            <div className="flex flex-row flex-wrap justify-center">
                {aircrafts.map((item, index) => <AircraftCard key={Date.now() + index} name={item.name} img = {item.img}/>)}
            </div>
        </div>
    )
}

function AircraftCard({name, img}) {
    let match = useRouteMatch();
    return (
        <Link to={`${match.url}/${name}`} className="ml-5 mt-10 relative hover:shadow-2xl" style={{width: "330px", height: "225px"}}>
            <img src={"images/"+img} alt={name} className="w-full h-full rounded-t-lg object-cover"/>
            <div className="bottom-0 left-0 flex justify-center bg-black text-white rounded-b-lg">{name} (click)</div>
        </Link>
    )
}