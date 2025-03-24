const fetchData = async () => {
    const res = await axios.get("https://swapi.dev/api/people/1");
    console.log(res.data);
}
fetchData();

const getDadJoke = async () => {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/ ", config);
    console.log(res.data.joke);
}
getDadJoke();