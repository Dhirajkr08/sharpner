arr=[1,2,4,1,5,6]
let n=arr.length;
console.log(n)
let maximum=-Infinity;
let secondHighest=-Infinity;
for(let i=0;i<n;i++){
    maximum=Math.max(maximum,arr[i])

} 
for (let i=0;i<n;i++){
    if(arr[i]<maximum){
        secondHighest=Math.max(secondHighest,n)
    }
    console.log(secondHighest)
    
}

 
