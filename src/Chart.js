import React, { Component } from 'react';
import Bar from './Bar';
import "./Chart.css";
import { BubbleSort } from './SortingAlgorithms/BubbleSort';
import { Selection } from './SortingAlgorithms/SelectionSort';
import { Insertion } from './SortingAlgorithms/InsertionSort';
import { Merge } from './SortingAlgorithms/MergeSort';

const PRIMARY_COLOR = 'blue';
const SECONDARY_COLOR = 'red';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.Bubble_Sort = this.Bubble_Sort.bind(this);
        this.Selction_Sort = this.Selction_Sort.bind(this);
        this.Insertion_Sort = this.Insertion_Sort.bind(this);
        this.Merge_Sort = this.Merge_Sort.bind(this);
        this.state = { array: [], length: 66, Speed: 50, sorting: false };
        this.resetArray = this.resetArray.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    Bubble_Sort() {

        this.setState({ sorting: true });

        const [animations] = BubbleSort(this.state.array);
        let i;
        for (i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] === "comparision1" || animations[i][0] === "comparision2";
            const arrayBars = document.getElementsByClassName('Bar');
            if (isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [comparision, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.Speed);
            }
            else {
                const [swap, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * this.state.Speed);
            }
        }

        setTimeout(() => {
            this.setState({ sorting: false });
        }, i * this.state.Speed);


    }

    Insertion_Sort() {

        this.setState({ sorting: true });

        let i;
        const [animations] = Insertion(this.state.array);
        for (i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] === "comparision1" || animations[i][0] === "comparision2";
            const arrayBars = document.getElementsByClassName('Bar');
            if (isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [comparision, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.Speed);
            }
            else {
                const [swap, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * this.state.Speed);
            }
        }

        setTimeout(() => {
            this.setState({ sorting: false });
        }, i * this.state.Speed);


    }

    Merge_Sort() {

        this.setState({ sorting: true });

        let i;
        const [animations] = Merge(this.state.array);
        for (i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] === "comparision1" || animations[i][0] === "comparision2";
            const arrayBars = document.getElementsByClassName('Bar');
            if (isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [comparision, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.Speed);
            }
            else {
                const [swap, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * this.state.Speed);
            }
        }

        setTimeout(() => {
            this.setState({ sorting: false });
        }, i * this.state.Speed);

    }

    Selction_Sort() {

        this.setState({ sorting: true });

        const [animations] = Selection(this.state.array);
        let i;

        for (i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] === "comparision1" || animations[i][0] === "comparision2";
            const arrayBars = document.getElementsByClassName('Bar');
            if (isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [comparision, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.Speed);
            }
            else {
                const [swap, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * this.state.Speed);
            }
        }

        setTimeout(() => {
            this.setState({ sorting: false });
        }, i * this.state.Speed);


    }

    handleIncrease() {

        let x = this.state.Speed;
        if (x > 1) {
            this.setState(prev => ({
                Speed: prev.Speed - 20
            }))
        } else {
            alert("Cannot get Faster than this")
        }

    }

    handleDecrease() {
        let x = this.state.Speed;
        if (x < 110) {
            this.setState(prev => ({
                Speed: prev.Speed + 20
            }))
        } else {
            alert("Sry Slower than this is not possible");
        }
    }

    resetArray() {
        const arr = [];
        for (let index = 0; index < this.state.length; index++) {
            let element = Math.floor(Math.random() * 800) + 100;
            arr[index] = element;
        }
        this.setState({ array: arr });
    }

    componentDidMount() {
        this.resetArray();
        console.log(this.state.sorting);

    }

    render() {

        let Object = this.state.array.map((e, index) => <div className="array-bar"><Bar height={e} key={index} left={index * 20} /></div>)

        return (
            <div className="main" >
                <div className="buttons" >
                    <button disabled={this.state.sorting} title="Generates a new random array" className="button bouncy" onClick={this.resetArray}>
                        Reset
                    </button>
                    <button disabled={this.state.sorting} className="button bouncy" style={{ "animation-delay": "0.07s" }} onClick={this.Bubble_Sort}>Bubble-Sort</button>
                    <button disabled={this.state.sorting} className="button bouncy" style={{ "animation-delay": "0.14s" }} onClick={this.Merge_Sort}>Merge-Sort</button>
                    <button disabled={this.state.sorting} className="button bouncy" style={{ "animation-delay": "0.21s" }} onClick={this.Insertion_Sort}>Insertion Sort</button>
                    <button disabled={this.state.sorting} className="button bouncy" style={{ "animation-delay": "0.28s" }} onClick={this.Selction_Sort}>Selection Sort</button>
                    <button disabled={this.state.sorting} className="button bouncy" style={{ "animation-delay": "0.35s" }} onClick={this.handleIncrease}>Speed +</button>
                    <button disabled={this.state.sorting} className="button bouncy" style={{ "animation-delay": "0.42s" }} onClick={this.handleDecrease}>Speed -</button>
                </div>
                <div className="Chart">
                    {Object}
                </div >
            </div >

        )
    }
}

export default Chart



// swap(arr, first, second) {
//     var temp = arr[first];
//     arr[first] = arr[second];
//     arr[second] = temp;
//     this.setState({ array: arr });
// }

// resetArray() {
//     const arr = [];
//     for (let index = 0; index < this.state.length; index++) {
//         let element = Math.floor(Math.random() * 500) + 20;
//         arr[index] = element;
//     }

//     this.setState({ array: arr });
// }

// sleep = (milliseconds) => {
//     return new Promise(resolve => setTimeout(resolve, milliseconds))
// }

// async Sort() {
//     var len = this.state.length;
//     var i, j, stop;
//     let arr = this.state.array;
//     for (i = 0; i < len; i++) {
//         for (j = 0, stop = len - i; j < stop; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 await this.sleep(100);
//                 this.swap(arr, j, j + 1);
//             }

//         }

//     }

    // arr = this.mergesort(arr);
    // this.setState({ array: arr });

// }

// merge(leftArr, rightArr) {
//     var sortedArr = [];
//     while (leftArr.length && rightArr.length) {
//         if (leftArr[0] <= rightArr[0]) {
//             sortedArr.push(leftArr[0]);
//             leftArr = leftArr.slice(1)
//         }
//         else {
//             sortedArr.push(rightArr[0]);
//             rightArr = rightArr.slice(1)
//         }
//     } while (leftArr.length) sortedArr.push(leftArr.shift()); while (rightArr.length) sortedArr.push(rightArr.shift()); return sortedArr;
// }

// mergesort(arr) {
//     if (arr.length < 2) { return arr; } else {
//         var midpoint = parseInt(arr.length / 2);
//         var leftArr = arr.slice(0, midpoint);
//         var rightArr = arr.slice(midpoint, arr.length);
//         return this.merge(this.mergesort(leftArr), this.mergesort(rightArr));
//     }
// }
