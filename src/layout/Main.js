import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import data from "./components/data";
import Card from "./components/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    paddingLeft: "0.5rem",
    marginTop: "1rem",
  },
  sidebar: {
    marginLeft: "1rem",
    marginTop: "1rem",
    textAlign: "center",
  },
}));

const Main = () => {
  const classes = useStyles();
  const cards = data;
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    shuffleArray(cards);
  });
  //if doesn't include id, then add to array, ELSE reset
  const handleGame = (e) => {
    if (!clickedCards.includes(e.target.closest(".MuiPaper-root").id)) {
      setClickedCards((prevClickedCards) => [
        ...prevClickedCards,
        e.target.closest(".MuiPaper-root").id,
      ]);
      setCurrentScore(clickedCards.length + 1);
      if (currentScore >= highScore) {
        setHighScore(currentScore + 1);
        if (currentScore === 17) {
          alert("You won! You have a great memory! Well done!");
          setCurrentScore(0);
          setClickedCards([]);
        }
      }
    } else {
      alert("Better luck next time");
      setCurrentScore(0);
      setClickedCards([]);
    }
    // setClickedCards((prevClickedCards) => [
    //   ...prevClickedCards,
    //   e.target.closest(".MuiPaper-root").id,
    // ]);
    // console.log(clickedCards);
    // setCurrentScore(clickedCards.length + 1);
    // console.log(currentScore);
    // if (currentScore >= highScore) {
    //   setHighScore(currentScore + 1);
    // }
    // console.log(highScore);
  };

  //STACKOVERFLOW community is the best
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const renderOutCards = () => {
    const pog = cards.map((image) => (
      <Card
        id={image.id}
        src={image.src}
        text={image.text}
        onClick={(e) => handleGame(e)}
      />
    ));
    return pog;
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          container
          xs={12}
          sm={12}
          md={10}
          lg={10}
          className={classes.paper}
          spacing={5}
        >
          {renderOutCards()}
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} className={classes.sidebar}>
          <Typography variant="subtitle1" gutterBottom>
            This is game which tests your memory. Click on Icons but be carefull
            to not click on same Icons! If you do so the game will restart!
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Max score: 18
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            High score: {highScore}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Current score: {currentScore}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
