import React from 'react'

class GifSearch extends React.Component {

    state = {
        query: ""
    }

    setQueryState = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let newQuery = this.state.query
        this.props.submitHandler(newQuery)
    }
  

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.setQueryState} value={this.state.query} type="text" placeholder="Search Gifs"></input>
                    <input type="submit" value="Find Gifs!"></input>
                    <p></p>
                </form>
            </div>
        )
        }
    }

export default GifSearch