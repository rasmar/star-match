import React from 'react';
import MathHelper from '../helpers/MathHelper'

const useGameState = () => {
  const [stars, setStars] = React.useState(MathHelper.random(1, 9));
  const [availableNums, setAvailableNums] = React.useState(MathHelper.range(1, 9));
  const [candidateNums, setCandidateNums] = React.useState([]);
  const [secondsLeft, setSecondsLeft] = React.useState(10);

  React.useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => { clearTimeout(timerId) };
    }
  });

  const setGameState = (newCandidateNums) => {
    if (MathHelper.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(availableNum => !newCandidateNums.includes(availableNum));
      setStars(MathHelper.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  }

  return { stars, availableNums, candidateNums, secondsLeft, setGameState };
};

export default useGameState;
