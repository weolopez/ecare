import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {IphonePage} from './pages/iphone/iphone';
import {URL} from './pages/url/url';
import {VideoPage} from './pages/video/video';
import {eCarePage2} from './pages/ecare2/ecare';


@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class Application {
  // make HelloIonicPage the root (or first) page
  location = document.location;
  rootPage: any;
  pages: Array<{title: string, component: any}>;

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController
  ) {
    var application = this;
    
    application.initializeApp();

    // set our app's pages
    application.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'iPhone', component: IphonePage },
      { title: 'URL', component: URL },
      { title: 'Video', component: VideoPage }
    ];
    if (document.location.search.length > 1)
      if (document.location.search.indexOf('article') > 0)
        application.rootPage = eCarePage2;
      else 
        application.rootPage = VideoPage;
    else
     application.rootPage = URL ;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
