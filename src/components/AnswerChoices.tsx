import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { ANSWER_STATUS, QuestionWord } from '../util/types';
import Choice from './Choice';

type Props = {
    data: QuestionWord[]
    currentChoice: QuestionWord
}

export default function AnswerChoices(props: Props) {


    return (
        <View style={styles.container}>
            {
                props.data.map((answerChoice: QuestionWord) => {
                    const choiceStatus = props.currentChoice?.word === answerChoice.word ? ANSWER_STATUS.picked : ANSWER_STATUS.idle;
                    return <Choice data={answerChoice} answerStatus={choiceStatus} />
                }
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '60%',
        alignSelf: 'center'
    }
});
