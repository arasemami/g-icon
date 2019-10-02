import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'google-icon',
  templateUrl: './google-icon.component.html',
  styleUrls: ['./google-icon.component.css']
})
export class GoogleIconComponent implements OnInit {
  @Input() name: string;
  @Input() class      ?: string;

  constructor() {
  }

  ngOnInit() {
    if (!this.name) {
      throw new Error('Missing "name" property for G Icon component');
    }
  }

}
