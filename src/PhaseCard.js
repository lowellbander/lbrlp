// @flow
import React from 'react';
import type {Phase} from './phases.js';

export function PhaseCard({phase}: {phase: Phase}): React$Node {
    return <div className="card">{JSON.stringify(phase)}</div>;
}
