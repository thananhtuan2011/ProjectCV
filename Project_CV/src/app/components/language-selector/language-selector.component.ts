import { TranslationService } from './../../i18n/translation.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface LanguageFlag {
  lang: string;
  name: string;
  flag: string;
  active?: boolean;
}

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  language: LanguageFlag;
  languages: LanguageFlag[] = [
    {
      lang: 'vi',
      name: 'Vietnamese',
      flag: './assets/media/svg/flags/220-vietnam.svg',
    },
    {
      lang: 'en',
      name: 'English',
      flag: './assets/media/svg/flags/226-united-states.svg',
    },

  ];
  constructor(
    private translationService: TranslationService,
    private router: Router, private el: ElementRef
  ) { }

  ngOnInit() {
    this.setSelectedLanguage();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        this.setSelectedLanguage();
      });
  }

  setLanguageWithRefresh(lang) {
    this.setLanguage(lang);
    window.location.reload();
  }

  setLanguage(lang) {
    this.languages.forEach((language: LanguageFlag) => {
      if (language.lang === lang) {
        language.active = true;
        this.language = language;
      } else {
        language.active = false;
      }
    });
    this.translationService.setLanguage(lang);
    (<DOMTokenList>this.el.nativeElement.classList).remove('m-dropdown--open');

  }

  // setSelectedLanguage(): any {
  //   this.setLanguage(this.translationService.getSelectedLanguage());
  // }
  setSelectedLanguage(): any {
    this.translationService.getSelectedLanguage().subscribe(lang => {
      if (lang) {
        setTimeout(() => {
          this.setLanguage(lang);
        });
      }
    });
  }
}
