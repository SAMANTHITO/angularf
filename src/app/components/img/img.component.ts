import { Component, Input, OnInit, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges,OnDestroy {
  @Input() img: string ='';
  @Output() loaded = new EventEmitter<string>(); 
  imageDefault = './assets/images/default.png';

  constructor(){
    //before render
    //No async - fetch -- once times
    console.log('constructor', 'imgValue =>', this.img);
  }
  ngOnInit(): void {
    //before render
    //async - fetch -- once times
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterfn = window.setInterval(() =>{
    //   this.counter +=1;
    //   console.log('run counter');
    // },1000)
  }
  ngOnChanges(){
    //before -during render
    //change inputs
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnDestroy() {
    //delete 
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterfn);
  }
  imgError(){
    this.img = this.imageDefault;
  }
  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
