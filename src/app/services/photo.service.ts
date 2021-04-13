import { Injectable } from '@angular/core';

import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
         CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public Jalur:string="";
  public dataFoto:any;
  constructor() { }
  public async tambahGalerry() {
	  
	   const capturedPhoto = await Camera.getPhoto({
	    resultType:  CameraResultType.Uri,
	    source: CameraSource.Camera, 
	    quality: 100 
	  });
	  console.log(capturedPhoto)
	  var name=new Date().getTime()+".jpeg"
	  this.Jalur=capturedPhoto.webPath
	  const response = await fetch(capturedPhoto.webPath)
	  const blob = await response.blob()
	  this.dataFoto=new File([blob],name,{
	  	type:"image/jpeg"
	  })
	  console.log(blob)
	  console.log(this.Jalur)
	  return this.Jalur

  }

}


export interface Photo {
  filepath: string;
  webviewPath: string;
}