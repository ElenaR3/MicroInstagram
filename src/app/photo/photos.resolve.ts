import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'
import { photoInfo } from './photo.model'
import { Observable } from 'rxjs'
import { DisplayPhotos } from './display-photos.service'

@Injectable({
    providedIn:'root'
})

export class PhotosResolver implements Resolve<photoInfo[]> {
    constructor (private displayPhotos: DisplayPhotos){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<photoInfo[]>{
        return this.displayPhotos.getAll();
    }
}