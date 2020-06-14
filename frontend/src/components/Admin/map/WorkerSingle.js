import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const WorkerSingle = ({ props }) => {

    return (
        <TouchableOpacity>
            <Text>Name: {props.name}</Text>
            <Text>Latitude: {props.latitude}</Text>
            <Text>Longitude: {props.longitude}</Text>
        </TouchableOpacity>
    )
}

export default WorkerSingle