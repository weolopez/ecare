import {Component, Input} from 'angular2/core';

@Component({
  selector: 'weo-iframe',
  templateUrl: 'build/components/iframe/iframe.html'
})
export class Iframe {
  //@Input('winwidth') winwidth: string='768px';
  @Input('url') url: string;
 //  url: string="http://localhost:8100/?article=1500001197";
  constructor() {
  }
}
