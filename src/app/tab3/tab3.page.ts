import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  list:any=[]
  constructor(private afStorage: AngularFireStorage) {
  	
  	 this.loadImage()
  }

 async loadImage()
 {
 	 //let ref = this.afStorage.ref('').listAll()
 	 //console.log('ref',ref)

 	 //const ref = this.afStorage.ref('1617706481595.jpeg');
     //console.log('xx',ref.getDownloadURL());
     this.afStorage.ref('').listAll().subscribe(data=>{
    	//console.log(data.items)
    	for (var i=0;i<data.items.length;i++)
		{
			console.log(data.items[i].fullPath)
			const ref = this.afStorage.ref(data.items[i].fullPath);
			let ux=ref.getDownloadURL()
			ux.subscribe(data=>{
				// console.log(data)
				this.list.push(data)
			})
		}
	 })
 }

}
