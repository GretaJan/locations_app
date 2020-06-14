import React, { useState, useEffect } from 'react';
import { View, Text, Platform } from 'react-native';
import { Location, Permissions } from 'expo';
import Constants from 'expo-constants';
import MapView from 'react-native-maps';
import moment from 'moment';
import { connect } from 'react-redux';
import { addLocation } from '../../redux/actions/workerActions';

//components

const WorkerMap = ({ workerProfile, workerCurrently, addLocation }) => {

    useEffect(() => {
        let currentTime = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a');

        if(Platform.OS === 'android' && !Constants.isDevice) {
            console.log('Oops this will not work on Android Emulator. Try it on your device!')
        } else {
            getLocation();
        }
        const data = {
            'user_id': workerProfile.id,
            'longitude': 54.912865,
            'latitude': 23.937234,
            'created_at': currentTime,
            'updated_at': currentTime,
            'deleted_at': currentTime,
            'ended_at': currentTime,
            'worked_today': currentTime,
        }
        addLocationAsync(workerProfile.id, data);
    }, [workerCurrently])

    const getLocation = async() => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);

        if(status !== 'granted') {
            console.log('PERMISSION NOT GRANTED')
        }
        const workerLocation = await Location.getCurrentPositionAsync();
        console.log('worker location', workerLocation);
    } 

    const addLocationAsync = async (id, data) => {
        await addLocation(id, data);
    }

    return (
        <View>
            {/* <Text>MAP</Text> */}
            <MapView />
            {/* <Text>{ workerCurrently.latitude }</Text> */}
        </View>
    )
}

const mapStateToProps = (state) => ({
    workerProfile: state.authorization.workerProfile,
    workerCurrently: state.worker.workerCurrently,
})

export default connect(mapStateToProps, { addLocation })(WorkerMap)