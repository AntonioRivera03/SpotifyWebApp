import React, { useEffect, useState } from 'react'


function FetchAPI(){
    const [data, setData] = useState([]);
    const apiGet = () => {
        fetch("/song")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json)});
        
    }

    const skipSong = () => {
        fetch("/skip")
        .then((response) => JSON.stringify(response))
        .then((json) => console.log(json))
        .then(apiGet)
    }

    const prevSong = () => {
        fetch("/previous")
        .then((response) => JSON.stringify(response))
        .then((json) => console.log(json))
        .then(apiGet)
    }


    useEffect(() => {
        apiGet();
    }, [])
  return(
    <div className="musicContainer">
      
      <button onClick={apiGet}>Fetch API</button>
      <br />
      <div className='musicApp' >
        
        <img className='albumImage' src={data.album_art} width={400}></img>
        <div className='songInfo'>
            <div className='Song'>{data.Song}</div>
            <div className='Artist'>{data.Artist}</div>
        </div>
        <div id='backgroundThing'>
          <img role='button' id='prev' onClick={prevSong} src={require('./skipbuttton-removebg-preview.png')} width={80}></img>
          <img role='button' id='skip' onClick={skipSong}src={require('./skipbuttton-removebg-preview.png')} width={80}></img>
        </div>

        <div id='timeBack'>
           <div id='duration'>2:19 / 3:56</div>
        </div>
         
        
      </div>
    </div>
  )
}

export default FetchAPI