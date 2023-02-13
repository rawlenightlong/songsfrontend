import {Form} from 'react-router-dom'

export default function Create(props){
    return (
    <Form method='post'>
    <input type='text' name='artist' placeholder='Artist Name'/>
    <input type='text' name='title' placeholder='Song Title'/>
    <button>Create</button>

    </Form>)
}