import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { PhotoService } from '../services/photo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(afs: AngularFirestore) {
    this.VData = afs.collection('dataNotes');
    this.isiData = this.VData.valueChanges();
  }

  isiData : Observable<data[]>;
  VData : AngularFirestoreCollection<data>;
 //Variabel Penampung
 Datajdl : string
 Dataisi : string
 Datatgl : string
 Datanilai : string

 //Variabel kiriman
 Judul : string
 isi : string
 tgl : string
 nilai : string

 BSubmit()
 {
   this.Datajdl = this.Judul
   this.Dataisi = this.isi
   this.Datatgl= this.tgl
   this.Datanilai = this.nilai
 }

 upload(){
  this.VData.doc(this.Judul). set({
    judul : this.Judul,
    isi : this.isi,
    tanggal : this.tgl,
    nilai : this.nilai
    })
  }

}
interface data{
  judul : string,
  isi : string,
  tanggal: string,
  nilai: string
}
