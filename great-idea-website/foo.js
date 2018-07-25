console.log('hello');

function strlenavg(arr) {
    let avg = 0;
    arr.forEach(element => {
        console.log(element);
        avg += element.length;
    });
    return avg / arr.length;

}

console.log(strlenavg(["foo", "bsr"]));