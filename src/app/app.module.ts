import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { PhotosResolver } from './photo/photos.resolve'
import { ShowPhotos } from './photo/showphotos.component'
import { RouterModule, ROUTES, Routes } from '@angular/router'
import { DisplayPhotos } from './photo/display-photos.service'
import { PhotoDetails } from './photo-details/photo-details.component'
import { PhotoDetailResolver } from './photo-details/one-photo.resolve'
import { UploadPhoto } from './upload-photo/upload-photo.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { NgxSpinnerModule } from 'ngx-spinner'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoThumbnail } from './photo-thumbnail/photo-thumbnail.component'
import { Error404Component } from './error/404.component'
import { EventRouteActivator } from './photo-details/photo-details-activator.service'



const routes: Routes = [
  {
    path:'addnew',
    component: UploadPhoto
  },
    {
      path: "photos",
      component: ShowPhotos,
      resolve: {
    photos: PhotosResolver
      } }
    ,
    {
      path: "",
      redirectTo: "photos",
      pathMatch: "full"
    }, 
    {
      path:"photos/:id",
      component:  PhotoDetails, 
      canActivate: [EventRouteActivator],
      resolve: {
        photo: PhotoDetailResolver
      }
    }, {
        path:'404',
        component: Error404Component
      }
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    ShowPhotos,
    PhotoDetails,
    UploadPhoto,
    PhotoThumbnail,
    Error404Component
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)],
  providers: [ PhotosResolver, DisplayPhotos, PhotoDetailResolver, EventRouteActivator],
  bootstrap: [AppComponent]
})

export class AppModule { }
