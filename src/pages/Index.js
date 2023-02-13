import {useLoaderData} from 'react-router-dom'



export default function Index(props){
    const songs = useLoaderData()
    console.log(songs)

    return (<>
    
    <div>
        {songs.map((song) => {
            <div>
                {song.name} by {song.artist}
            </div>
        })}
    </div>
    
    </>)
}