// @flow

import type {Lift} from './types.js'
import type {Tier} from './tiers.js'

export type Workout = {[Tier]: $ReadOnlyArray<Lift>};

const workoutA: Workout = {
    'Tier 1': ['Squat'],
    'Tier 2': ['Bench'],
    'Tier 3': ['Pull Ups', 'Dumbell Overhead Press'],
    'PT': ['Internal Shoulder Rotation'],
};

export function getWorkouts(): $ReadOnlyArray<Workout> {
    return [workoutA, workoutA, workoutA, workoutA];
}
