const heading = document.querySelector('h1');
const button = document.querySelector('button');

button.addEventListener('click', () => {

    const color = randomColor();
    document.body.style.backgroundColor = color;
    heading.innerText = color;
});

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
}