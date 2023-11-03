# Leetcode Problem and Solution

## The Problem: Array Prototype Last

[Link to problem](https://leetcode.com/problems/array-prototype-last/)

Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.parse.


### Example 1:

``Input: nums = [null, {}, 3]``
``Output: 3``
``Explanation: Calling nums.last() should return the last element: 3.``

### Example 2:

``Input: nums = []``
``Output: -1``
``Explanation: Because there are no elements, return -1.``
 

### Constraints:

arr is a valid JSON array
``0 <= arr.length <= 1000``

## My Solution:

```
Array.prototype.last = function() {
  if (this.length === 0) {
    return -1;
  }
  return this[this.length - 1];
};
```

# Explaining the Solution:

``Array.prototype.last = function():`` This line extends the ``Array`` prototype by adding a new method called ``last``. The ``function()`` part defines an anonymous function that will be executed when you call ``last()`` on an array.

### Inside the ``last`` method:

``if (this.length === 0):1``: ``this`` refers to the array on which you're calling the ``last`` method. We check the length of the array using ``this.length``. If the length is 0, it means the array is empty.

``return -1;``: If the array is empty, we return -1 as specified in the question.

### If the array is not empty:

``return this[this.length - 1];``: We use ``this.length - 1`` to access the last element of the array. In JavaScript, array indices start from 0, so the last element's index is one less than the array's length. We return the last element.

When you call ``nums.last()`` or ``emptyArray.last(),`` it runs this extended ``Array`` method, and you get the desired output.

![Test Run 1](https://i.imgur.com/U0MPjGg.png)
![Test Run 2](https://i.imgur.com/OZQJ3Gi.png)
