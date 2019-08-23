// @flow
import React from 'react';
import type {Phase} from './phases.js';
import type {Workout} from './workouts.js';
const {getTiers} = require('./tiers.js');
const {Exercise} = require('./Exercise.js');
const {TotalVolume} = require('./TotalVolume.js');

export function WorkoutCard({workout, phase}: {workout: Workout, phase: Phase}): React$Node {
    const exercises = getTiers().map(
        t => workout[t].map(
            l => <Exercise key={l} lift={l} volume={phase[t]} />
        )
    );
    return (
        <div className='card'>
            {exercises}
            <b>Total Volume: {<TotalVolume workout={workout} phase={phase}/>} lbs</b>
        </div>
    );
}
