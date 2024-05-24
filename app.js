let arr = ["adeel" , "fahad" , "hassan"];
// forEach kuch return nhi krta

let reternValue = arr.forEach(function(v , i){
    console.log(v,i);
})
console.log(reternValue)


arr.map(function(v , i){
    console.log(v,i);
})

// map return krta hai . ak new array bana kr return krta hai,
//  map iteration bhi kr rha hai 

let result = arr.map(function(v,i){
    return `hello, ${v}`
 })
  console.log(result)

// kuch return nhi krwayegy to undefined return ajaega

let sult = arr.map(function(v,i){

})
  console.log(sult)

// array . filter bhi same iteration krta hai ye bhi value or index deta hai

  let array = ["adeel" , "fahad" , "hassan"];
  array.filter(function(v,i){
console.log(v.i)
return true
  })

  let abc = [{name: "adeel"},{name: "fahad"},{name: "adeel"}];

  let newAbc = abc.filter(function(v,i){
    return v.name === "adeel"
  })
console.log(newAbc)

// concat

let uu = [{name: "adeel"},{name: "fahad"},{name: "adeel"}];
// 2 array ko apas mein merage krdega miladega
console.log(uu.concat([{name: "zohaib"}]));


// reduce
let product = [
  {name: "mobile", price:100},
  {name: "tab", price:200},
  {name: "book", price:300},
]
product.reduce(function(a , v , i , arr){
  console.log()
  return a + v.price
},0)
console.log(product)


// function adeel(a,b){
// return a * b
// }
// console.log(adeel(5,10))

// let adeel = (a,b) =>{
//   return a * b
// }
// console.log(adeel(5,10))


let adeel = (a,b) => a * b
console.log(adeel(5,10))














