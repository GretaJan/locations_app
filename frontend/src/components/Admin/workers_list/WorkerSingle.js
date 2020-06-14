import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const WorkerSingle = ({ props, detailsPage }) => {

    const goToDetails = () => {
        detailsPage();
    }

    return (
        <TouchableOpacity onPress={() => goToDetails() }>
            <Text>{props.name}</Text>
            <Text>{props.surname}</Text>
        </TouchableOpacity>
    )
}

export default WorkerSingle