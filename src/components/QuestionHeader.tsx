import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { COLORS } from '../util/constants';
import { QuestionData, QuestionWord } from '../util/types';

type Props = {
   question: QuestionData 
}

export default function QuestionHeader(props: Props) {

    const renderTranslation = () => {
        return (
            <Text style={styles.questionTranslation}>
                {
                    props.question.question.map((word: QuestionWord) => {
                        const wordStyle = word.isAsked ? styles.askedWordStyle : styles.questionTranslation
                        return (
                            <Text style={wordStyle}>{word.translation}{' '}</Text>
                        )
                    })
                }
            </Text>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.guidance}>Fill in the missing word</Text>
            {renderTranslation()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center'
    },
    guidance: {
        paddingVertical:15,
        fontSize: 13,
        color: COLORS.white,
    },
    questionTranslation: {
        paddingVertical:15,
        fontSize: 22,
        color: COLORS.white 
    },
    askedWordStyle: {
        fontSize: 22,
        color: COLORS.white,
        fontWeight: 'bold',
        textDecorationLine:'underline'
    },
});
