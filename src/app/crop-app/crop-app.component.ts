import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CropServiceService } from '../services/crop-service.service';
import Cropper from 'cropperjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crop-app',
  templateUrl: './crop-app.component.html',
  styleUrls: ['./crop-app.component.scss']
})
export class CropAppComponent implements OnInit, OnChanges {

  cropper: Cropper
  fileChooser: HTMLElement
  image: HTMLImageElement

  constructor(public cropService: CropServiceService, private router: Router) { }

  ngOnInit() {

    this.image = <HTMLImageElement>document.getElementById('image-crop')
    this.fileChooser = <HTMLElement>document.getElementById("image-crop-file-chooser")
    this.setCropperImage()
  }

  ngOnChanges() {
    alert('ngOnChanges')
  }

  setCropperImage() {

    this.cropper = new Cropper(this.image, {
      aspectRatio: 4 / 3,
      viewMode: 1,
      dragMode: <any>'move',
      checkCrossOrigin: false,
      responsive: true,
      cropBoxMovable: false,
      crop(event) {
        console.log(event.detail.x)
        console.log(event.detail.y)
        console.log(event.detail.width)
        console.log(event.detail.height)
        console.log(event.detail.rotate)
        console.log(event.detail.scaleX)
        console.log(event.detail.scaleY)
      },
    })
  }

  onChoose() {
    console.log("onChoose")
    this.fileChooser.click()
  }

  onChange(files: FileList) {

    let imageFile: File = files.item(0)
    this.image.src = URL.createObjectURL(imageFile)

    this.cropper.destroy()
    this.setCropperImage()
  }

  onUpload() {
    console.log("onUpload")

    this.cropper.crop()

    this.cropService.base64 = this.cropper.getCroppedCanvas().toDataURL()
    
    this.cropper.getCroppedCanvas().toBlob((blob) => {
      this.cropService.blob = blob
      this.router.navigate(['/'])
    })
    
  }

}
