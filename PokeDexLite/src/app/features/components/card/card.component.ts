import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
@Input() name:any = "";
@Input() image:any = "";
@Input() lvl:any = "";
@Input() type:any[] = [];

handleMissingImage(){
  this.image = '../../../../assets/whosthat.png'
}

handleMissingtype(){
    this.image = '../../../../assets/types/unknown.png'
  }

  constructor() {}

  ngOnInit(): void {}
}
