import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  getTranslation(lang: string): Observable<Translation> {
    if (!isPlatformServer(this.platformId)) {

      // In browser client context, request via HttpClient
      return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
    }

    // In server context (SSR/Prerendering), we read the files directly from the workspace filesystem
    try {
      const fs = require('node:fs');
      const path = require('node:path');
      // Resolving from current working dir (usually workspace root)
      const fileDir = path.resolve(process.cwd(), 'public/assets/i18n');
      const fileContent = fs.readFileSync(path.join(fileDir, `${lang}.json`), 'utf8');
      return of(JSON.parse(fileContent));
    } catch (err) {
      console.error(`TranslocoServerLoader failed to read file locally for lang: ${lang}`, err);
      return of({});
    }
  }
}


