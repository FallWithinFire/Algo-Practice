# Codewars Problem and Solution

## The Problem: Bit Counting

[Link to problem](https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript)

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

## My Solution:

```
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
```

# Explaining the Solution:

In this function, we use a ``while`` loop to iterate through each bit of the input integer ``n``. We use a bitwise AND operation with ``1`` to check the least significant bit, and if it's ``1``, we increment the ``count``. Then, we right-shift the number ``n`` by one bit to check the next bit. We continue this process until ``n`` becomes zero. The final count will represent the number of bits set to ``1`` in the binary representation of the input integer.

![Test Run 1](https://i.imgur.com/RwbwEiR.png)

