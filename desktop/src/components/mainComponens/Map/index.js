import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWorkers } from '../../../redux/actions/workerActions';

//components
import Workers from './Workers';
import Empty from '../../modals/texts/EmptyArray';

const Homepage = ({ workers, emptyArray, fetchWorkers }) => {

    useEffect(() => {
        fetchWorkers();
        console.log("workers", workers)
    }, [])

    return (
        <div>
            <h1>Users</h1>
            { emptyArray !== '' ? (
                <Empty text={ emptyArray } />
            ) : (
                <Workers workers={ workers } />
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    workers: state.workers.workers,
    emptyArray: state.workers.emptyArray,
})

export default connect(mapStateToProps, { fetchWorkers })(Homepage)