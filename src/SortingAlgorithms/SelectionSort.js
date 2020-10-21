export function Selection(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    selection(auxillaryArray, animations);
    array = auxillaryArray;
    return [animations, array];
}

function selection(auxillaryArray, animations) {
    const N = auxillaryArray.length;
    for (let i = 0; i < N - i; i++) {
        let minIndex = i;
        for (let j = i + 1; j < N; j++) {
            animations.push(["comparision1", j, minIndex]);
            animations.push(["comparision2", j, minIndex]);
            if (auxillaryArray[j] < auxillaryArray[minIndex])
                minIndex = j;
        }
        animations.push(["swap", minIndex, auxillaryArray[i]]);
        animations.push(["swap", i, auxillaryArray[minIndex]]);

        swap(auxillaryArray, minIndex, i);
    }
}

function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}

