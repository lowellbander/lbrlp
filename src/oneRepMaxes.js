// @flow

import type {Lift} from './types.js'

const oneRepMaxes : {[Lift]: number} = {
    'Squat': 90,
    'Overhead Press': 60,
    'Pull Ups': 0, 
    'Dumbell Overhead Press': 25, 
    'Deadlift': 188,
    'Bench': 115,
    'Row': 125,
    'Lateral Raise': 21,
    'Internal Shoulder Rotation': 20,
    'External Shoulder Rotation': 20,
};

export function getOneRepMax(lift: Lift): number {
    return oneRepMaxes[lift];
}