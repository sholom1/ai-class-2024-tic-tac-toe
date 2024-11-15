import React, { useCallback, useState } from 'react';

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
function HandBuilt() {
    const [playerSymbol, setPlayerSymbol] = useState<GridValue.X | GridValue.O>(GridValue.X)
    const [grid, setGrid] = useState<GridValue[][]>(initialValue)
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
    }
    return (
        <>
            <div>
                <h2>Tic Tac Toe</h2>
                <p>Welcome to the game!</p>
                <button onClick={reset}>Reset</button>
            </div>
            <table className='border-neutral-950 border-2'>
                <tbody>
                    {grid.map((row, yIndex) => 
                        <tr key={yIndex}>
                            {row.map((columnValue, xIndex) => 
                                <td key={xIndex}>
                                    <button disabled={columnValue !== GridValue.Empty} onClick={() => processTurn(xIndex, yIndex)} className='w-8 h-8 p-1'>
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