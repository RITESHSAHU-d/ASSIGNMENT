let str="aabbbc"
function charFrequency(str){
    let a ={}
    for(let i of str.split('')){
     if(a.hasOneProperty(i)){
        a[i]++
     }
     else{
        a[i]=1
     }
    }
    return a
}
console.log(charFrequency(str))
