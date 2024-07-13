function firstNonRepeatedChar(str) {
 // Write your code here
	 if (!str) return null; // Edge case: empty string
    
    const charCount = {};
    
    // Count occurrences of each character
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    // Find first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null; 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
