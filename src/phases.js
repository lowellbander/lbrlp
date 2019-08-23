// @flow

import type {Volume} from './types.js'
import type {Tier} from './tiers.js'

export type Phase = {[Tier]: Volume};

const phase1: Phase = {
   'Tier 1': {
        sets: 3,
        reps: 6,
        intensity: 0.8,
   },
   'Tier 2': {
        sets: 5,
        reps: 8,
        intensity: 0.75,
   },
   'Tier 3': {
        sets: 3,
        reps: 15,
        intensity: 0.65,
   },
   'PT': {
        sets: 4,
        reps: 8,
        intensity: 0.65,
   }
};

export function getPhases(): $ReadOnlyArray<Phase> {
    return [phase1, phase1, phase1, phase1];
}
