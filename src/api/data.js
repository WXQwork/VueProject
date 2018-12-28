const _products = [
    {
        id:1,
        img:'//img',
        title:'a',
        price:'110',
        num:1
    }
]

export default ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(_products)
        },100)
    })
}