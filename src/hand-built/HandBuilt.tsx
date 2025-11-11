import React, { useCallback, useState } from 'react';
import useScoreCounter from '../score-counter/ScoreCounter';

enum GridValue {
    'X' = 'X',
    'O' = 'O',
    'Empty' = ''
}
const initialValue = [
    [GridValue.Empty, GridValue.Empty, GridValue.Empty],
    [GridValue.Empty, GridValue.Empty, GridValue.Empty],
    [GridValue.Empty, GridValue.Empty, GridValue.Empty] 
 ]
/**
 * The `HandBuilt` component represents a simple Tic Tac Toe game.
 * It maintains the state of the game grid and the current player's symbol.
 * 
 * State:
 * - `playerSymbol`: The current player's symbol, either `GridValue.X` or `GridValue.O`.
 * - `grid`: A 2D array representing the game grid, initialized with `initialValue`.
 * 
 * Functions:
 * - `updateGrid(x: number, y: number)`: Updates the grid at the specified coordinates with the current player's symbol.
 * - `processTurn(x: number, y: number)`: Processes a player's turn by updating the grid and switching the player symbol.
 * - `reset()`: Resets the game grid to its initial state.
 * 
 * The component renders a title, a reset button, and a table representing the game grid.
 * Each cell in the grid is a button that, when clicked, triggers the `processTurn` function if the cell is empty.
 */
function HandBuilt() {
    const [playerSymbol, setPlayerSymbol] = useState<GridValue.X | GridValue.O>(GridValue.X)
    const [grid, setGrid] = useState<GridValue[][]>(initialValue)
    const { ScoreCounter, updateScore } = useScoreCounter()

    /**
     * Updates the grid at the specified coordinates with the current player's symbol.
     *
     * @param x - The x-coordinate (column index) of the cell to update.
     * @param y - The y-coordinate (row index) of the cell to update.
     */
    function updateGrid(x: number, y: number) {
        const newGrid: GridValue[][] = []
        for (let y = 0; y < grid.length; y++){
            newGrid[y] = [...grid[y]]
        }
        newGrid[y][x] = playerSymbol;
        setGrid(newGrid)
    }
    function processTurn(x: number, y: number){
        updateGrid(x, y);
        setPlayerSymbol(playerSymbol === GridValue.X ? GridValue.O : GridValue.X)
    }
    function reset(){
        setGrid(initialValue)
        updateScore(playerSymbol === GridValue.X ? "playerX" : "playerY", 1)
    }
    return (
        <>
            <div>
                <h2>Tic Tac Toe</h2>
                <p>Welcome to the game!</p>
                <ScoreCounter/>
                <button onClick={reset}>Reset</button>
            </div>
            <table className='border-neutral-950 border-2'>
                <tbody>
                    {grid.map((row, yIndex) => 
                        <tr key={yIndex}>
                            {row.map((columnValue, xIndex) => 
                                <td key={xIndex}>
                                    <button disabled={columnValue !== GridValue.Empty} onClick={() => processTurn(xIndex, yIndex)} className='w-8 h-8 p-1 border border-black text-gray-800 font-bold bg-white hover:bg-gray-200 transition-colors'>
                                        {columnValue}
                                    </button>
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default HandBuilt;