import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'g-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
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
