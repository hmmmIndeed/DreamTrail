import {useState} from 'react'
import { KHR_DF_SAMPLE_DATATYPE_SIGNED } from 'three/examples/jsm/libs/ktx-parse.module.js'
const TrailForm = () => {
    const [date, setDate] = useState('')
    const [duration, setDuration] = useState('')
    const [quality, setQuality] = useState('')

    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const trail = {title,duration,time}

        const response = await fetch('/api/trails',{
            method: 'POST',
            body: JSON.stringify(trail),
            headers: {
                'Content-Type': 'aplication.json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setDate('')
            setDuration('')
            setQuality('')
            setError(null)
            console.log('new workout added', json)
        }
    }


    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3> Add a new Trail</h3>

            <label>Sleep Date</label>
            <input
                type="text"
                onChange={(e) => setDate(e.target.value)}
                value={date}
            />
            <label>Duration</label>
            <input
                type="number"
                onChange={(e) => setDuration(e.target.value)}
                value={duration}
            />
            <label>Sleep Quality</label>
            <input
                type="number"
                onChange={(e) => setQuality(e.target.value)}
                value={quality}
            />
            <button>Add Trail</button>
        </form>
    )
}

export default TrailForm