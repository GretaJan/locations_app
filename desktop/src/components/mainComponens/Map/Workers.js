import React from 'react';

// Components
import Worker from './WorkerSingle';

const WorkersMap = ({ workers }) => {

    return (
        <div>
            { workers.map(worker => (
                <Worker key={ worker.id } name={ worker.name }  surname={ worker.surname } />
            )) }
        </div>
    )
}

export default WorkersMap