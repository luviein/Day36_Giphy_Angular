import { Injectable, inject } from "@angular/core";
import { Gif, GifResponse } from "./Gif";
import { HttpClient, HttpParams } from "@angular/common/http";

const url = "http://localhost:8080/api/gif"

@Injectable()
export class GifService {
  private http = inject(HttpClient)
  registerAsObservable (register : Gif)  {
    const params = new HttpParams().set("q", register.gifName);
    return this.http.get<string[]>(url, {params})

  }
}
