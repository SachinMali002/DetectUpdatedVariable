import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  loaderValue =0;
  constructor(private loader: LoaderService) { }
d=true;
  ngOnInit(): void {

  }

  GetLoader(){
    this.loader.currentMessage.subscribe(e=> {
      this.d = e;
    })
    if(this.d)
      console.log("From Parent",!this.d);
  }
}
