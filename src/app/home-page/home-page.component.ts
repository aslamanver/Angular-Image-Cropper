import { Component, OnInit, OnChanges } from '@angular/core';
import { CropServiceService } from '../services/crop-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  imageShow: HTMLImageElement

  constructor(public cropService: CropServiceService) { }

  ngOnInit() {

    // this.imageShow = <HTMLImageElement>document.getElementById("image-show")

    // if (this.cropService.blob) {
    //   this.imageShow.src = URL.createObjectURL(this.cropService.blob)
    // } else {
    //   this.imageShow.src = 'http://placehold.it/400x400'
    // }
  }
}
