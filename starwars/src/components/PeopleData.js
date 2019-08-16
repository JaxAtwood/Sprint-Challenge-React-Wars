import React, { useState, useEffect } from "react";
import axios from "axios";
import NameCard from "./NameCard";

export default function PeopleData() {
    const [swapiData, setSwapiData] = useState([]);

    useEffect(() => {
        axios
        .get("https://swapi.co/api/people/")
        .then(res => {
            console.log(res.data);
            setSwapiData(res.data.results);
        })
    }, []);

    return (
        <div className="infoIntro">
           {swapiData.map(people => {
            return (
            <NameCard 
            key={people.id}
            id={people.id}
            name={people.name}
            gender={people.gender}
            />
            );
           })}
        </div>
    )
  
};