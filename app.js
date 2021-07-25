//fetch data from data.json

const getData = async() => {
    const fetchedData = await fetch('./data.json')
    const data = await fetchedData.json();
    console.log(data)
    return data.company;
}

getData()

console.log('hello world')