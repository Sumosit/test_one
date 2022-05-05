import { Injectable } from "@angular/core";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { environment } from "@environment/environment";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  langChange = new BehaviorSubject<LangChangeEvent>({lang: environment.defaultLang, translations: []});

  constructor(private translate: TranslateService) {
    let curLang$ = environment.defaultLang;
    const curLang = localStorage.getItem('curLangMoment');
    if (curLang) curLang$ = curLang;
    this.changeLanguage(curLang$);

    this.translate.onLangChange.subscribe(res => {
      this.langChange.next(res);
    });
  }

  getLangChange() {
    return this.langChange;
  }

  changeLanguage(lang: string) {
    localStorage.setItem('curLangMoment', lang);
    this.translate.use(lang);
    if (lang === 'kz') lang = 'kk';
    if (lang === 'en') lang = 'en-gb';
  }

  transformLang(lang: string) {
    return 'RU';
  }

}
