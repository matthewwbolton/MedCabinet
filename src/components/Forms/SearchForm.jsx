import React, { useState } from 'react';

const SearchForm = (props) => {

    const [query, setQuery] = useState();

    const handleChange = e => {
        setQuery(e.target.value)
        console.log(query);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.setDataStrain(props.dataStrain.filter(elem =>  elem.Type.toLowerCase().includes(query.toLowerCase()) ))

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search'>Search: hybrid/indica/sativa
                    <input onChange={handleChange} type='text' id='search' name='search' placeholder='Search' />
                </label>
                <button type='submit'>Search Type:</button>
                
            </form>
            
        </div>
    );
};

export default SearchForm;