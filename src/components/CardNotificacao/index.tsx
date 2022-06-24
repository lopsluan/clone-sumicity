import React from "react";
import { View, Text } from 'react-native'

import { styles } from "./styles";

export interface CardNotificacaoProps {
    title: string;
    body: string;
    date: string;
}
export const CardNotificacao = ({ body, title,date }: CardNotificacaoProps) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>{ title } </Text>
            <Text style={[styles.text, styles.body]}>{ body } </Text>
            <Text style={[styles.text, styles.date]}>{ date } </Text>
        </View>

    )
}