import React, { Component } from 'react'
import ShowWeather from './ShowWeather'
import SearchWeather from './SearchWeather'


export default class MainContainer extends Component {
  constructor() {
    super()

    this.state = {
      weather: {},
      searchCityInput: '',
      searchStateInput: '',
      showError: null
    }
  }

  componentDidMount(){
    fetch('http://api.wunderground.com/api/b5b642f523e3c4b4/conditions/q/NY/New_York.json')
      .then(res => res.json())
      .then(json => {
        return this.setState({
          weather: json.current_observation
        })
    })
  }

  handleStateInputChange = (event) => {
    console.log("handleStateInputChange")
    this.setState({
      searchStateInput: event.target.value
    })
  }

  handleCityInputChange = (event) => {
    this.setState({
      searchCityInput: event.target.value
    })
  }

  handleSearchByCity = (event) => {
    event.preventDefault()
    this.setState({
      showError: null
    })

    fetch(`http://api.wunderground.com/api/b5b642f523e3c4b4/conditions/q/${this.state.searchStateInput}/${this.state.searchCityInput}.json`)
      .then(res => res.json())
      .then(json => {
        if(json.current_observation){
          this.setState({
            weather: json.current_observation,
          })
        } else {
          this.setState({
            showError: "Incorrect City or State! Try Again...",
            searchCityInput: '',
            searchStateInput: ''
          })
        }
      })
  }

  render(){
    return(
      <div className="container">
        <ShowWeather weather={this.state.weather}/>
        {
          this.state.showError ?
            <div className="alert alert-danger text-center" role="alert">
              {this.state.showError}
            </div> :
            ''
        }
         <SearchWeather
          handleSearchByCity={this.handleSearchByCity}
          handleStateInputChange={this.handleStateInputChange}
          handleCityInputChange={this.handleCityInputChange}
        />
      </div>
    )
  }
}
