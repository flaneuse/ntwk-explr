import { Component, Input } from '@angular/core';
import { Link } from '../../classes/link';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {

  @Input('app-links') link: Link;

}
