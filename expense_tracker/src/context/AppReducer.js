export default (state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{ ...state,
                transactions: state.transactions.filter(transaction=>transaction.id !== action.payload)
            }
                 //("transanctions" value change cheyannm initialStateille, aa transactions aanu this
                //  watch video min 37)

        case 'ADD_TRANSACTION':  
        return {
            ...state,
            transactions: [action.payload,...state.transactions]
        }      
        default:
            return state
    }

}