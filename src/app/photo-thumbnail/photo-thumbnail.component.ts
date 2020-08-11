import { Component, Input } from '@angular/core'
import { photoInfo } from '../photo/photo.model'



@Component({

    selector: 'photo-thumbnail',
    templateUrl: './photo-thumbnail.component.html'


})

export class PhotoThumbnail {

    clicked:boolean=false

    @Input ()photo: photoInfo


}