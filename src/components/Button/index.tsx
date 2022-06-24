import React from "react";
import { View, TouchableOpacity, Text } from 'react-native'

import { styles } from "./styles";

export interface ButtonProps {
    text: string;
    handlePress: () => void;
    className: "blue" | "white" | "green"
}
export const Button = ({ className, handlePress, text }: ButtonProps) => {
    return (
        <TouchableOpacity style={[styles.container, styles[className]]} onPress={handlePress} >
            <Text style={styles[`text_${className}`]}>{text}</Text>
        </TouchableOpacity>
    )
}