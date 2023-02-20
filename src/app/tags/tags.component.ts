import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  productPageTags!:string[];
  @Input()
  justifyContent:string='center';
  tags?:Tag[];
  constructor(private productService:ProductService) {
    this.tags = productService.getAllTag();
   }

  ngOnInit(): void {
    if(!this.productPageTags)
    this.tags=this.productService.getAllTag();
  }

}
