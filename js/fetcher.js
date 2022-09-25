export const myFetcher = async(url) => {
    const fetchs = await fetch(url)
        .then(res => res.json())
        .then(data => {
            return data;
        });

    const shapedData = [];

    for (let i = 0; i < fetchs.datas.length; i++) {
        var d = fetchs.datas[i];
        d.release = dayjs(d.release);
        shapedData.push(d);
    }

    return shapedData;
}