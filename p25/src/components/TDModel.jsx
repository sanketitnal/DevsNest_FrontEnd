import { useParams } from "react-router-dom";

export default function TDModel() {
    const models = {
        "Dassault Rafale": {role: "Multirole", model: (<div className="sketchfab-embed-wrapper h-full w-full"> <iframe className="h-full w-full" title="Dassault Rafale Marine" frameBorder="0" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking="true" execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true" src="https://sketchfab.com/models/a298fa3fa7a44a5ba3ee8007d43f104c/embed"> </iframe></div>)},
        "Sukhoi Su-30": {role: "Multirole", model: (<div className="sketchfab-embed-wrapper h-full w-full"> <iframe className="h-full w-full" title="SU-30 aircraft" frameBorder="0" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking="true" execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true" src="https://sketchfab.com/models/816a24f6f58946a6aa0d55cb6bb27d73/embed"> </iframe></div>)},
        "HAL Tejas": {role: "Multirole", model: (<div className="sketchfab-embed-wrapper h-full w-full"> <iframe className="h-full w-full" title="IAF HAL TEJAS" frameBorder="0" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking="true" execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true" src="https://sketchfab.com/models/81d290d2b3e14b03926cbcb285cd3f02/embed"> </iframe></div>)},
        "MiG-29": {role: "Multirole", model: (<div className="sketchfab-embed-wrapper h-full w-full"> <iframe className="h-full w-full" title="MiG 29" frameBorder="0" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking="true" execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true" src="https://sketchfab.com/models/c6a7b73c4493452db4b6fda828e4f89a/embed"> </iframe></div>)},
        "Mirage 2000": {role: "Multirole", model: (<div className="sketchfab-embed-wrapper h-full w-full"> <iframe className="h-full w-full" title="Dassault Mirage" frameBorder="0" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking="true" execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true" src="https://sketchfab.com/models/eb130fcd003b4094aef0b7ea127d41c2/embed"> </iframe> </div>)},
        "SEPECAT Jaguar": {role: "Ground Attack", model: (<div className="sketchfab-embed-wrapper h-full w-full"> <iframe className="h-full w-full" title="SEPECAT Jaguar" frameBorder="0" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking="true" execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true" src="https://sketchfab.com/models/c0ac78b8a5de491a96606ec077418c98/embed"> </iframe> </div>)},
        "MiG-21": {role: "Interceptor", model: (<div className="sketchfab-embed-wrapper h-full w-full"> <iframe className="h-full w-full" title="MIG-21" frameBorder="0" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking="true" execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true" src="https://sketchfab.com/models/18927e007c3b47ed9e676f88b4adb578/embed"> </iframe> </div>)}
    };
    const { aircraftName } = useParams();

    return (
        <div className="w-full relative" style={{height: "80vh"}}>
            <div className="absolute top-0 left-0 flex flex-col p-5 mt-10">
                <div className="text-white text-3xl"> {aircraftName} </div>
                <div className="text-white text-2xl"> Role: {models[aircraftName]["role"]} </div>
            </div>
            {models[aircraftName]["model"]}
        </div>
    )
}