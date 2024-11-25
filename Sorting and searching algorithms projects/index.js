function insertionSort(arr) {
    // Loop through each element in the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        let current = arr[i];
        // Initialize a variable j to track the position to insert the current element
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current, to one position ahead
        // of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Shift the element to the right
            j--; // Move to the previous element
        }
        // Insert the current element at its correct position
        arr[j + 1] = current;
    }

    return arr; 
}