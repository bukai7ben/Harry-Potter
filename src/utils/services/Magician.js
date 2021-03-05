
export function getMagician() {
    return fetch('http://localhost:3000/magician')
        .then(data => data.json())
}
