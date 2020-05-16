import React from 'react'
import './Search.css'

export default function Search({ onSearchChange }) {

    return (
        <div className="container-fluid">
            <input type="search" onChange={onSearchChange} className="form-control search" placeholder="searh country" />
        </div>
    )
}


