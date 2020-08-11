import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { PhotoDetails } from '../photo-details/photo-details.component'
import { DisplayPhotos} from '../photo/display-photos.service'
import { photoInfo } from '../photo/photo.model'

@Injectable({
    providedIn:'root'
})
export class PhotoDetailResolver implements Resolve<photoInfo> {
    constructor (private displayPhotos: DisplayPhotos){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<photoInfo>{
        return this.displayPhotos.get(route.params['id']);
    }
}