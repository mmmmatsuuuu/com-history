const FETCH_URL = "https://script.google.com/macros/s/AKfycbzMUNBn6QDB4K_TVzePcXDMuEtO6mS1QaORQVhNxjygK_80y2IRvWDSYlvK0mBUqg0/exec";

export const dataFetcher = async(num) => {
    const fetchs = await fetch(FETCH_URL + `?type=data&datanumber=${num}`)
        .then(res => res.json())
        .then(data => {
            return data;
        });

    // const shapedData = [];

    fetchs.data.release = dayjs(fetchs.data.release)

    // for (let i = 0; i < fetchs.datas.length; i++) {
    //     var d = fetchs.datas[i];
    //     d.release = dayjs(d.release);
    //     shapedData.push(d);
    // }

    return fetchs.data;
}

export const lengthFetcher = async() => {
    const fetchs = await fetch(FETCH_URL + `?type=length`)
        .then(res => res.json())
        .then(data => {
            return data;
        });
    return parseInt(fetchs.length);
}