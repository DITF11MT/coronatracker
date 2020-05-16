import {
    CHANGE_SEARCH_FIELD,
    REQUEST_COUNTRIES_FAILED,
    REQUEST_COUNTRIES_PENDING,
    REQUEST_COUNTRIES_SUCCESS,
    REQUEST_CHARTS_FAILED,
    REQUEST_CHARTS_PENDING,
    REQUEST_CHARTS_SUCCESS
}
    from './constants'


     const initalStateSearch={
         searchField:''
     }

     export const searchCity=(state=initalStateSearch,action={})=>{
         switch(action.type){
             case CHANGE_SEARCH_FIELD:
                 return {...state,searchField:action.payload}
             default:
                 return state    
         }
     }

     const initalStateCity={
         countries:[],
         global:{},
         data:'',
         isPending:true
     }

     export const requestCity=(state=initalStateCity,
        action={})=>{
            switch (action.type){
                case REQUEST_COUNTRIES_PENDING:
                    return {...state,isPending:true}
                case REQUEST_COUNTRIES_SUCCESS:
                    console.log(action.payload,'we are at reducers')
                    return {...state,countries:action.payload.Countries,global:action.payload.Global,date:action.payload.Date,isPending:false}
                case REQUEST_COUNTRIES_FAILED:
                    return {...state,error:action.payload}
                default:
                    return state    
            }
            
        }



        const initalStateChart={
            country:[],
            isPendingC:true
        }

        export const requestChart=(state=initalStateChart,
            action={})=>{
                switch(action.type){
                    case REQUEST_CHARTS_PENDING:
                        return {...state,isPendingC:true}
                    case REQUEST_CHARTS_SUCCESS:
                        return {...state,country:action.payload,isPendingC:false}
                    case REQUEST_CHARTS_FAILED:
                        return {...state,error:action.payload}
                    default:
                        return state        
                }
            }