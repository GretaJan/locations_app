import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchWorker } from '../../../redux/actions/adminActions';

const WorkerSingle = ({ route, fetchWorker, worker }) => {

    useEffect(() => {
        fetchWorker(route.params.id);
    }, [])

    return (
        <View>
            <Text>Worker Details</Text>
            <Text>{ route.params.id }</Text>
            <Text>{ worker.name }</Text>
            <Text>{ worker.surname }</Text>
            <Text>{ worker.phone }</Text>
            <Text>{ worker.email }</Text>
        </View>
    )
}

const mapStateToProps = (state) => ({
    worker: state.admin.worker
})

export default connect(mapStateToProps, { fetchWorker } )(WorkerSingle)