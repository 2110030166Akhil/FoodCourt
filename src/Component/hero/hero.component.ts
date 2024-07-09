import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.services';
import { HttpClient } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent 
{
   menu: any[]=[
    {name:"Bevarages",imgstr:"https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/180129c1695477008026Mask%20group%20%289%29.png",clr:"red"},
    {name:"Continental",imgstr:"https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/391869c1695476685208Mask%20group%20%287%29.png",clr:"blue"},
    {name:"Chinese",imgstr:"https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/312941c1695476749107Mask%20group%20%281%29.png",clr:"green"},
    {name:"Thai",imgstr:"https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/312941c1695476749107Mask%20group%20%281%29.png",clr:"yellow"},
    {name:"Bakers",imgstr:"https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/822321c1695476952817Mask%20group%20%288%29.png",clr:"green"},
    {name:"North-Indian",imgstr:"https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/847739c1695476889752Mask%20group%20%285%29.png",clr:"red"},
    {name:"South-Indian",imgstr:"https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/271985c1695476977747Mask%20group%20%2810%29.png",clr:"yellow"},
    {name:"Other",imgstr:"https://istharaprod.blob.core.windows.net/isthara-prod/master-food-items/893100c1695476822383Mask%20group%20%2812%29.png",clr:"pink"}
   ]


   quick: any[]=[
    {img:"https://isthara.com/assets/common/item-empty-icon.svg",pn:"Soda",rn:"Goli Soda",pr:"20"},
    {img:"https://isthara.com/assets/common/item-empty-icon.svg",pn:"French Fries",rn:"Mc Donalds",pr:"69"},
    {img:"https://isthara.com/assets/common/item-empty-icon.svg",pn:"Burger",rn:"Burger King",pr:"89"},
    {img:"https://isthara.com/assets/common/item-empty-icon.svg",pn:"Pizza",rn:"Dominos",pr:"109"},
    {img:"https://isthara.com/assets/common/item-empty-icon.svg",pn:"Sandwich",rn:"KS Bakery",pr:"89"},
    {img:"https://isthara.com/assets/common/item-empty-icon.svg",pn:"Pizza",rn:"Dominos",pr:"109"},
    {img:"https://isthara.com/assets/common/item-empty-icon.svg",pn:"Sandwich",rn:"KS Bakery",pr:"89"},
   ]

   buclr: string="#c5305";


   rest: any[]=[
    {rimg:4.3,bimg:"https://istharaprod.blob.core.windows.net/isthara-prod/food-court/Group%201707480633.png?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D",rname:"Isthara",cui:["Beverages"]},
    {rimg:5.0,bimg:"https://istharaprod.blob.core.windows.net/isthara-prod/food-court/five%20star.png?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D",rname:"Five Star",cui:["Bakers","Confectioners","South Indian"]},
    {rimg:4.4,bimg:"https://istharaprod.blob.core.windows.net/isthara-prod/food-court/The%20shawarma%20co%20logo.jpg?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D",rname:"The Shawarma Company",cui:["Continental","North Indian"]},
    {rimg:2.5,bimg:"https://istharaprod.blob.core.windows.net/isthara-prod/food-court/srh.jpg?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D",rname:"SRH",cui:["South Indian","Other"]},
    {rimg:4.3,bimg:"https://istharaprod.blob.core.windows.net/isthara-prod/food-court/yummpys.png?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D",rname:"Yummy's",cui:["Shawarma","Rolls"]},
    {rimg:3.5,bimg:"https://istharaprod.blob.core.windows.net/isthara-prod/food-court/WhatsApp%20Image%202023-12-22%20at%2012.54.43%20PM.jpeg?sp=racwl&st=2023-10-19T16:19:45Z&se=2030-12-05T00:19:45Z&sv=2022-11-02&sr=c&sig=Azu6X1u54tQLTVF1cRVWnhdzy9%2FFyr%2FklPGhaQCNHdY%3D",rname:"GMB Restaurent",cui:["Biryani","Naans"]},
    {rimg:2.5,bimg:"https://isthara.com/assets/common/item-empty-icon.svg",rname:"Seasonal Fruit Juice",cui:["Juice","Shakes"]},
   ]

    data = inject(DataService);
    dataftch : any;

      DataStorer()  {
      this.data.fetchDetails().subscribe(
       (res:any)=>
       {
          this.dataftch=res;
          console.log(res);
       }
      )
    }
}
