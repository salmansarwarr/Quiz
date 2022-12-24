import { FC, useState } from "react";
import "./App.css";
import {
    Card,
    ThemeProvider,
    Paper,
    Button,
    createTheme,
    Switch,
    CircularProgress,
    Typography,
} from "@mui/material";
import FrontPage from "./Pages/FrontPage";
import { Brightness4 } from "@mui/icons-material";
import axios from "axios";
import Question from "./Components/Question";
import { Ques } from "./Interfaces";

const App: FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [questions, setQuestions] = useState<Ques[]>([]);
    const [difficulty, setDifficulty] = useState("easy")
    const [startQuiz, setStartQuiz] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const getQuestions = async () => {
        setStartQuiz(true);
        const response: {
            data: {
                results: Ques[];
            };
        } = await axios.get(
            `https://opentdb.com/api.php?amount=10&type=multiple&difficulty=${difficulty}`
        );
        setQuestions(response.data.results);
        setIsLoading(false);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: !darkMode ? "#800080" : "#d500f9",
            },
            mode: darkMode ? "dark" : "light",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Paper
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Card
                        raised
                        style={{
                            minWidth: "220px",
                            maxWidth: "30rem",
                            height: "75%",
                            marginBottom: "2rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontFamily: "sans-serif",
                        }}
                    >
                        {!startQuiz ? (
                            <FrontPage
                                darkMode={darkMode}
                                getQuestions={getQuestions}
                                difficulty={difficulty}
                                setDifficulty={setDifficulty}
                            />
                        ) : isLoading ? (
                            <Typography
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    width: "30rem",
                                    minWidth: "220px",
                                }}
                            >
                                <CircularProgress />
                            </Typography>
                        ) : (
                            <Question questions={questions} darkMode={darkMode}/>
                        )}
                    </Card>
                    <Button variant="contained" color="secondary" size="small">
                        <Switch
                            checked={darkMode}
                            color="default"
                            onClick={() => {
                                setDarkMode(!darkMode);
                            }}
                        />
                        <Brightness4 />
                        Theme
                    </Button>
                </Paper>
            </div>
        </ThemeProvider>
    );
};

export default App;
