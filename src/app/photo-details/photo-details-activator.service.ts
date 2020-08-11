import { Router, ActivatedRoute, CanActivate, ActivatedRouteSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { DisplayPhotos } from '../photo/display-photos.service'

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private displayPhoto: DisplayPhotos, private router: Router){

    }

    canActivate (router: ActivatedRouteSnapshot){
        const existingPhoto=!!this.displayPhoto.get(router.params['id'])

        if(existingPhoto)
        this.router.navigate(['404'])
        return existingPhoto
    }
}