import { NgbDropdown, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    LanguageSelectorComponent,
    ContentComponent,
    OrderbyPipe,
    PreviewVideoComponent
  ],
  entryComponents: [PreviewVideoComponent],
  imports: [
    BrowserModule,
    NgbModule,
    ModalModule,
    TranslateModule.forRoot(),
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbDropdownModule,
    HttpClientJsonpModule,
    NgxPaginationModule,
    RouterModule.forRoot([])
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
