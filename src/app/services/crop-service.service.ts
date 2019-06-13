import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CropServiceService {

  public blob: Blob;
  public base64: string;

  constructor() { }
}
