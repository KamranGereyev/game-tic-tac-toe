import React, {useState} from 'react';
import Board from '../Board/Board';
import "./game.css";
import {calculateWinner} from "../../helper"

const Game = () => {
    const [board,setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const [numberWin, setNumberWin] = useState(0)

    const handleClick = (index) => {
        const boardCopy = [...board]

        if(winner || boardCopy[index]) return

        boardCopy[index] = xIsNext ? "X" : "0"

        setBoard(boardCopy)
        setXIsNext(!xIsNext)    
    }

    const startNewGame = () => {
        return (
            <button 
                className="start_btn" 
                onClick={() => setBoard(Array(9).fill(null))}
            >
                Очистить поле
            </button>
        )
    }

    return (
        <div className="wrapper">
            {startNewGame()}
            <Board squares={board} click={handleClick}/>
            <p className="game_info">
                { winner ? "Победитель " + winner : "Сейчас ходит " + ( xIsNext ? 'X' : '0')}
            </p>
        </div>
    );
}

export default Game;
