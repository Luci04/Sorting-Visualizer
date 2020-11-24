import React from 'react'
import Bar from './Bar';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';


function DraggbleBars({ array }) {

    return (
        <div>
            {array.map((e, index) => <Bar height={e} key={index} index={index} left={index * 20} />)}
        </div>
    )
}

export default SortableContainer(DraggbleBars);

// export default class Table {
//     render() {


//         return (

//             
//         )

//     }
// }

