import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {

  http = inject(HttpClient);

  async translate(text: string): Promise<string> {
    if(text == null ||text.trim() === '') {
      return text; // Retorna o texto original se estiver vazio ou apenas espaços
    }
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.slice(0, 499))}&langpair=en|pt`;
    const response = await fetch(url);

    if (response.status === 429) {
      console.warn("Limite de requisições atingido na API de tradução (Status 429).");
      return text;
    }

    // Se não for 429, continua normalmente
    const data = await response.json();

    return data.responseData.translatedText;
  }
}
