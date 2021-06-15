/* 1. Write a JavaScript function to check whether an `input` is an array or not */

function is_array(input) {
    return Array.isArray(input)
    //OR return toString.call(input) === "[object Array]"
}

/* 2. Write a JavaScript function to clone an array -> deep copy */
function clone(input) {
    if(Array.isArray(input)) {
        let temp_arr = [...input]
        for(let i in input) {
            input[i] = clone(input[i])
        }
        return temp_arr;
    }
    return input;
}

/* 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. */
function getNElements(input, n) {
    if(Array.isArray(input) && Number.isInteger(n)) {
        let temp_arr = []
        for(let i = 0; i < n && i < input.length; ++i) {
            temp_arr.push(clone(input[i]))
        }
        return temp_arr;
    }
    return []
}

/* 4. Write a simple JavaScript program to join all elements of the following array into a string. */
function ArrayJoin(array, separator) {
    if(Array.isArray(array) && array.length > 0) {
        if(typeof separator === "string") {
            let ans = JSON.stringify(array[0]);
            for(let i = 1; i < array.length; ++i) {
                ans += separator + JSON.stringify(array[i]);
            }
            return ans;
        } else {
            return ArrayJoin(array, ",");
        }
    }
    return "";
}

/* 5.  Write a JavaScript program to find the most frequent item of an array */
function findMostFrequentItem(array) {
    if(Array.isArray(array) && array.length > 0) {
        freq_map = {};
        let ele = null, freq = 0;
        for(let item of array) {
            if(freq_map[item] === undefined)
                freq_map[item] = 0;
            freq_map[item]++;
            if(freq_map[item] > freq) {
                freq = freq_map[item];
                ele = item;
            }
        }
        return ele;
    }
    return null;
}