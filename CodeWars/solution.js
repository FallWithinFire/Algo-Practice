function countBits(n) {
    let count = 0;
    while (n > 0) {
      // Use a bitwise AND operation with 1 to check the least significant bit
      // Add the result to the count
      count += n & 1;
      // Right-shift the number to check the next bit
      n >>= 1;
    }
    return count;
  }
  
  // Test the function with the example
  const number = 1234;
  const bitCount = countBits(number);
  console.log(`The number of set bits in the binary representation of ${number} is: ${bitCount}`);
  