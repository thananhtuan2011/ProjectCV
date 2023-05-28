import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'


import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { OrderbyPipe } from './pipes/orderby/orderby.pipe';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreviewVideoComponent } from './components/preview-video/preview-video.component';
import { ModalModule } from './components/_model';
import { ModalService } from './services/modal.service';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    OrderbyPipe,
    PreviewVideoComponent
  ],
  entryComponents: [PreviewVideoComponent],
  imports: [
    BrowserModule,
    ModalModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgxPaginationModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
