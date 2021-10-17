
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {

    let even = 0;
    let odd = 1;
    let n = nums.length;

    while (even < n && odd < n) {

        while (even < n && nums[even] % 2 === 0) {
            even += 2;
        }

        while (odd < n && nums[odd] % 2 === 1) {
            odd += 2;
        }

        while (even < n && odd < n && nums[even] % 2 === 1 && nums[odd] % 2 === 0) {
            let temp = nums[even];
            nums[even] = nums[odd];
            nums[odd] = temp;
            odd += 2;
            even += 2;
        }
    }
    return nums;
};
