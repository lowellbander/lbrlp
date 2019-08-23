// @flow

import type {Tier} from './tiers.js';

export type Volume = {
    sets: number,
    reps: number,
    intensity: number,
    // isAmrap: boolean,
};

export type Lift = 
    | 'Squat' 
    | 'Overhead Press'
    | 'Pull Ups'
    | 'Dumbell Overhead Press'
    | 'Deadlift'
    | 'Bench'
    | 'Row'
    | 'Lateral Raise'
    | 'Internal Shoulder Rotation'
    | 'External Shoulder Rotation';

type Workout = {[Tier]: $ReadOnlyArray<Lift>};
