import url from "./url";

export const indexLoader = async () => {
    const response = await fetch(url + '/songs', {
        credentials: "include",
    })
    console.log(response)
    const songs = response.json()
    console.log(songs)
    return songs
}