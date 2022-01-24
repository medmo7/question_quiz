import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../util/constants';

type Props = {
    
}

export default function QuestionControl(props: Props) {

    const getStatusStyle = () => {
        const style = {
            containerBg: COLORS.background,
            buttonBg: COLORS.gray,
            buttonTitleColor: COLORS.white
        }

        return style
    }

    const statusStyle = getStatusStyle()

    return (
        <View style={{...styles.container, backgroundColor:statusStyle.containerBg}}>
            <Pressable style={{...styles.button, backgroundColor: statusStyle.buttonBg}}>
                <Text style={{...styles.buttonTitle, color:statusStyle.buttonTitleColor}}>Continue</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        borderTopRightRadius:15,
        borderTopLeftRadius: 15,
        backgroundColor: COLORS.success,
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        width:'80%',
        paddingVertical: 15,
        paddingHorizontal:20,
        backgroundColor: COLORS.gray,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonTitle:{
        fontWeight:'bold',
        color:COLORS.white
    }
});
