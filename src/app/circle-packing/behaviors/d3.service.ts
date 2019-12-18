import { Injectable, EventEmitter } from '@angular/core';
import { Node, Link, ForceDirectedGraph } from '../classes/';
import * as d3 from 'd3';

@Injectable()
export class D3Service {

  constructor() { }

  /** The interactable graph we will simulate in this article
* This method does not interact with the document, purely physical calculations with d3
*/
  getForceDirectedGraph(nodes: Node[], links: Link[], options: { width, height }) {
    const sg = new ForceDirectedGraph(nodes, links, options);
    // console.log(sg)
    return sg;
  }

}
