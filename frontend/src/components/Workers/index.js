import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import WorkerCoordinates from './WorkerCoordinates';

//components

const Workers = () => {

    return (
        <View>
            <Text>WORKERS IN MAIN</Text>
            <Text>WORKERS IN MAIN</Text>
            <Text>WORKERS IN MAIN</Text>
            <Text>WORKERS IN MAIN</Text>
            <Text>WORKERS IN MAIN</Text>
            <WorkerCoordinates />
        </View>
    )
}

export default Workers