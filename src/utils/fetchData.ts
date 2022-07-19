const fetchData = async (path:string) => {
    const response = await fetch(path).then(response => response.json()).
    catch(err => console.log(err));
    return response;
}

export default fetchData;