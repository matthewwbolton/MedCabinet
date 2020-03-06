import React, { useState, useEffect } from 'react';
import StrainsCard from './StrainsCard';
import StrainsHeader from './StrainsHeader';
import axios from 'axios';

const Strains = (props) => {
    
  
    const [strain, setStrain] = useState([]);
    
    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
             .then(res => {
               console.log(res.data);
               setStrain(res.data.results)
             })
             .catch(err => {
               console.log(err)
             })
      }, [])
    
    return (
        <div>
            <StrainsHeader />
            <StrainsCard strain={strain} setStrain={setStrain}/>
            

            {/* <Route path='/strains/:id/details'>
              <StrainDetails strain={strain} setStrain={setStrain}/>
            </Route> */}
        </div>
    );
};

export default Strains;