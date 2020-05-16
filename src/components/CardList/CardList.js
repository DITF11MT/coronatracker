import React from 'react'
import Card from '../Card/Card'

import './CardList.css'

export default function CardList({ countriesF, date }) {

    countriesF.sort(compare)
    countriesF.reverse()

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='text-center text-capitalized'>last updated: {date}</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" className='font-weight-normal'>Country</th>
                            <th scope="col" className='font-weight-normal'>TotalCases</th>
                            <th scope="col" className='font-weight-normal'>NewCases</th>
                            <th scope="col" className='font-weight-normal'>TotalDeaths</th>
                            <th scope="col" className='font-weight-normal'>NewDeaths</th>
                            <th scope="col" className='font-weight-normal'>TotalRecovered</th>
                            <th scope="col" className='font-weight-normal'>NewRecovered</th>
                        </tr>
                    </thead>
                    {
                        countriesF.map((country, i) => {
                            return (
                                <Card
                                    key={i}
                                    rownum={i}
                                    name={countriesF[i].Country}
                                    cases={countriesF[i].TotalConfirmed}
                                    newcases={countriesF[i].NewConfirmed}
                                    deaths={countriesF[i].TotalDeaths}
                                    newdeaths={countriesF[i].NewDeaths}
                                    recovers={countriesF[i].TotalRecovered}
                                    newrecovers={countriesF[i].NewRecovered}
                                ></Card>
                            )
                        }
                        )
                    }
                </table>
            </div>
        </div>
    )
    function compare(a, b) {//sorting the counries by cases confirmed
        if (Number(a.TotalConfirmed) < Number(b.TotalConfirmed)) {
            return -1;
        }
        if (Number(a.TotalConfirmed) > Number(b.TotalConfirmed)) {
            return 1;
        }
        return 0;
    }
}
