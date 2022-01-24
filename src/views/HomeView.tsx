import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


import { COLORS } from '../util/constants';

import AnswerChoices from '../components/AnswerChoices';
import QuestionControl from '../components/QuestionControl';
import QuestionHeader from '../components/QuestionHeader';
import { ANSWER_STATUS, Choice, Choices, QuestionData, QuestionWord } from '../util/types';
import Question from '../components/Question';

const mockQuestion: QuestionData[] = [
    {
        question: [
            {
                word: 'This',
                translation: 'Ceci',
                isAsked: false
            },
            {
                word: 'is',
                translation: 'est',
                isAsked: false
            },
            {
                word: 'a',
                translation: 'un',
                isAsked: false
            },
            {
                word: 'test',
                translation: 'test',
                isAsked: true
            }
        ],
        choices: [{
            word: 'test',
            isAsked: true
        }, {
            word: 'car',
            isAsked: false
        }, {
            word: 'plane',
            isAsked: false
        }, {
            word: 'joke',
            isAsked: false
        }]
    }
]

export default function HomeView() {

    const [currentQuestion, setCurrentQuestion] = React.useState(mockQuestion[0]);
    const [currentAnswerChoice, setCurrentAnswerChoice] = React.useState(null);
    const [answerStatus, setAnswerStatus] = React.useState<ANSWER_STATUS>(ANSWER_STATUS.empty);
    const [answerChoices, setAnswerChoices] = React.useState<Choice>(mockQuestion[0].choices);

    return (
        <View style={styles.container}>
            <QuestionHeader question={currentQuestion} />

            <Question question={currentQuestion} answerChoice={currentAnswerChoice} answerStatus={answerStatus} />

            <AnswerChoices data={answerChoices} currentChoice={currentAnswerChoice}/>

            <QuestionControl />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: COLORS.background
    },
    headerContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    questionContainer: {
        padding: 10,
        alignItems: 'center'
    },
    choicesContainer: {
        padding: 10,
        flexWrap: 'wrap'
    },
    buttonContainer: {

    },
});
