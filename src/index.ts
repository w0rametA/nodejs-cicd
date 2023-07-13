// find max 
// find min 

export function findMax(arr:number[]):number {
    let max = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < arr[i+1]){
            max = arr[i+1]
        }
    }
    return max
}

export function findMin(arr:number[]):number {
    let min = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > arr[i+1]){
            min = arr[i+1]
        }
    }
    return min
}

export function avgThis(arr:number[]):number {
    let avg = 0
    for(let i = 0 ; i < arr.length ; i++){
        avg += arr[i]
    }
    return avg/arr.length
}

console.log(findMax([1,2,3,4,5,6,7]))

console.log(avgThis([1,2,3,4,5,6,7,8,9,10]))
