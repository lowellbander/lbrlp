// @flow
import React from 'react';
const {getPhases} = require('./phases.js');
const {PhaseCard} = require('./PhaseCard.js');

export function Program(): React$Node {
    const phases = getPhases();
    return phases.map((p, i) => <PhaseCard phase={p} name={`Phase ${i + 1}`} key={i}/>);
}
