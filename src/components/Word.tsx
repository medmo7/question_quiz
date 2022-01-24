import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { QuestionWord } from '../util/types';
import { COLORS } from '../util/constants';

type Props ={
    data: QuestionWord
}

export default function Word(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.word}>{props.data.word}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        padding:5,
        justifyContent:'center',
        alignContent:'center'
    },
    word:{
        fontSize: 20,
        color: COLORS.white,
    }
});
