import _ from "lodash";
import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import useQuestions from '../../hooks/useQuestions';
import Answers from "../Answers";
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';

const initialState = null;

const reducer = (state, action) => {
    switch (action.type) {
        case "questions":
            action.value.forEach(question => {
                question.options.forEach(option => {
                    option.checked = false;
                })
            })
            return action.value;

        case "answer":
            const questions = _.cloneDeep(state);
            questions[action.]
        default:
            return state;
    }
}

function Quiz() {
    const { id } = useParams()
    const { loading, error, questions } = useQuestions(id)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [qna, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({
            type: "questions",
            value: questions,
        })
    }, [questions])

    return (
        <>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answers />
            <ProgressBar />
            <MiniPlayer />
        </>
    )
}

export default Quiz