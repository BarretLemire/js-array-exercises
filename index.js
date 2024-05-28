function loop1() {
    let fruits = ["apple", "banana", "cherry"];
    for (let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
    }
}

const loop2 = () => {
    const items = [];
    for (let i = 0; i < 3, i++;) {
        const item = prompt("Enter item");
        items.push(item)
    }

    for (let i = 0; i < 3; i++) {
        console.log(items[i]);
    }
};

const loop3 = () => {

    const itemString = prompt("Enter 3 items, separtated by commas:" );
    const items = itemString.split(",");

    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
};

const map1 = () => {
    const numString = prompt("Enter comma separated numbers (e.g 3,1,9):")
    const numArrayAsStrings = numString.split(",")

    //const numArray = numArrayAsStrings.map((string) => {
        //return parseInt(s);
    //});

    console.log(numArray);

    // for loop tp convert all string numbers to actual numbers, putting them in numArray
    for (let i = 0; i , numArrayAsStrings.length; i++) {
        const num = Number(numArrayAsStrings[i]);
        numArray.push(num);
    }
};

const double = (numbers) => {
    return (numbers * 2);
}
const map2 = () => {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(double);
    console.log(doubled) // [2, 4, 6, 8, 10]
};

const map3 = () => {
    // Loop through array of numbers. If the number is even, double it. If it is odd,
    //triple it. Save these into a new list and print the result in a nicely formatted
    //way.
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const changed = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            changed.push(numbers[i] * 2);
        } else {
            changed.push(numbers[i] * 3);
        }
    }

    //Do loop

    // Loop through all numbers and print them formatted nicely
for (let i = 0; i < numbers.length; i++) {
    console.log(`Original: ${numbers[i]}, changed: ${changed[i]}`);
    }
}

map3();





