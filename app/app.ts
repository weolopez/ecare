import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {IphonePage} from './pages/iphone/iphone';
import {eCarePage2} from './pages/ecare2/ecare';
import {ListPage} from './pages/list/list';


@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class eCare {
  // make HelloIonicPage the root (or first) page
  location = document.location;
  rootPage: any;
  pages: Array<{title: string, component: any}>;

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController
  ) {
    var ecare = this;
    
    ecare.initializeApp();

    // set our app's pages
    ecare.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'iPhone', component: IphonePage },
      { title: 'My First List', component: ListPage }
    ];
    if (document.location.search.length > 1)
     ecare.rootPage = eCarePage2;
    else
     ecare.rootPage = IphonePage;
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
