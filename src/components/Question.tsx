import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


import { ANSWER_STATUS, QuestionData, QuestionWord } from '../util/types';


import Choice from './Choice';
import Word from './Word';

type Props = {
    question: QuestionData
    answerChoice: QuestionWord
    answerStatus: ANSWER_STATUS
}

export default function Question(props: Props) {


    const renderQuestion = () => {
        return props.question.question.map((word: QuestionWord) => {
            if (word.isAsked) {
                return <Choice key={word.word} data={word} answerStatus={props.answerStatus} />
            } else {
                return <Word key={word.translation} data={word} />
            }
        })
    }

    return (
        <View style={styles.container}>
            {renderQuestion()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
});
