import { Component } from '@angular/core';
import { TranslationService } from './i18n/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { locale as enLang } from './i18n/vocabs/en';
import { locale as viLang } from './i18n/vocabs/vi';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translationService: TranslationService,
    private translate: TranslateService,
  ) {

    // // register translations
    this.translationService.loadTranslations(
      viLang,
      enLang,

    );
    var langcode = localStorage.getItem('language');
    if (langcode == null)
      langcode = this.translate.getDefaultLang();
    this.translationService.setLanguage(langcode);
  }
}
