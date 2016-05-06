import {Component, Input, Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Http, Response} from 'angular2/http'

@Injectable()
export class ArticleService {
  article: any;
  
  constructor (private http: Http) {
    var articleservice = this
    articleservice.article = document.location.search.split('=')[1];
    
  }
  private heroesUrl = 'app/heroes';  // URL to web api
  getArticles (): Observable<any> {
    var articleservice = this
    return articleservice.http.get('./interactive_'+articleservice.article+'/video.json')
                    .map(articleservice.extractData)
                    .catch(articleservice.handleError);
  }
  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.text();
    return JSON.parse(body) || { };
  }
  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
