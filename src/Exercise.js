// @flow

import React from 'react';
import type {Lift, Volume} from './types.js'
const {getOneRepMax} = require('./oneRepMaxes.js');
const {getExerciseVolume, numberWithCommas} = require('./TotalVolume.js');

export function Exercise({lift, volume}: {lift: Lift, volume: Volume}): React$Node {
    return (
        <p>
            <b>{lift}</b>: {volume.sets} x {volume.reps} @ {formatPercent(volume.intensity)} 1RM
            {' '}
            ({formatPercent(volume.intensity)} * {getOneRepMax(lift)} lbs = {Math.round(volume.intensity * getOneRepMax(lift))} lbs)
            {' '}
            Volume = {numberWithCommas(getExerciseVolume(lift, volume))} lbs
        </p>)
    ;
}

function formatPercent(decimal: number): string {
    return decimal*100 + '%';
}
