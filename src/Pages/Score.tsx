import { Button, CardActions, CardContent } from "@mui/material";

interface Props {
    score: number; 
    darkMode: boolean
}

const Score = ({ score, darkMode }: Props) => {
    return (
        <>
            <CardContent
                style={{
                    color: !darkMode ? "purple" : "white",
                    display: "flex",
                    flex: "80%",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    fontSize: "250%",
                    padding: "2rem",
                }}
            >
                Your Score: {score}
            </CardContent>
            <CardActions style={{ flex: "20%", width: "80%" }}>
                <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    onClick={() => window.location.reload()}
                >
                    Play Again
                </Button>
            </CardActions>
        </>
    );
};

export default Score;
