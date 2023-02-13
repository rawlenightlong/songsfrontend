import {useLoaderData} from 'react-router-dom'



export default function Index(props){
    const songs = useLoaderData()
    console.log(songs)
    return (
    
    <div>
        {songs.map((song) => {
            return <div>
                {song.title} by {song.artist} added by {song.username}
            </div>
        })}
    </div>
    
    )
}