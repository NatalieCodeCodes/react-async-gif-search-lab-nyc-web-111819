import React from 'react'
import GifList from "../components/GifList";
import GifSearch from '../components/GifSearch'

const apiKey = "qAZrVix5szpQsQS4TQd5lMZGnmDuvETj"

class GifListContainer extends React.Component {
    
    state = {
        gifData: []
    }
    
    submitHandler = (newQuery) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${newQuery}&api_key=${apiKey}&rating=g&limit=3`)
        .then(response => response.json())
        .then(gifResults => this.setState({
            gifData: gifResults.data
        }))
    }

    
    render () {
        return (
            <div>
                <GifSearch submitHandler={this.submitHandler}/>
                <GifList gifData={this.state.gifData}/>
            </div>
        )
    }
}

export default GifListContainer