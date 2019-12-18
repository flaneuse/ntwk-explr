import { Component, Input, ChangeDetectorRef, HostListener, ChangeDetectionStrategy, OnInit, AfterViewInit } from '@angular/core';
import { D3Service } from '../../behaviors/d3.service';
import { Node, ForceDirectedGraph } from '../../classes/';

@Component({
  selector: 'app-force-graph',
  templateUrl: './force-graph.component.html',
  styleUrls: ['./force-graph.component.scss'],
  providers: [ D3Service ]
})
export class ForceGraphComponent {

  @Input('nodes') nodes;
  @Input('links') links;

  graph: ForceDirectedGraph;
    private _options: { width, height } = { width: 800, height: 600 };

  constructor(private d3Svc: D3Service) { }

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = this.d3Svc.getForceDirectedGraph(this.nodes, this.links, this.options);
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }



  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

}
