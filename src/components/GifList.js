import React from 'react'

function GifList (props) {

    let gifUrls = props.gifData.map(gif => gif.images.original.url)

    return (
        <ul>
            {gifUrls.map(url => 
            <li>
                <img src={url} alt="gif" className="img-thumbnail" width="400px"></img>
                <p></p>
            </li>
            )}
        </ul>
    )
}

export default GifList