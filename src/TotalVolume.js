// @flow

import type {Workout} from './workouts.js'
import type {Phase} from './phases.js'
import type {Lift, Volume} from './types.js'
const {getOneRepMax} = require('./oneRepMaxes.js');
const {getTiers} = require('./tiers.js');

export function TotalVolume({workout, phase}: {workout: Workout, phase: Phase}): React$Node {
    const totalVolume = getTiers().map(
        t => workout[t].map(
            l => getExerciseVolume(l, phase[t])
        )
    ).reduce(
        (result, curr) => [...result, ...curr],
        [],
    ).reduce((sum, curr) => sum + curr, 0);
    return numberWithCommas(totalVolume);
}

export function getExerciseVolume(lift: Lift, volume: Volume): number {
    return Math.round(volume.sets * volume.reps * volume.intensity * getOneRepMax(lift));
}

export function numberWithCommas(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
