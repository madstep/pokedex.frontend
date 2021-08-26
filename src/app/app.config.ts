import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
@Injectable()
export class AppConfig {
  public readonly apiUrl = environment.backendapi;

  public static get CAPTCHA_KEY(): string {
    return '6Lc4sn8UAAAAAD1V604HezdXnlLTz2n4-dhKLjpm';
  }

  public static get ITEMS_POR_PAGINA(): number {
    return 5;
  }

  public static get URL_API(): string {
    return environment.backendapi;
  }

  public static get PATH_PDF_FILES(): string {
    return environment.domainurl + '/assets/files';
  }

  public static get CUSTOM_MAIL_DOMAIN(): any {
    let customDomainBase = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+(';
    let customDomain = '.arpa|';
    customDomain = `${customDomain}.edu|`;
    customDomain = `${customDomain}.biz|`;
    customDomain = `${customDomain}.gov|`;
    customDomain = `${customDomain}.com|`;
    customDomain = `${customDomain}.jobs|`;
    customDomain = `${customDomain}.info|`;
    customDomain = `${customDomain}.mil|`;
    customDomain = `${customDomain}.intww|`;
    customDomain = `${customDomain}.mobi|`;
    customDomain = `${customDomain}.name|`;
    customDomain = `${customDomain}.online|`;
    customDomain = `${customDomain}.net|`;
    customDomain = `${customDomain}.museum|`;
    customDomain = `${customDomain}.org|`;
    customDomain = `${customDomain}.pro|`;
    customDomain = `${customDomain}.tel|`;
    customDomain = `${customDomain}.aero|`;
    customDomain = `${customDomain}.travel|`;
    customDomain = `${customDomain}.asia|`;
    customDomain = `${customDomain}.pe|`;
    customDomain = `${customDomain}.post|`;
    customDomain = `${customDomain}.cat|`;
    customDomain = `${customDomain}.museumcoop|`;
    customDomain = `${customDomain}.global`;
    customDomainBase = `${customDomainBase}${customDomain}|${customDomain.toUpperCase()})$`;

    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,6})$/;
  }

  
}
