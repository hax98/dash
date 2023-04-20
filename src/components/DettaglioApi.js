import React, { useEffect } from 'react';
import { fetchDataById } from './chiamate';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Box from "components/Box.js";
import Footer from './Footer';
import Header from './Header';
import Erogazione from './Erogazione';
import Fruizione from './Fruizione';
import PatternBox from './PatternBox';
import DettaglioApiData from './DettaglioApiData';

export default function DettaglioApi(){
    const {id} = useParams();
    const [api, setApi] = useState(null);

    useEffect(() => {
        if (id) {
            fetchDataById(id).then(setApi);
        }
        else {
            setApi(null);
        }
    }, [id]);
    
    if (!api) {
        return <div>Caricamento..</div>
    }

    return (
        <>
            <div className="relative md:ml-64 bg-blueGray-100 ">
                <Header name="DETTAGLIO API " />
                <div className="relative bg-blue-600 md:pt-16 pb-16 pt-12">
                    <div className="px-4 md:px-10 mx-auto w-full">
                        <div className=''>
                            <div className='flex flex-wrap '>
                                <Box name={api.name} version={api.version} context={api.context} />
                                <PatternBox modo={api.additionalPropertiesMap.channel && "Erogazione" ? "Attualmente in Erogazione nel seguente modo:" : "Nessun modo associato" }
                                canale={api.additionalPropertiesMap.channel && api.additionalPropertiesMap.channel.value ? api.additionalPropertiesMap.channel.value : "non specificato"} 
                                messaggio={api.additionalPropertiesMap.message && api.additionalPropertiesMap.message.value ? api.additionalPropertiesMap.message.value: "non specificato"} 
                                integrity={api.additionalPropertiesMap.integrity && api.additionalPropertiesMap.integrity.value ? api.additionalPropertiesMap.integrity.value: "non specificato"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 float-left'>
                    <DettaglioApiData api={api}/>
                </div>
                <div className='w-1/2 float-right mb-5'>
                    <Erogazione />
                    <Fruizione />
                </div>
            </div>
        </>
    );
}