export function getHouses() {
    return fetch('http://localhost:3000/house')
        .then(data => data.json())
}
