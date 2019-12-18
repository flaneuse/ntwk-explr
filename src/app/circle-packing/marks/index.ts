export * from './nodes/nodes.component';
export * from './links/links.component';

import { NodesComponent } from './nodes/nodes.component';
import { LinksComponent } from './links/links.component';

export const SHARED_VISUALS = [
    NodesComponent,
    LinksComponent
];
