import { createContext, useEffect, useState } from "react";

export const LocationContext = createContext();

export default function LocationContextProvider({ children }) {


    const [latitude,setlatitude]=useState();
    const [longitude,setlongitude]=useState();
    async function getlatlong(location){
        let url=`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=5b5a561784e582387a9cb79397e67379`;
        let data=await fetch(url);
        let output=await data.json();
        setlatitude(output?.[0]?.lat);
        setlongitude(output?.[0]?.lon);
    }

    const values = {
        getlatlong,
        latitude,
        longitude
    };

    return <LocationContext.Provider value={values}>{children}</LocationContext.Provider>
}