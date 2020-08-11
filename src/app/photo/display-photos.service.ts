import { Injectable, OnInit } from "@angular/core";  
import { HttpClient, HttpHeaders} from "@angular/common/http";  
import { Observable, of, InteropObservable } from "rxjs";  
import { delay, catchError } from "rxjs/operators";  
import { photoInfo } from './photo.model'
import { stringify } from '@angular/compiler/src/util';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { BehaviorSubject } from 'rxjs';



@Injectable({
    providedIn: "root"
})

export class DisplayPhotos  implements OnInit{    
  photo1: photoInfo
  public photos: photoInfo[]
  
  constructor(private http: HttpClient, private SpinnerService: NgxSpinnerService) {}  

  ngOnInit(): void {
    this.retrievePhotos();
  }

  /*
  
  getPhotos():Observable<photoInfo[]> {  
    return this.http.get<photoInfo[]>('https://jsonplaceholder.typicode.com/photos')
    .pipe(catchError(this.handleError<photoInfo[]>('getPhotos', [])));  
  }  

  getPhoto(id: number):Observable<photoInfo>{

    return this.http.get<photoInfo>('https://jsonplaceholder.typicode.com/photos/'+id)
    .pipe(catchError(this.handleError<photoInfo>('getPhoto')));  
  
  }

  
  savenewPhoto(newPhoto){
    let options= { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post<newPhotoInfo> ('https://jsonplaceholder.typicode.com/newPhotos', newPhoto, options)
    .pipe(catchError(this.handleError<newPhotoInfo>('savenewPhoto'))); 
  }  


  addPhoto(newPhoto:photoInfo): Observable<photoInfo> {
    const headers = { 'content-type': 'application/json'}  ;
    const body=JSON.stringify(newPhoto);
    console.log(body)
    return this.http.post<photoInfo>('https://jsonplaceholder.typicode.com/photos', body,{'headers':headers})
  } */

  
  getAll(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos')
    .pipe(catchError(this.handleError<photoInfo>('getAll')));
  }

  get(id): Observable<any> {
    return this.http.get<any>(`${'https://jsonplaceholder.typicode.com/photos'}/${id}`)
    .pipe(catchError(this.handleError<photoInfo>('get')))
  }

  
  create(data): Observable<any> {
    return this.http.post<any>('https://jsonplaceholder.typicode.com/photos', data).
    pipe(catchError(this.handleError<photoInfo>('create')));
  }


  
  update(id, data): Observable<any> {
    return this.http.put<any>(`${'https://jsonplaceholder.typicode.com/photos'}/${id}`, data)
    .pipe(catchError(this.handleError<photoInfo>('update')));
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(`${'https://jsonplaceholder.typicode.com/photos'}/${id}`)
    .pipe(catchError(this.handleError<photoInfo>('delete')));
  }



  private handleError<T> (operation= 'operation', result?:T){
    return (error:any ): Observable<T> => {
      console.error(error);
      return of (result as T);
    }
  }


  retrievePhotos(): void {
    this.SpinnerService.show();
    this.getAll()
      .subscribe(
        data => {
          this.photos = data;
          console.log(data);
          this.SpinnerService.hide()
       
        },
        error => {
          console.log(error);
        });
  }

}  
