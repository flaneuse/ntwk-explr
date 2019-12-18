import { Component, Input } from '@angular/core';
import { Node } from '../../classes/';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss']
})
export class NodesComponent {

  @Input('app-nodes') node: Node;

}
