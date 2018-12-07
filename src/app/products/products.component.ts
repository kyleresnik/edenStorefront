import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Plant } from '../models/plant.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  token: string;
  plant : Plant[];

  constructor(private data: DataService) { }

  ngOnInit() {
      this.data.getPlants().subscribe(data => {
        this.plant = data
        console.log(this.plant)
      })
  }  

  getPlants():void{
    this.data.getPlants()
    .subscribe(Plant => this.plant = Plant)
    console.log(this.plant)
  }

  deletePlant(id){
    if (sessionStorage.getItem('currentUser') !== null || undefined){
      this.data.deletePlant(id).subscribe((res: any) => {console.log(res); this.getPlants()})
    }
    else {
      alert('Cannot delete item.')
    }
  }

}
