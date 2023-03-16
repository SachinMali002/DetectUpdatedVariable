import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  fruits: string[] = ['Apple', 'Orange', 'Banana']
  constructor(private loader : LoaderService) { }

  ngOnInit(): void {
  
    this.fruits.forEach(el => {
      if (el == 'Orange')
        this.loader.getloaderData(false);
    });
  }
}
