import React, { useState, useCallback } from 'react';

interface Score {
    playerX: number;
    playerY: number;
}

const useScoreCounter = () => {
    const [scores, setScores] = useState<Score>({ playerX: 0, playerY: 0 });

    const updateScore = useCallback((player: 'playerX' | 'playerY', points: number) => {
        setScores(prevScores => ({
            ...prevScores,
            [player]: prevScores[player] + points,
        }));
    }, []);

    const ScoreCounter = () => (
        <div>
            <h2>Score Counter</h2>
            <div>
                <p>Player X: {scores.playerX}</p>
                <p>Player Y: {scores.playerY}</p>
            </div>
        </div>
    );

    return { updateScore, ScoreCounter };
};

export default useScoreCounter;
