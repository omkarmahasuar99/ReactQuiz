import Button from "@mui/material/Button";
export default function LandingPage({ onStart }) {
  return (
    <div>
      <h1>Quiz not started yet</h1>
      <Button onClick={onStart} variant="contained">
        Start Quiz
      </Button>
    </div>
  );
}
