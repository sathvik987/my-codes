function compressTwice(boxes, boxes2) {
    boxes.forEach(function (boxes) {
        console.log(boxes);
    })

    boxes2.forEach(function (boxes) {
        console.log(boxes);
    })
}

//O(a+b), if nested then O(a*b), if nested and only one input then O(n^2)