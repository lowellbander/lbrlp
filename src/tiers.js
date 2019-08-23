// @flow

export type Tier = 'Tier 1'| 'Tier 2' | 'Tier 3' | 'PT';

export function getTiers(): $ReadOnlyArray<Tier> {
    return ['Tier 1', 'Tier 2', 'Tier 3', 'PT'];
}