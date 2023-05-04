export const requiredField = (value: any) => {
    if (value) return undefined
    return "Field is required"
}
export const maxLengthCreator = (maxLength:number)=> (value: any) => {
    if (value.length > maxLength) return `Max length more then ${maxLength} symbols`
    return undefined
}
export const minLengthCreator = (minLength:number)=> (value: any) => {
    if (value.length < minLength) return `Min length is ${minLength} or more!`
    return undefined
}