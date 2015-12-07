/**
 * 交换排序——冒泡排序
 *
 * @param {Array} arr
 * @return {Array}
 */
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) { //i,已下沉的元素个数
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

/**
 * 交换排序——快速排序
 *
 * @param {Array} arr
 * @returns {Array}
 */
function quickSort(arr) {
    var leftArr = [];
    var rightArr = [];
    var divider;
    if (arr.length === 0) {
        return [];
    } else if (arr.length === 1) {
        return arr;
    }
    divider = arr[0];
    for (var i = 1;  i < arr.length; i++) { //从第二个元素开始,注意arr.length，防止当数组只有两个元素，不进入循环
        arr[i] < divider ? leftArr.push(arr[i]) : rightArr.push(arr[i]);
    }
    return quickSort(leftArr).concat(divider, quickSort(rightArr));
}

/**
 * 基数排序——桶排序
 *
 * @param {Array} arr
 * @param {Number} count
 * @return {Array}
 */
function bucketSort(arr, count) {
    if (arr.length === 0) {
        return [];
    }
    count = count || (count > 1 ? count : 10);
    var min = arr[0];
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        min = min < arr[i] ? min : arr[i];
        max = max > arr[i] ? max : arr[i];
    }
    var delta = (max - min + 1) / count;
    var buckets = [];
    for (var i = 0; i < arr.length; i++) {
        var index = Math.floor((arr[i] - min) / delta);
        if (buckets[index]) {
            for (var j = 0; j < buckets[index].length; j++) {
                if (arr[i] > buckets[index][j]) {
                    if (typeof buckets[index][j + 1] === 'undefined') {
                        buckets[index].push(arr[i]);
                        break;
                    }
                    if (arr[i] < buckets[index][j + 1]) {
                        buckets[index].splice(j + 1, 0, arr[i]);
                        break;
                    }
                } else {
                    buckets[index].splice(j, 0, arr[i]);
                    break;
                }
            }
        } else {
            var bucket = [];
            bucket.push(arr[i]);
            buckets[index] = bucket;
        }
    }
    var result = [];
    for (var i = 0; i < buckets.length; i++) {
        if (!buckets[i]) {
            buckets[i] = [];
        }
        result = result.concat(buckets[i]);
    }
    return result;
}







