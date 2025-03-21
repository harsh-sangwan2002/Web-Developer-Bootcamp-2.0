class Color {

    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    rgb() {
        const { r, g, b } = this;
        return `rgb(${r},${g},${b})`;
    }

    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

const firstColor = new Color(35, 255, 150);
const secondColor = new Color(0, 0, 0);
console.log(firstColor.hex());
console.log(secondColor.rgb());

console.log(firstColor.hex === secondColor.hex);