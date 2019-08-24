// @flow

import type {Volume} from './types.js'
import type {Tier} from './tiers.js'

export type Phase = {[Tier]: Volume};

const constantTiers = {
   'Tier 3': {
        sets: 3,
        reps: 15,
        intensity: 0.65,
   },
   'PT': {
        sets: 4,
        reps: 8,
        intensity: 0.65,
   },
};

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
   ...constantTiers,
};

const phase2: Phase = {
   'Tier 1': {
        sets: 3,
        reps: 8,
        intensity: 0.75,
   },
   'Tier 2': {
        sets: 5,
        reps: 12,
        intensity: 0.7,
   },
   ...constantTiers,
};

const phase3: Phase = {
   'Tier 1': {
        sets: 3,
        reps: 12,
        intensity: 0.7,
   },
   'Tier 2': {
        sets: 5,
        reps: 15,
        intensity: 0.65,
   },
   ...constantTiers,
};

const phase4: Phase = {
   'Tier 1': {
        sets: 3,
        reps: 4,
        intensity: 0.75,
   },
   'Tier 2': {
        sets: 5,
        reps: 6,
        intensity: 0.7,
   },
   ...constantTiers,
};

export function getPhases(): $ReadOnlyArray<Phase> {
    return [phase1, phase2, phase3, phase4];
}
