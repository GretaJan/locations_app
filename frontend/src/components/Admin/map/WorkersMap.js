import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { fetchWorkers } from '../../../redux/actions/adminActions';
import { fetchLastLocations, fetchLastLocation } from '../../../redux/actions/workerActions';
import { index } from '../../../styles/AdminStyles';

//components
import Worker from './WorkerSingle';

const AdminMap = ({ lastLocations, workers, fetchWorkers, fetchLastLocations, fetchLastLocation }) => {

    useEffect(() => {
        // console.log("user", workers)
        fetchWorkers();
        fetchLastLocations();
    }, [])

    return (
        <View style={ index().container }>
            {/* <Text>MAP</Text> */}
            <MapView />
            <FlatList data={lastLocations} renderItem={({item}) => (
                <Worker props={ item } />
                )} 
                keyExtractor={item => item.id} >
            </FlatList>
        </View>
    )
}

const mapStateToProps = (state) => ({
    workers: state.admin.workersProfile,
    lastLocations: state.worker.lastLocations
})

export default connect(mapStateToProps, { fetchWorkers, fetchLastLocations, fetchLastLocation })(AdminMap)