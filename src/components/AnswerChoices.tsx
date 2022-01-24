import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { QuestionWord } from '../util/types';
import Choice from './Choice';

type Props = {
    data: QuestionWord[]
}

export default function AnswerChoices(props:Props) {
  return (
    <View style={styles.container}>
      {props.data.map((answerChoice:QuestionWord) => <Choice data={answerChoice}/> )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent:'center'
    }
});
