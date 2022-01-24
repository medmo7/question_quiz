export type QuestionWord = {
    word: string,
    translation?: string,
    isAsked: boolean
}
export type QuestionData ={
        question: QuestionWord[],
        choices: QuestionWord[]
    }


export enum ANSWER_STATUS {
    idle,
    correct,
    wrong,
    empty,
    picked
}