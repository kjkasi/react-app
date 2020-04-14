import React from 'react';

const SearchPanel = () => {
  const searchText = 'search';
  const searchStyle = {
    fontSize: '25px'
  }
  return <input placeholder={ searchText }
                className="foo"
                htmlFor=""
                style={searchStyle} />
}

export default SearchPanel