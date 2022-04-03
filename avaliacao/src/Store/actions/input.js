export function alterarInput(newValue){
    return{
        type: 'NEW_VALUE',
        payload: newValue
    }
}