const swap = (arr, first_Index, second_Index) => {
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

export default swap;