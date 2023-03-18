import React, { useEffect, useState } from 'react';

const RandomApi = () => {
    const [gifs, setGifs] = useState([]);

    const url =
        'https://api.giphy.com/v1/gifs/search?api_key=9xTh2dBeU1BLCfDHsDy5x2RA57DJD0v0&limit=5&q=cats';

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setGifs(data.data));
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: "20px" }}>
        <h1>*GIFs*</h1>
        {gifs.map((unGif) => (
            <img key={unGif.id} src={unGif.images.original.url} alt={unGif.title} />
        ))}
        </div>
    );
};

export default RandomApi; 