import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchWorkers } from '../../../redux/actions/adminActions';
import { index } from '../../../styles/AdminStyles';

//components
import Worker from './WorkerSingle';

const AdminMap = ({ workers, fetchWorkers, navigation: { navigate } }) => {

    useEffect(() => {
        fetchWorkers();
    }, []);

    const goToDetails = (item) => {
        navigate('Worker', {id: item.id});
    } 
    const goRegisterPage = () => {
        navigate('Register');
    }

    return (
        <View style={ index().container }>
            <Text>List</Text>
            <MapView />
            <FlatList data={workers} renderItem={({item}) => (
                <Worker props={ item } 
                    detailsPage={() => goToDetails(item) }
                />
                )} 
                keyExtractor={item => item.id} >
            </FlatList>
            <TouchableOpacity onPress={() => goRegisterPage()}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state) => ({
    workers: state.admin.workersProfile,
})

export default connect(mapStateToProps, { fetchWorkers })(AdminMap)