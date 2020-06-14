import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { fetchWorkers } from '../../../redux/actions/adminActions';
import { index } from '../../../styles/AdminStyles';

//components
import Workers from './WorkersMap';

const AdminMap = () => {

    return (
        <View style={ index().container }>
            <Text>MAP IN MAIN</Text>
            <MapView />
            {/* <FlatList data={workers} renderItem={({item}) => (
                <Worker props={ item } />
                )} 
                keyExtractor={item => item.id} >
            </FlatList> */}
            <Workers />
        </View>
    )
}

export default AdminMap