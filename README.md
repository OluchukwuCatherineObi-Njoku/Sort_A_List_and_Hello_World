# TypeScript Sorting Project

This project demonstrates how to sort a an array of objects in TypeScript using the Insertion Sort algorithm,
for the GHW hackathon

## Project Structure

The main code is in `sortList.ts`. This file contains a `Student` type definition, an `insertionSort` function, and a `main` function.

The `Student` type is an object with `name`, `age`, and `score` properties.

The `insertionSort` function sorts an array of `Student` objects in ascending order of their `score` property.

The `main` function creates an array of `Student` objects, sorts it using the `insertionSort` function, and logs the sorted array.

## Running the Project

To run this project, you need to have Node.js and TypeScript installed.

1. Compile the TypeScript file to JavaScript:

    ```bash
    tsc sortList.ts
    ```

2. Run the resulting JavaScript file:

    ```bash
    node sortList.js
    ```
