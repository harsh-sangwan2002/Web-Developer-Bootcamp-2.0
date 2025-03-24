const req = new XMLHttpRequest();

req.onload = function () {
    console.log("Hit loaded!");
    const data = JSON.parse(this.responseText);
    console.log(data);
}

req.onerror = function () {
    console.log("Request failed");
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1", true);
req.send();