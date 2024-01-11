// Define a type for Student objects
type Student = {
    name: string;
    age: number;
    score: number;
};

// Define the insertion sort function
function insertionSort(students: Student[]): Student[] {
    // Loop over each element in the array
    for (let i = 1; i < students.length; i++) {
        // Store the current element as the key
        let key = students[i];
        let j = i - 1;

        // Move elements of the array that are greater than the key to one position ahead of their current position
        while (j >= 0 && students[j].score > key.score) {
            students[j + 1] = students[j];
            j = j - 1;
        }
        // Place the key in its correct location
        students[j + 1] = key;
    }
    // Return the sorted array
    return students;
}

// Define the main function
function main() {
    // Create an array of Student objects
    let students: Student[] = [
        { name: 'Alice', age: 25, score: 85 },
        { name: 'Bob', age: 22, score: 95 },
        { name: 'Charlie', age: 30, score: 75 },
        { name: 'Dave', age: 20, score: 90 }
    ];

    // Call the insertion sort function and log the sorted array
    console.log(insertionSort(students));
    console.log("Hello World");
}

// Call the main function
main();