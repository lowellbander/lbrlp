// @flow
import React from 'react';
import type {Phase} from './phases.js';
const {getWorkouts} = require('./workouts.js');
const {WorkoutCard} = require('./WorkoutCard.js');

export function PhaseCard({phase, name}: {phase: Phase, name: string}): React$Node {
    return (
        <div className="card">
            <p>{name}</p>
            {getWorkouts().map((w, i) => <WorkoutCard key={i} workout={w} phase={phase} />)}
        </div>
    );
}
