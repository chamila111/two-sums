# two-sums
two sums using javascript
var twoSums = function(nums,target) {
let storage = {};
for(let i = 0;i < nums.length;i++) {
let currentNumber = nums[i];
let neededValue = target-currentNumber;
const index2 = storage[neededValue];
if(index2 != null) {
return [index2,i];
} else {
storage[currentNumber] = i
}
}

};
