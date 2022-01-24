import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ANSWER_STATUS, QuestionWord } from '../util/types';
import { COLORS, SHADOW_STYLE } from '../util/constants';

type Props = {
    data: QuestionWord,
    answerStatus: ANSWER_STATUS
}


export default function Choice(props: Props) {


    const getBgColor = () => {
        switch (props.answerStatus) {
            case ANSWER_STATUS.correct:
                return COLORS.success
            case ANSWER_STATUS.wrong:
                return COLORS.failure

            default:
                return COLORS.white
        }
    }

    const bgColor = getBgColor()

    if (props.answerStatus === ANSWER_STATUS.empty) {
        return <View style={styles.lineView} />
    }
    else if (props.answerStatus === ANSWER_STATUS.picked) {
        return (
            <View style={styles.picked}>
                <Text style={{...styles.word,color:COLORS.gray}}>{props.data.word}</Text>
            </View> 
        )
    }
    else {
        return (
            <Pressable style={{ ...styles.container, backgroundColor: bgColor }}>
                <Text style={styles.word}>{props.data.word}</Text>
            </Pressable>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15,
        margin:5,
        ...SHADOW_STYLE
    },
    word: {
        fontSize: 20,
        color: COLORS.background,
        fontWeight: 'bold',
    },
    lineView: {
        height: 1,
        width: 100,
        backgroundColor: COLORS.white,
        alignSelf: 'flex-end',
        marginBottom: 5
    },
    picked:{
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: COLORS.gray 
    }
});
