export const casesCountry=(country)=>{
    
    const caseData=country.map(data=>{
        return data.Confirmed
    })
    return caseData
}

export const labelsCountry=(country)=>{

    const labalData=country.map(data=>{
        return data.Date.substring(0,10)
    })
    return labalData
}


export const recoversCountry=(country)=>{

    const recoData=country.map(data=>{
        return data.Recovered
    })
    return recoData
}

export const deathsCountry=(country)=>{

    const deathData=country.map(data=>{
        return data.Deaths
    })
    return deathData
}
