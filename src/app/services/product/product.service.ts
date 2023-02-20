import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductById(id:number):Product{
    return this.getAll().find(product=> product.id==id)!;
  }

  getAllProductByTag(tag:string):Product[]{

    return tag=="All"? this.getAll() : this.getAll().filter(product=>product.tags?.includes(tag));
  }

    getAllTag():Tag[]{
      return [
        {name: 'All', count:8},
      {name: 'Television', count: 2},
      {name: 'Smartphone', count:5},
      {name: 'Accessories', count:2},
      {name: 'Laptop', count: 6},
      {name: 'Other', count: 1},
      ];
    }

  getAll(): Product[]{
    return[

      //Laptop
      { id: 1,
        name: 'Lenovo IdeaPad 3',
        price: 22499, 
        delivery:'7-8',
        favorite: true,
        origins: ['lenovo'],
        stars: 4.5,
        imageUrl: 'assets/Lenovo IdeaPad 3.jpg',
        tags: ['Laptop', 'Office', 'Personal'],
      },
      { id: 2,
        name: 'Lenovo V15 ',
        price: 33999,
        delivery:'7-8',
        favorite: true,
        origins: ['Lenovo'],
        stars: 3.5,
        imageUrl: 'assets/Lenovo V15.jpg',
        tags: ['laptop', 'Office', 'Personal'],
      },
      { id: 3,
        name: 'Lenovo Legion 5pro',
        price: 128999,
        delivery:'4-5',
        favorite: true,
        origins: ['Lenovo'],
        stars: 4.8,
        imageUrl: 'assets/Lenovo Legion 5pro.jpg',
        tags: ['Laptop','Business', 'Personal', 'Gaming'],
      },
      { id: 4,
        name: 'Lenovo ThinkPad X1',
        price: 245999,
        delivery:'8-9',
        favorite: true,
        origins: ['Lenovo'],
        stars: 4.9,
        imageUrl: 'assets/Lenovo ThinkPad X1.avif',
        tags: ['Laptop','Business', 'Personal', 'Gaming'],
      },
      { id: 11,
        name: 'Acer Aspire 5 gaming',
        price: 57999, 
        delivery:'7-8',
        favorite: true,
        origins: ['Acer'],
        stars: 3.5,
        imageUrl: 'assets/Acer Aspire 5 gaming.jpg',
        tags: ['Laptop','Office', 'Personal', 'Gaming'],
      },
      { id: 12,
        name: 'Acer Nitro 5',
        price: 195999,
        delivery:'5-6',
        favorite: true,
        origins: ['Acer'],
        stars: 4.8,
        imageUrl: 'assets/Acer Nitro 5.jpg',
        tags: ['laptop','Office', 'Business', 'Personal', 'Gaming'],
      },
      { id: 13,
        name: 'Acer Predator Helios',
        price: 177999,
        delivery:'4-5',
        favorite: true,
        origins: ['Acer'],
        stars: 4.8,
        imageUrl: 'assets/Acer Predator Helios.jpg',
        tags: ['Laptop','Office', 'Business', 'Personal', 'Gaming'],
      },
      { id: 14,
        name: 'Acer Chromebook Spin',
        price: 28999,
        delivery:'8-9',
        favorite: true,
        origins: ['Acer'],
        stars: 4.9,
        imageUrl: 'assets/Acer Chromebook Spin.jpg',
        tags: ['Laptop','Office', 'Personal'],
      },
      { id: 21,
        name: 'ASUS TUF Gaming A15',
        price: 67999, 
        delivery:'7-8',
        favorite: true,
        origins: ['ASUS'],
        stars: 4.3,
        imageUrl: 'assets/ASUS TUF Gaming A15.jpg',
        tags: ['Laptop','Office', 'Personal', 'Gaming'],
      },
      { id: 22,
        name: 'ASUS Vivobook Pro 16 ',
        price: 86999,
        delivery:'7-8',
        favorite: true,
        origins: ['ASUS'],
        stars: 3.5,
        imageUrl: 'assets/ASUS Vivobook Pro 16.jpg',
        tags: ['laptop','Office', 'Personal', 'Gaming'],
      },
      { id: 23,
        name: 'ASUS ROG Zephyrus Duo',
        price: 391999,
        delivery:'4-5',
        favorite: true,
        origins: ['ASUS'],
        stars: 3.5,
        imageUrl: 'assets/ASUS ROG Zephyrus Duo.jpg',
        tags: ['Laptop', 'Business', 'Office', 'Personal', 'Gaming'],
      },
      { id: 24,
        name: 'ASUS ROG Strix Scar 15',
        price: 229990,
        delivery:'8-9',
        favorite: true,
        origins: ['ASUS'],
        stars: 5.0,
        imageUrl: 'assets/ASUS ROG Strix Scar 15.jpg',
        tags: ['Laptop','Business','Office', 'Personal', 'Gaming'],
      },
      { id: 25,
        name: 'ASUS ROG Flow Z13',
        price: 114999,
        delivery:'15-20',
        favorite: false,
        origins: ['ASUS'],
        stars: 4.8,
        imageUrl: 'assets/ASUS ROG Flow Z13.jpg',
        tags: ['Laptop','Business','Office', 'Personal', 'Gaming'],
      },
      { id: 31,
        name: 'HP EliteBook 830 G5',
        price: 29499, 
        delivery:'7-8',
        favorite: true,
        origins: ['HP'],
        stars: 4.5,
        imageUrl: 'assets/HP EliteBook 830 G5.jpg',
        tags: ['Laptop','Office', 'Personal'],
      },
      { id: 32,
        name: 'HP Omen',
        price: 300999,
        delivery:'7-8',
        favorite: true,
        origins: ['HP'],
        stars: 3.5,
        imageUrl: 'assets/HP Omen.jpg',
        tags: ['laptop','Business','Office', 'Personal', 'Gaming'],
      },
      { id: 33,
        name: 'HP Spectre',
        price: 174999,
        delivery:'4-5',
        favorite: true,
        origins: ['HP'],
        stars: 3.0,
        imageUrl: 'assets/HP Spectre.jpg',
        tags: ['Laptop','Business','Office', 'Personal', 'Gaming'],
      },
      { id: 41,
        name: 'Dell Alienware x15',
        price: 405741, 
        delivery:'4-6',
        favorite: true,
        origins: ['Dell'],
        stars: 3.3,
        imageUrl: 'assets/Dell Alienware x15.jpg',
        tags: ['Laptop','Business','Office', 'Personal', 'Gaming'],
      },
      { id: 42,
        name: 'Dell XPS',
        price: 385999,
        delivery:'6-8',
        favorite: true,
        origins: ['Dell'],
        stars: 3.5,
        imageUrl: 'assets/Dell XPS.jpg',
        tags: ['laptop','Business','Office', 'Personal', 'Gaming'],
      },
      { id: 43,
        name: 'Dell Inspiron',
        price: 57999,
        delivery:'4-5',
        favorite: true,
        origins: ['Dell'],
        stars: 4.8,
        imageUrl: 'assets/Dell Inspiron.jpg',
        tags: ['Laptop','Office', 'Personal'],
      },
      { id: 44,
        name: 'Dell Vostro',
        price: 43490,
        delivery:'2-4',
        favorite: true,
        origins: ['Dell'],
        stars: 4.2,
        imageUrl: 'assets/Dell Vostro.jpg',
        tags: ['Laptop','Office', 'Personal'],
      },
      { id: 51,
        name: 'MSI Katana GF76',
        price: 74999,
        delivery:'8-10',
        favorite: true,
        origins: ['MSI'],
        stars: 4.1,
        imageUrl: 'assets/MSI Katana GF76.jpg',
        tags: ['Laptop','Business','Office', 'Personal', 'Gaming'],
      },
      { id: 52,
        name: 'MSI Vector GP66',
        price: 126990,
        delivery:'6-8',
        favorite: true,
        origins: ['MSI'],
        stars: 4.4,
        imageUrl: 'assets/MSI Vector GP66.jpg',
        tags: ['Laptop','Business','Office', 'Personal', 'Gaming'],
      },
      { id: 53,
        name: 'MSI Gaming Crosshair 15',
        price: 110999,
        delivery:'3-5',
        favorite: true,
        origins: ['MSI'],
        stars: 4.2,
        imageUrl: 'assets/MSI Gaming Crosshair 15.jpg',
        tags: ['Laptop','Business','Office', 'Personal', 'Gaming'],
      },
      { id: 54,
        name: 'MSI Gaming Sword',
        price: 83500,
        delivery:'8-10',
        favorite: true,
        origins: ['MSI'],
        stars: 4.1,
        imageUrl: 'assets/MSI Gaming Sword.jpg',
        tags: ['Laptop','Business','Office', 'Personal', 'Gaming'],
      },
      { id: 55,
        name: 'MSI Pulse GL66',
        price: 119999,
        delivery:'7-9',
        favorite: true,
        origins: ['MSI'],
        stars: 4.1,
        imageUrl: 'assets/MSI Pulse GL66.jpg',
        tags: ['Laptop','Business','Office', 'Personal', 'Gaming'],
      },
      

//Smartphones
      {
        id: 6,
        name: 'Xiaomi 12 Pro',
        price: 55999, 
        delivery:'4-6',
        favorite: true,
        origins: ['MI'],
        stars: 4.5,
        imageUrl: 'assets/Xiaomi 12 Pro.jpg',
        tags: ['Smarphone', 'Photography','Gaming'],
      },
      { id: 7,
        name: 'Xiaomi 11i',
        price: 24999,
        delivery:'7-8',
        favorite: true,
        origins: ['MI'],
        stars: 3.5,
        imageUrl: 'assets/Xiaomi 11i.jpg',
        tags: ['Smartphone','Photography'],
      },
      { id: 8,
        name: 'Xiaomi 11T Pro',
        price: 53999,
        delivery:'4-5',
        favorite: true,
        origins: ['MI'],
        stars: 4.2,
        imageUrl: 'assets/Xiaomi 11T Pro.jpg',
        tags: ['Smartphone','Photography','Gaming'],
      },
      { id: 9,
        name: 'Mi 11X Pro 5G',
        price: 39999,
        delivery:'8-9',
        favorite: true,
        origins: ['MI'],
        stars: 4.0,
        imageUrl: 'assets/Mi 11X Pro 5G.jpg',
        tags: ['Smartphone','Photography'],
      },
      { id: 10,
        name: 'Redmi K20 Pro',
        price: 31999, 
        delivery:'7-8',
        favorite: true,
        origins: ['MI'],
        stars: 4.5,
        imageUrl: 'assets/Redmi K20 Pro.jpg',
        tags: ['Smartphone','Photography'],
      },
      { id: 16,
        name: 'Samsung Galaxy Z Fold',
        price: 164999,
        delivery:'5-6',
        favorite: true,
        origins: ['Samsung'],
        stars: 2.9,
        imageUrl: 'assets/Samsung Galaxy Z Fold.jpg',
        tags: ['Smartphone','Photography','Gaming'],
      },
      { id: 17,
        name: 'Samsung Galaxy S22 ultra',
        price: 119990,
        delivery:'4-5',
        favorite: true,
        origins: ['Samsung'],
        stars: 4.1,
        imageUrl: 'assets/Samsung Galaxy S22 ultra.jpg',
        tags: ['Smartphone','Photography'],
      },
      { id: 18,
        name: 'Samsung Galaxy Note 20 Ultra',
        price: 104999,
        delivery:'8-9',
        favorite: true,
        origins: ['Samsung'],
        stars: 4.5,
        imageUrl: 'assets/Samsung Galaxy Note 20 Ultra.jpg',
        tags: ['Smartphone','Photography'],
      },
      { id: 19,
        name: 'Samsung Galaxy Z Flip4',
        price: 94999, 
        delivery:'7-8',
        favorite: true,
        origins: ['Samsung'],
        stars: 3.6,
        imageUrl: 'assets/Samsung Galaxy Z Flip4.jpg',
        tags: ['Smartphone','Photography'],
      },
      { id: 20,
        name: 'Samsung Galaxy F23',
        price: 15999,
        delivery:'7-8',
        favorite: true,
        origins: ['Samsung'],
        stars: 4.3,
        imageUrl: 'assets/Samsung Galaxy F23.jpg',
        tags: ['Smartphone','Photography'],
      },
      { id: 26,
        name: 'Apple Iphone 11',
        price: 46999,
        delivery:'2-4',
        favorite: true,
        origins: ['Apple'],
        stars: 4.6,
        imageUrl: 'assets/Apple Iphone 11.jpg',
        tags: ['Smartphone','Photography', 'Performance'],
      },
      { id: 27,
        name: 'Apple Iphone 14',
        price: 71999,
        delivery:'3-5',
        favorite: true,
        origins: ['Apple'],
        stars: 4.7,
        imageUrl: 'assets/Iphone14.jpg',
        tags: ['Smartphone','Photography', 'Performance'],
      },
      { id: 28,
        name: 'Apple Iphone 12',
        price: 56999,
        delivery:'2-5',
        favorite: true,
        origins: ['Apple'],
        stars: 4.6,
        imageUrl: 'assets/Iphone14.jpg',
        tags: ['Smartphone','Photography', 'Performance'],
      },
      { id: 29,
        name: 'Apple Iphone 14Plus',
        price: 80999,
        delivery:'1-2',
        favorite: true,
        origins: ['Apple'],
        stars: 4.7,
        imageUrl: 'assets/Iphone14.jpg',
        tags: ['Smartphone','Photography', 'Performance'],
      },
      { id: 30,
        name: 'Apple Iphone 14 Pro Max',
        price: 143999,
        delivery:'1-2',
        favorite: true,
        origins: ['Apple'],
        stars: 4.7,
        imageUrl: 'assets/Apple Iphone 14 Pro Max.jpg',
        tags: ['Smartphone','Photography', 'Performance'],
      },
      { id: 36,
        name: 'Motorola G30',
        price: 10999,
        delivery:'4-5',
        favorite: true,
        origins: ['Motorola'],
        stars: 4.1,
        imageUrl: 'assets/Motorola G30.jpg',
        tags: ['SmartPhone'],
      },
      { id: 37,
        name: 'Motorola G71',
        price: 16999,
        delivery:'2-5',
        favorite: true,
        origins: ['Motorola'],
        stars: 4.1,
        imageUrl: 'assets/Motorola G71.jpg',
        tags: ['SmartPhone'],
      },
      { id: 38,
        name: 'Motorola G8',
        price: 16999,
        delivery:'2-5',
        favorite: true,
        origins: ['Motorola'],
        stars: 4.3,
        imageUrl: 'assets/Motorola G8.jpg',
        tags: ['SmartPhone'],
      },
      { id: 39,
        name: 'Realme GT 2 Pro',
        price: 57999,
        delivery:'3-5',
        favorite: true,
        origins: ['Realme'],
        stars: 4.8,
        imageUrl: 'assets/Realme GT 2 Pro.jpg',
        tags: ['Smartphone', 'Photography'],
      },
      { id: 40,
        name: 'Realme X50 Pro',
        price: 41999,
        delivery:'3-5',
        favorite: true,
        origins: ['Realme'],
        stars: 4.4,
        imageUrl: 'assets/Realme X50 Pro.jpg',
        tags: ['Smartphone', 'Photography'],
      },
      { id: 46,
        name: 'Realme GT Neo 3',
        price: 36999,
        delivery:'8-10',
        favorite: true,
        origins: ['Realme'],
        stars: 4.1,
        imageUrl: 'assets/Realme GT Neo 3.jpg',
        tags: ['Smartphone'],
      },


      //Television
      { id: 111,
        name: 'Samsung 58"',
        price: 48999,
        delivery:'3-5',
        favorite: true,
        origins: ['Samsung'],
        stars: 4.2,
        imageUrl: 'assets/Samsung 58.jpg',
        tags: ['Television', 'Desktop', 'HomeAppliance'],
      },
      { id: 121,
        name: 'Samsung Neo QLED 55"',
        price: 139999,
        delivery:'3-5',
        favorite: true,
        origins: ['Samsung'],
        stars: 4.2,
        imageUrl: 'assets/Samsung 55.jpg',
        tags: ['Television', 'Desktop', 'HomeAppliance'],
      },
      { id: 112,
        name: 'Sony 55"',
        price: 70999,
        delivery:'8-10',
        favorite: true,
        origins: ['Sony'],
        stars: 4.6,
        imageUrl: 'assets/Sony Bravia 55.jpg',
        tags: ['Television', 'Desktop', 'HomeAppliance'],
      },
      { id: 113,
        name: 'Sony Bravia 43"',
        price: 40840,
        delivery:'7-9',
        favorite: true,
        origins: ['Sony'],
        stars: 4.9,
        imageUrl: 'assets/sony Bravia 43.jpg',
        tags: ['Television', 'Desktop', 'HomeAppliance'],
      },
      { id: 114,
        name: 'Sony X85K Series 55"',
        price: 90240,
        delivery:'7-9',
        favorite: true,
        origins: ['Sony'],
        stars: 4,
        imageUrl: 'assets/Sony Bravia 55.jpg',
        tags: ['Television', 'Desktop', 'HomeAppliance'],
      },
      { id: 115,
        name: 'Sony Bravia 32"',
        price: 26990,
        delivery:'7-9',
        favorite: true,
        origins: ['Sony'],
        stars: 4.9,
        imageUrl: 'assets/Sony Bravia 32.jpg',
        tags: ['Television', 'Desktop', 'HomeAppliance'],
      },


    ];
  }
}