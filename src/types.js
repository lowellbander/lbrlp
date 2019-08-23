// @flow

export type Tier = 'Tier 1'| 'Tier 2' | 'Tier 3' | 'PT';
export type Volume = {
    sets: number,
    reps: number,
    intensity: number,
    // isAmrap: boolean,
};
type Lift = 'Squat' | 'Overhead Press' | 'Pull Ups' | 'Dumbell Overhead Press' | 'Deadlift' | 'Bench' | 'Row' | 'Lateral Raise' | 'Internal Shoulder Rotation' | 'External Shoulder Rotation';
type Workout = {[Tier]: $ReadOnlyArray<Lift>};
