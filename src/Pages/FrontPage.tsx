import {
    CardContent,
    Button,
    CardActions,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    SelectChangeEvent,
} from "@mui/material";

interface Props {
    darkMode: boolean;
    getQuestions(): void;
    difficulty: string;
    setDifficulty: any
}

const FrontPage = ({ darkMode, getQuestions, difficulty, setDifficulty}: Props) => {
    return (
        <>
            <CardContent
                style={{
                    color: !darkMode ? "purple" : "white",
                    display: "flex",
                    flexDirection: "column",
                    flex: "80%",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    fontSize: "250%",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    paddingBottom: "0",
                }}
            >
                <div>Quiz Application</div>
            </CardContent>
            <CardActions style={{ flex: "20%", width: "80%", flexDirection: "column", paddingBottom: "1.5rem"}}>
                <FormControl style={{alignSelf: "flex-start"}} fullWidth>
                    <InputLabel>Difficulty</InputLabel>
                    <Select 
                        label="Difficulty"
                        value={difficulty}
                        onChange={(e: SelectChangeEvent) => setDifficulty(e.target.value)}
                    >
                        <MenuItem value={"easy"}>Easy</MenuItem>
                        <MenuItem value={"medium"}>Medium</MenuItem>
                        <MenuItem value={"hard"}>Hard</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    onClick={getQuestions}
                    style={{marginTop: "1rem" }}
                >
                    Start
                </Button>
            </CardActions>
        </>
    );
};

export default FrontPage;
