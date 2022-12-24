import { useState, MouseEvent } from "react";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { Ques } from "../Interfaces";
import Score from "../Pages/Score";

interface Props {
    questions: Ques[];
    darkMode: boolean
}

const Question = ({ questions, darkMode }: Props) => {
    const [questionNr, setQuestionNr] = useState(1);
    const [currQuestion, setCurrQuestion] = useState(questions[questionNr - 1]);
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [randNum, setRandNum] = useState(Math.floor((Math.random() * 4) + 1))

    const checkAnswer = (event: MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.id === "correct") {
            setScore(prevScore => prevScore + 1)
        }
        setClicked(true)
    }

    return (
        questionNr <= 10 ?
        <>
            <CardContent>
                <Typography color="primary" textAlign="center">
                    Score: {score}
                </Typography>
                <Typography color="primary" textAlign="center">
                    Question: {questionNr}/10
                </Typography>
                <Typography textAlign="center" my={3} px={1}>
                    <span
                        dangerouslySetInnerHTML={{
                            __html: currQuestion.question,
                        }}
                    ></span>
                </Typography>
                {randNum === 1 ? (
                    <>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={checkAnswer}
                            id="correct"
                            disabled={clicked}
                            style={{ 
                                backgroundColor: clicked ? "lightgreen" : ""
                            }}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.correct_answer,
                                }}
                            ></span>
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ 
                                marginTop: "1rem", 
                                backgroundColor: clicked ? "red" : ""
                            }}
                            onClick={checkAnswer}
                            id="wrong"            
                            disabled={clicked}               
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.incorrect_answers[0],
                                }}
                            ></span>
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ 
                                marginTop: "1rem", 
                                backgroundColor: clicked ? "red" : ""
                            }}
                            onClick={checkAnswer}
                            id="wrong"
                            disabled={clicked}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.incorrect_answers[1],
                                }}
                            ></span>
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ 
                                marginTop: "1rem", 
                                backgroundColor: clicked ? "red" : ""
                            }}
                            onClick={checkAnswer}
                            id="wrong"
                            disabled={clicked}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.incorrect_answers[2],
                                }}
                            ></span>
                        </Button>
                    </>
                ) : randNum === 2 ? (
                    <>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={checkAnswer}
                            style={{ 
                                marginTop: "1rem", 
                                backgroundColor: clicked ? "red" : ""
                            }}
                            id="wrong"
                            disabled={clicked}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.incorrect_answers[0],
                                }}
                            ></span>
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ 
                                marginTop: "1rem", 
                                backgroundColor: clicked ? "lightgreen" : ""
                            }}
                            onClick={checkAnswer}
                            id="correct"
                            disabled={clicked}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.correct_answer,
                                }}
                            ></span>{" "}
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ 
                                marginTop: "1rem", 
                                backgroundColor: clicked ? "red" : ""
                            }}
                            onClick={checkAnswer}
                            id="wrong"
                            disabled={clicked}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.incorrect_answers[1],
                                }}
                            ></span>
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ 
                                marginTop: "1rem", 
                                backgroundColor: clicked ? "red" : ""
                            }}
                            onClick={checkAnswer}
                            id="wrong"
                            disabled={clicked}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.incorrect_answers[2],
                                }}
                            ></span>
                        </Button>
                    </>
                ) : randNum === 3 ? (
                    <>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={checkAnswer}
                            style={{ 
                                backgroundColor: clicked ? "red" : ""
                            }}
                            id="wrong"
                            disabled={clicked}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.incorrect_answers[0],
                                }}
                            ></span>
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ 
                                marginTop: "1rem", 
                                backgroundColor: clicked ? "red" : ""
                            }}
                            onClick={checkAnswer}
                            id="wrong"
                            disabled={clicked}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.incorrect_answers[1],
                                }}
                            ></span>{" "}
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ 
                                marginTop: "1rem", 
                                backgroundColor: clicked ? "lightgreen" : ""
                            }}
                            onClick={checkAnswer}
                            id="correct"
                            disabled={clicked}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.correct_answer,
                                }}
                            ></span>{" "}
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ 
                                marginTop: "1rem", 
                                backgroundColor: clicked ? "red" : ""
                            }}
                            onClick={checkAnswer}
                            id="wrong"
                            disabled={clicked}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.incorrect_answers[2],
                                }}
                            ></span>
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={checkAnswer}
                            id="wrong"
                            disabled={clicked}
                            style={{ 
                                backgroundColor: clicked ? "red" : ""
                            }}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.incorrect_answers[0],
                                }}
                            ></span>
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ 
                                marginTop: "1rem", 
                                backgroundColor: clicked ? "red" : ""
                            }}
                            onClick={checkAnswer}
                            id="wrong"
                            disabled={clicked}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.incorrect_answers[1],
                                }}
                            ></span>{" "}
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ 
                                marginTop: "1rem", 
                                backgroundColor: clicked ? "red" : ""
                            }}
                            onClick={checkAnswer}
                            id="wrong"
                            disabled={clicked}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.incorrect_answers[2],
                                }}
                            ></span>{" "}
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ 
                                marginTop: "1rem", 
                                backgroundColor: clicked ? "lightgreen" : ""
                            }}
                            onClick={checkAnswer}
                            id="wrong"
                            disabled={clicked}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: currQuestion.correct_answer,
                                }}
                            ></span>
                        </Button>
                    </>
                )}
            </CardContent>
            <CardActions>
                <Button
                    variant="outlined"
                    disabled={!clicked}
                    onClick={() => {
                        setQuestionNr(questionNr + 1);
                        setCurrQuestion(questions[questionNr]);
                        setClicked(false)
                        setRandNum(Math.floor((Math.random() * 4) + 1))
                    }}
                >
                    Next
                </Button>
            </CardActions>
        </> :
        <Score score={score} darkMode={darkMode}/>
    );
};

export default Question;
