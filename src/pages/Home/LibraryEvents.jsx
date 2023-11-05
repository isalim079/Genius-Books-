import axios from "axios";
import { useEffect, useState } from "react";
import LibrarySwipper from "./LibrarySwipper";

const LibraryEvents = () => {

    const[libraryEventAndFeatures, setLibraryEventAndFeatures] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:2500/libraryEventsAndFeatures")
            .then((res) => {
                setLibraryEventAndFeatures(res.data);
            })
            .catch((error) => {
                console.log("fetching libraryEventsAndFeatures error", error);
            });
    }, []);

    // console.log(libraryEventAndFeatures);

    return (
        <div>
            <LibrarySwipper libraryEventAndFeature={libraryEventAndFeatures}></LibrarySwipper>
        </div>
    );
};

export default LibraryEvents;