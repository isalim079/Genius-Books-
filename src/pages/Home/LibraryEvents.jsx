import axios from "axios";
import { useEffect, useState } from "react";
import LibrarySwipper from "./LibrarySwipper";

const LibraryEvents = () => {

    const[libraryEventAndFeatures, setLibraryEventAndFeatures] = useState([])

    useEffect(() => {
        axios
            .get("https://assignment-11-server-iota-two.vercel.app/libraryEventsAndFeatures")
            .then((res) => {
                setLibraryEventAndFeatures(res.data);
            })
            .catch((error) => {
                console.log("fetching libraryEventsAndFeatures error", error);
            });
    }, []);

    // console.log(libraryEventAndFeatures);

    return (
        <div className="bg-lightCoffeeShade h-fit">
            <h1 className="text-center md:text-4xl font-bold pb-4 pt-10 md:pb-10 md:pt-28 underline uppercase text-darkBrownShade">Events And Service</h1>
            <LibrarySwipper libraryEventAndFeature={libraryEventAndFeatures}></LibrarySwipper>
        </div>
    );
};

export default LibraryEvents;