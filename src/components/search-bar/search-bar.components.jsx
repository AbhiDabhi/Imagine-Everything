import React from 'react';
import TextField from '@material-ui/core/TextField';

import './search-bar.styles.scss';

export const SearchBar = ({ handleChange}) => (
    <div className='search-align'>
        <TextField className='search-bar' label="Search Record" type="search" onChange={ handleChange } />
    </div>
);