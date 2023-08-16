import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent{
  @Input() receivedItems: string[] = []

  itemChanged(event: string[]) {
    this.receivedItems = event
    console.info("gif component >>>>>>"+this.receivedItems)

  }


}
