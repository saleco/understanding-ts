function add(n1: number, n2: number) {
    return n1  + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result)
}
printResult(add(5, 12));

//describes function type allowed
let combineValues: (a:number, b:number) => number;

combineValues = add;

// combineValues = printResult;
// combineValues = 5;


console.log(combineValues(8,8))

addAndHandle(10, 20, (result) => {
    console.log(result);
});

addAndHandle(10, 23, printResult);