import {useState} from 'react'
// import { KHR_DF_SAMPLE_DATATYPE_SIGNED } from 'three/examples/jsm/libs/ktx-parse.module.js'
const TrailForm = () => {
    const [date, setDate] = useState('')
    const [duration, setDuration] = useState('')
    const [quality, setQuality] = useState('')

    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const trail = { date, duration, quality }

        try {
            const response = await fetch('http://localhost:4000/api/trails', {
                method: 'POST',
                body: JSON.stringify(trail),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) {
                const errorText = await response.text()
                console.log("Error details:", errorText)
                setError(json.error)
                return
            }

            const json = await response.json()
            setDate('')
            setDuration('')
            setQuality('')
            setError(null)
            console.log('New trail added', json)

            // Refresh the page by replacing the URL with itself
            window.location.replace(window.location.href)

        }

        catch (error) {
            console.error("Request failed:", error)
            setError("An error occurred while submitting the form.")
        }
    }

    // This section displays the form that takes input from the user.
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
