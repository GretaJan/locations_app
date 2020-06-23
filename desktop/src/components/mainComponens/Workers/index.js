import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWorkers } from '../../../redux/actions/workerActions';

//components
import Workers from './Workers';
import Empty from '../../modals/texts/EmptyArray';

const Index = ({ workers, emptyArray, fetchWorkers }) => {

    useEffect(() => {
        fetchWorkers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [workers])

    return (
        <div class="flex-right">
            <h1>Users2</h1>
            { emptyArray !== '' ? (
                <div>
                    <div>Empty</div>
                    <Empty text={ emptyArray } />
                </div>
            ) : (
                <div>
                <Workers workers={ workers } />
                </div>
            )} 
        </div>
    )
}

const mapStateToProps = (state) => ({
    workers: state.workers.workers,
    emptyArray: state.workers.emptyArray,
})

export default connect(mapStateToProps, { fetchWorkers })(Index)