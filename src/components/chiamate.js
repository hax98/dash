
var options = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Authorization': 'Bearer 664a0938-f56a-36a3-9126-7998c29418b6',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': '',
    }
}


export const fetchData = async () => {
    const res = await fetch('https://127.0.0.1:9443/api/am/publisher/v3/apis', options)
    const result = await res.json();
    return result.list;
}

export const fetchDataById = async (id) => {
    const res = await fetch(`https://127.0.0.1:9443/api/am/publisher/v3/apis/${id}`, options)
    const result = await res.json();
    return result;
} 
