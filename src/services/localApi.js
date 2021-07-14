const localApi = "http://localhost:3000/search"

export const getPeople = () =>
    fetch(`${localApi}`)
        .then(res => res.json())
        .catch(error => console.log(error))