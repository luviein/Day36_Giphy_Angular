import {Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { GifService } from './gif.service';
import { Gif } from './Gif';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'giphy_ng';


  gifForm!: FormGroup
  fb = inject(FormBuilder)
  gifSvc = inject(GifService)
  sub$!: Subscription
  emitItem!: string[]
  @Output() itemChanged : EventEmitter<string[]> = new EventEmitter<string[]>();

  ngOnInit() : void {
    this.gifForm = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      gifName: this.fb.control<string>("", [Validators.required])
    })
  }

  submit() {
    const formData : Gif = this.gifForm.value
    this.sub$ = this.gifSvc.registerAsObservable(formData)
      .subscribe({
        next: result => {
          console.info(result)

          // Puts subscribed data in to string array to link with gif component's input
          this.emitItem = result
          // Extract the array of strings

          console.log("emit >>>>>"+ result)
          // Emit the array of strings
          this.itemChanged.emit(result);
          // console.info("emitted data: " + JSON.stringify(this.itemChanged.toString))
        },
        error: error => {"Failed" + JSON.stringify(error)},
        complete: () => {this.sub$.unsubscribe()}
      })
  }
}
