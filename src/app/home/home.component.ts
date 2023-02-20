import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Product } from '../shared/models/Product';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products:Product[]=[];
  
  
  constructor(private ps:ProductService, private route:ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) =>{
      if (params['searchItem'])
      this.products=this.ps.getAll().filter(product =>product.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      else if(params['tag'])
      this.products=this.ps.getAllProductByTag(params['tag']);
      else
      this.products=this.ps.getAll();
    })
      
  }

}
