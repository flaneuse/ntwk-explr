import { Component, OnInit } from '@angular/core';
import { Node, Link } from './classes/';

@Component({
  selector: 'app-circle-packing',
  templateUrl: './circle-packing.component.html',
  styleUrls: ['./circle-packing.component.scss']
})
export class CirclePackingComponent {
  private dims: any = { 'width': 450, 'height': 350 };
  private margins: any = { top: 25, bottom: 25, left: 75, right: 25 };

  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    const N = 50,
          getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }
  }

}
