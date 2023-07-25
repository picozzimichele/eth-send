import { useEffect, useState } from "react";

const API_KEY = import.meta.env.IVITE_GIPHY_API;

export const useFetch = ({ keyword }: { keyword: string }) => {
    const [gifUrl, setGifUrl] = useState("");

    const fetchGif = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`);
            const { data } = await response.json();
            setGifUrl(data[0]?.images?.downsized_medium?.url);
        } catch (error) {
            setGifUrl("https://media4.popsugar-assets.com/files/2013/11/07/832/n/1922398/eb7a69a76543358d_28.gif");
        }
    };

    useEffect(() => {
        if (keyword) fetchGif();
    }, [keyword]);

    return gifUrl;
};
