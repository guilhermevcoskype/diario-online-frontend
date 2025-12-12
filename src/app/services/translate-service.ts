import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {

  http = inject(HttpClient);

  translate(text: string): Promise<string> {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.slice(0,499))}&langpair=en|pt`;
    return fetch(url)
    .then(res => res.json())
    .then(data => data.responseData.translatedText);
  }
}
