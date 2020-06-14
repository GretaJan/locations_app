import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { index } from '../../styles/AdminStyles';

const Notification = () => {

    return (
        <View style={ index().container }>
            <Text>Logged Out !</Text>
        </View>
    )
}

export default Notification