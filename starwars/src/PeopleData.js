import React, { useState, useEffect } from "react";
import axios from "axios";
import Name from "./components/Name";

export default function PeopleData() {
    const [swapiData, setSwapiData] = useState([]);

    useEffect(() => {
        axios
        .get("https://swapi.co/api/people/")
        .then(res => {
            console.log(res.data);
            setSwapiData(res.data);
        })
    }, []);

    return (
        <div className="container">
           {people.map(people => {
            return (
            <Name 
            key={people.id}
            id={people.id}
            name={people.name}
            />
            );
           })}
        </div>
    )
  
};