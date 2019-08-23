// @flow

import type {Lift} from './types.js'

const oneRepMaxes : {[Lift]: number} = {
    'Squat': 68,
    'Overhead Press': 56,
    'Pull Ups': 0, 
    'Dumbell Overhead Press': 25, 
    'Deadlift': 96,
    'Bench': 68,
    'Row': 106,
    'Lateral Raise': 13,
    'Internal Shoulder Rotation': 25,
    'External Shoulder Rotation': 25,
};

export function getOneRepMax(lift: Lift): number {
    return oneRepMaxes[lift];
}