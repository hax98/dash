import { useState } from 'react';

export default function Fruizione() {
  const [selectedSicurezzaMessaggio, setSelectedSicurezzaMessaggio] = useState('');
  const [selectedSicurezzaCanale, setSelectedSicurezzaCanale] = useState('');
  
  const handleSicurezzaMessaggioChange = (event) => {
    setSelectedSicurezzaMessaggio(event.target.value);
  }

  const handleSicurezzaCanaleChange = (event) => {
    setSelectedSicurezzaCanale(event.target.value);
  }
  
  const isRestSelected = selectedSicurezzaMessaggio === '1' || selectedSicurezzaMessaggio === '2';
  const isSoapSelected = selectedSicurezzaMessaggio === '3' || selectedSicurezzaMessaggio === '4';
  const noselected = selectedSicurezzaMessaggio === '';
  const isIntegrityRestSelected = selectedSicurezzaMessaggio === '1';
  const isIntegritySoapSelected = selectedSicurezzaMessaggio === '2';

  return (
    <>
      <div className="relative pl-10 m-2 mt-5">
        <h1 className='bg-blue-400 rounded font-bold text-lg text-center'>FRUIZIONE</h1>
      </div>
      <div className="pl-10 pr-10 mt-5 ">
        <label htmlFor="small" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sicurezza Canale:</label>
        <select id="small" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="1">ID_AUTH_CHANNEL_01</option>
          <option value="2">ID_AUTH_CHANNEL_02</option>
        </select>
        <label htmlFor="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sicrezza Messaggio:</label>
        <select id="default" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleSicurezzaMessaggioChange}>
          <option value="" disabled={isIntegrityRestSelected || isIntegritySoapSelected}>Seleziona Pattern</option>
          <option value="1" disabled={isIntegritySoapSelected}>ID_AUTH_REST_01</option>
          <option value="2" disabled={isIntegritySoapSelected}>ID_AUTH_REST_02</option>
          <option value="3" disabled={isIntegrityRestSelected}>ID_AUTH_SOAP_01</option> 
          <option value="4" disabled={isIntegrityRestSelected} >ID_AUTH_SOAP_02</option>
        </select>
        <label htmlFor="large" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Integrità:</label>
        <select id="large" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleSicurezzaCanaleChange}>
          <option value="" >Seleziona Pattern</option>
          <option value="1" disabled={noselected || isSoapSelected }>INTEGRITY_REST_01</option>
            <option value="2" disabled={noselected || isRestSelected}>INTEGRITY_SOAP_01</option>
        </select>
        <div className="flex items-center mt-4 justify-center">
                    <button className="bg-blue-400 rounded p-2 hover:bg-blue-500">SALVA</button>
                </div>
        </div>
    </>
    );
}
