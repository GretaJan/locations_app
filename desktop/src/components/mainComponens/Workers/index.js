import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWorkers } from '../../../redux/actions/workerActions';

//components
import Workers from './Workers';
import Empty from '../../modals/texts/EmptyArray';

const Index = ({ workers, emptyArray, fetchWorkers }) => {

    useEffect(() => {
        fetchWorkers();
    }, [workers])

    return (
        <div>
            <h1>Users2</h1>
            {/* { emptyArray !== '' ? (
                <div>
                    <div >Empty</div>
                    <Empty text={ emptyArray } />
                </div>
            ) : (
                <div>
                <div >Empty</div>
                <Workers workers={ workers } />
                </div>
            )} */}
        </div>
    )
}

const mapStateToProps = (state) => ({
    workers: state.workers.workers,
    emptyArray: state.workers.emptyArray,
})

export default connect(mapStateToProps, { fetchWorkers })(Index)