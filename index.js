// // let arr = [1,2,3,4,5,6,7,8,9,3,2,12,3]

// // let total = 0

// //     for(i = 0; i < arr.length; i++) {
// //         if(arr[i] % 2 !== 0) {
// //             total += arr[i]
// //         }
// //     }


// // console.log(total);


// // let arrr = [
// //     [1, 2, 3, 4],
// //     [1, 2, 3, 4],
// //     [1, 2, 3, 4],
// //     [1, 2, 3, 4]
// // ]

// // let double_total = 0

// // // for (let i = 0; i < arrr.length; i++) {
// // //     for (let k = 0; k < arrr[i].length; k++) {
// // //         double_total += arrr[i][k]
// // //     }
// // // }

// // for(let arr of arrr) {
// //     for(let num of arr) {
// //         double_total += num
// //     }
// // }


// // console.log(double_total);


// function reverseText(text) {

// }

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let k = 0; k < len - 1; k++) {
            if (arr[k] > arr[k + 1]) {

                let temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
            }
        }
    }
    return arr;
}


let arrayToSort = [5, 3, 8, 1, 9, 6, 11, 10, 4, 2];
let sortedArray = bubbleSort(arrayToSort);
console.error(sortedArray);

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let character_length = characters.length
let rusult = ""

function idgenerator(length) {
    for(let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * character_length)
        rusult += random
    }
    return rusult
}

let random_nch = idgenerator(8)

console.log(random_nch);




