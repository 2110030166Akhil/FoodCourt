import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { inject, Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
@Injectable(
{
    providedIn:'root'
}
)
export class DataService 
{
  

    private data: string="https://api.isthara.com/foodcourt/user/ist/getHomedata/cf15e6e0-327f-11ee-96eb-0ae944680890"
    http = inject(HttpClient);

    fetchDetails() : Observable<any>{

        return this.http.get<any>(this.data);

    }
}