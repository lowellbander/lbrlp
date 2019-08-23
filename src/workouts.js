// @flow

import type {Lift} from './types.js'
import type {Tier} from './tiers.js'

export type Workout = {[Tier]: $ReadOnlyArray<Lift>};

const workoutA: Workout = {
    'Tier 1': ['Squat'],
    'Tier 2': ['Bench', 'Pull Ups'],
    'Tier 3': ['Dumbell Overhead Press'],
    'PT': ['Internal Shoulder Rotation'],
};

const workoutB: Workout = {
    'Tier 1': ['Overhead Press'],
    'Tier 2': ['Deadlift', 'Row'],
    'Tier 3': ['Lateral Raise'],
    'PT': ['External Shoulder Rotation'],
};

const workoutC: Workout = {
    'Tier 1': ['Bench'],
    'Tier 2': ['Squat', 'Pull Ups'],
    'Tier 3': ['Dumbell Overhead Press'],
    'PT': ['Internal Shoulder Rotation'],
};

const workoutD: Workout = {
    'Tier 1': ['Deadlift'],
    'Tier 2': ['Overhead Press', 'Row'],
    'Tier 3': ['Lateral Raise'],
    'PT': ['External Shoulder Rotation'],
};

export function getWorkouts(): $ReadOnlyArray<Workout> {
    return [workoutA, workoutB, workoutC, workoutD];
}
