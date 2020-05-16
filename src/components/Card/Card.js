import React from 'react'

import './Card.css'

export default function Card({ name, cases,newcases, deaths,newdeaths, recovers,newrecovers,rownum }) {

    return (        
            <tbody>
            <th scope="row">{rownum+1}</th>              
              <td ><p className="text-center  text-capitalize ">{name}</p></td>
              <td className="text-capitalize "><p >{cases}</p></td>
              <td><p className="text-capitalize ">{newcases}</p></td>
              <td><p >{deaths}</p></td>
              <td><p >{newdeaths}</p></td>
              <td><p >{recovers}</p></td>
              <td><p >{newrecovers}</p></td>             
                </tbody>     
    );
}
