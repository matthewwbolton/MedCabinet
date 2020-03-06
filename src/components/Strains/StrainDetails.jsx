import React, { useState } from 'react';
import Data from '../../Data/csvjson.json';
import styled from 'styled-components';
import SearchForm from '../Forms/SearchForm';

const NewDiv = styled.div`
    width: 30%;
    border: 1px solid black;
    margin: 1%;
`;

const WrapperDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


const StrainDetails = () => {

    // const lowerCaseData = Data.map(elem => {
    //     elem['strain'] = elem['Strain'];
    //     delete elem['Strain'];
    //     return elem;
    // });

    // console.log(lowerCaseData[0]);
    
    
    
    const [dataStrain, setDataStrain] = useState(Data);
    
    
    
    return (

        <div>
        <SearchForm dataStrain={dataStrain} setDataStrain={setDataStrain} />
        <WrapperDiv>
        {dataStrain.map((elem, i) => (
            <NewDiv key={i}>
                <h1>Strain: {elem.Strain}</h1>
                <h2>Type: {elem.Type}</h2>
                <h3>Rating: {elem.Rating}</h3>
                <h4>Effects: {elem.Effects}</h4>
                <h5>Flavors: {elem.Flavor}</h5>
                <h6>Description: {elem.Description}</h6>
                </NewDiv>
        ))}  
        </WrapperDiv>

        </div>
    );
};

export default StrainDetails;