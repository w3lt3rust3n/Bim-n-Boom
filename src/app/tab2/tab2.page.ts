import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
// import { Map, tileLayer, marker } from 'leaflet';
// import { NativeGeocoder, NativeGeocoderOptions } from "@ionic-native/native-geocoder/ngx";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  // map:Map;
  // newMarker:any;
  // adress:string[];
 // constructor( private router:Router, private geocoder:NativeGeocoder ) {}
  constructor() {}
  // ionViewDidEnter() {
  //   this.loadMap();
  // }

  // loadMap() {
  //   this.map = new Map("mapId").setView([17.3850, 78.4867], 13);
  //   tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   }).addTo(this.map);
  // }

  // getAdress(lat:number, long:number) {
  //   let options:NativeGeocoderOptions={
  //     useLocale:true,
  //     maxResults:5
  //   };
  //   this.geocoder.reverseGeocode(lat,long,options).then(
  //     results => {this.adress = Object.values(results[0]).reverse();}
  //     );
  // }

  // locatePosition() {
  //   this.map.locate({setView:true}).on("locationfound", (e:any)=>{
  //     this.newMarker = marker([e.latitude,e.longitude], {
  //       draggable:true }).addTo(this.map);
  //       this.newMarker.bindPopup("Vous êtes ici !").openPopup();
  //       this.newMarker.on("dragend", () => {
  //         const position = this.newMarker.getLatLag();
  //       });
  //     });
  //   }

}
