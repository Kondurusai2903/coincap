import React from 'react';

const ImageApi = () => {
    const [image, setImage] = useState(null);
    const fetchImg = async (url) => {
        const response = await fetch(url);
        const img = await response.json()
        console.log(img);
    }
    useEffect(() => {
        const url =
    })
    return <>
        <button onClick={() => fetchImg('https://api.unsplash.com/photos/random?client_id=YOUR_CLIENT_ID')}>Fetch Image</button>
    </>
}