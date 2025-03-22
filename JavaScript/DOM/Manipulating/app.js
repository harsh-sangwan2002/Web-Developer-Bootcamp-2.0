const allLinks = document.querySelectorAll('a');
console.log(allLinks);

for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!!'
}