const objectToFlat = {
    "a": "x",

    "b": {

        "c": {

            "d": 1

        },

        "e": {

            "f": 2

        },

        "g": "h"

    },
    /*     "c": [1, 3, 4] */
}

const result = {
    "a": "x",

    "b_c_d": 1,

    "b_e_f": 2,

    "b_g": "h"
}

const flatObjFunction = (object) => {
    let result = {}
    const flat = (object, parent) => {
        for (let key in object) {
            if (typeof object[key] === "object") {
                flat(object[key], parent + key + "_")
            } else {
                result[parent + key] = object[key]
            }
        }
    }
    flat(object, "")
    return result
}

console.log(flatObjFunction(objectToFlat));




const multiLevelNestedArray = [
    1,
    [2, [3, 4], 5],
    [6, 7, [8, [9, 10], 11]],
    [12, [13, [14, 15]]],
    [16, [17, [18, [19, 20]]]]
];


const flatArrayFunction = (array) => {
    let result = []
    const flat = (array) => {
        for (let curr of array) {
            if (typeof curr === "object") {
                flat(curr)
            } else {
                result.push(curr)
            }
        }
    }
    flat(array)
    return result
}

console.log(flatArrayFunction(multiLevelNestedArray));