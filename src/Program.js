// @flow
import React from 'react';
const {getPhases} = require('./phases.js');
const {Phase} = require('./Phase.js');

export function Program(): React$Node {
    const phases = getPhases();
    console.log({phases})
    return <span>{phases.map(p => <Phase />)}</span>;
}
