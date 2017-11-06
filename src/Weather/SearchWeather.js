import React from 'react'


function SearchWeather({
  handleSearchByCity,
  handleStateInputChange,
  handleCityInputChange
}) {



  return(
    <div className="search-weather">
      <form
        className="search-submit"
        onSubmit={handleSearchByCity}>
      <div className="search-city-div">
        <input
          type="text"
          className="search-city-input"
          placeholder="City"
          onChange={handleCityInputChange}
        />
      </div>
      <div className="search-state-div">
        <input
          type="text"
          className="search-state-input"
          placeholder="State"
          onChange={handleStateInputChange}
        />
      </div>
      <button className="search-button">Search</button>
      </form>
    </div>
  )
}

export default SearchWeather;
