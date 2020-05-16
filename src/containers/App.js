import React, { Component } from 'react';
import { connect } from 'react-redux'

import { setSearchField, requestCity,requestChart } from '../actions'


import Search from '../components/Search/Search';
import Charts from '../components/Charts/Charts';
import CardList from '../components/CardList/CardList';

import './App.css';


const mapStateToProps = (state) => {
  return {
    searchField: state.searchCity.searchField,
    countries: state.requestCity.countries,
    date:state.requestCity.date,
    global:state.requestCity.global,
    isPending: state.requestCity.isPending,
    isPendingC:state.requestChart.isPendingC,
    country: state.requestChart.country
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(
        setSearchField(event.target.value))
    },
    onRequestCity: () => dispatch(requestCity())
    ,
    onRequestChart: (name)=> dispatch(requestChart(name))
  }
}


class App extends Component {

  componentDidMount(){
    this.props.onRequestCity()
    
    
  }

  render() {
    const { onSearchChange,onRequestChart, isPendingC,country,searchField, countries,global,date, isPending } = this.props;
    const countryFiltered=countries.filter(country=>{
      return country.Country.toLowerCase().includes(searchField.toLowerCase());
    })
    
    return (
      <div className="App">


        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />

        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;900&display=swap" rel="stylesheet" />

        <Search onSearchChange={onSearchChange}  ></Search>
        {isPending ? <h2>Fetching Data...</h2> :
          <CardList  countriesF={countryFiltered} global={global} date={date} />
        }
        
        {(searchField.toLowerCase().includes('united states of america')) ? 
            <h1 className='font-weight-bold'>USA's data is too big it breaks the chart library!</h1>:
        <button  className='btn text-capitalize btn-width btn-primary btn-lg' onClick={()=>onRequestChart(searchField)}
            >show charts of {searchField}</button>
        }
         
        <h1 className='text-center text-capitalize '>enter full name of country to see chart</h1>
        <Charts country={country}></Charts>
        
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
