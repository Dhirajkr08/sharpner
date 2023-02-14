arr=[1,2,4,1,5,6]
let n=arr.length;
let highest=-Infinity;
let secondHighest=-Infinity;
for (let i=0;i<n;i++){
    if(arr[i]>highest){
        secondHighest=highest
        highest=arr[i]
    }
}
console.log(secondHighest)



//for loop

const number =window.prompt()
println(number)
