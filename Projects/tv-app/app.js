const form = document.querySelector('#searchForm');
const container = document.querySelector('.images-container');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);

    res.data.forEach(result => {
        const url = result.show.image.original;
        console.log(url);
        const imgTag = document.createElement('img');
        imgTag.src = url;
        container.appendChild(imgTag);
    })
});