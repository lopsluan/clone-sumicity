import React from 'react'
import {View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export const NotificationHeader = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.text}>{'<-'}</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
        </View>
    )
}