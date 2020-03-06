import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Image from '../img/details_img.jpg';
import axios from 'axios';

const IndividualStrainPage = () => {

    const [newStrain, setNewStrain] = useState({});
    const params = useParams();
    // console.log(params);
    console.log(params.id);

  
 

    useEffect(() => {

         axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${params.id}`)
              .then(res => {
                //  console.log(res.data);
                 setNewStrain(res.data);
                 console.log(newStrain);
                 
             })
             .catch(err => {
                 console.log(err)
             })

         console.log(params);

    }, [params.id])

   
    return (
        <div>
            <img src={Image} alt={newStrain.name} />
            <h1>Name: {newStrain.name}</h1>
            <h2>Status: {newStrain.status}</h2>
            <h3>Species: {newStrain.species}</h3>
            <h4>Type: {newStrain.type}</h4>
            <h5>Gender: {newStrain.gender}</h5>
        </div>
    );
};

export default IndividualStrainPage;