import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  Photopath:String=""
  constructor(public photoService: PhotoService,private afStorage: AngularFireStorage) {}
  async upload()
  {
  	  
  	  await this.afStorage.upload(new Date().getTime()+".jpeg", this.photoService.dataFoto);
  	  console.log('Berhasil diupload')
  	  alert("Sukses");
  }
  async tambahfoto() {
	  this.Photopath=await this.photoService.tambahGalerry();
  }
}
