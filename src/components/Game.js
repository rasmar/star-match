import React from 'react';
import MathHelper from '../helpers/MathHelper'
import PlayNumber from './PlayNumber'
import PlayAgain from './PlayAgain'
import StarsDisplay from './StarsDisplay'
import useGameState from '../hooks/useGameState'

const Game = (props) => {
  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  } = useGameState();

  const candidatesAreWrong = () => {
    return MathHelper.sum(candidateNums) > stars
  };
  const gameStatus = availableNums.length === 0
    ? 'won'
    : secondsLeft === 0 ? 'lost' : 'active'

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong() ? 'wrong' : 'candidate';
    }
    return 'available';
  }

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus === 'used' ) { return }

    const newCandidateNums =
      currentStatus === 'available'
        ? [...candidateNums, number]
        : candidateNums.filter(candidateNum => candidateNum !== number);

    setGameState(newCandidateNums);
  }

  const resetGame = () => {
    props.startNewGame();
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          { gameStatus !== 'active' ?(
            <PlayAgain onClick={resetGame} gameStatus={gameStatus}/>
           ) : (
            <StarsDisplay count={stars} />
           )}
        </div>
        <div className="right">
          { MathHelper.range(1, 9).map(number =>
            <PlayNumber
              key={number}
              status={numberStatus(number)}
              number={number}
              numberClick={onNumberClick}
            />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  )
}

export default Game;
