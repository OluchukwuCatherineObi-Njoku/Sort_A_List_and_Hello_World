// Define the insertion sort function
function insertionSort(students) {
    // Loop over each element in the array
    for (var i = 1; i < students.length; i++) {
        // Store the current element as the key
        var key = students[i];
        var j = i - 1;
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
    var students = [
        { name: 'Alice', age: 25, score: 85 },
        { name: 'Bob', age: 22, score: 95 },
        { name: 'Charlie', age: 30, score: 75 },
        { name: 'Dave', age: 20, score: 90 }
    ];
    // Call the insertion sort function and log the sorted array
    console.log(insertionSort(students));
}
// Call the main function
main();
