import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('github-user-search App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('TestCase 1|Clicking on view details should open the popup|5', () => {
    page.navigateTo('/upcoming');
    //console.log("1111111111111111"+page.get_popupElement().getText());
  browser.sleep(2000);   
    page.click_upcoming();
     browser.sleep(8000);
     page.click_ViewDetails();
 browser.sleep(3000);
 //console.log("@@@@@@@@"+page.get_popupElement().getText());
    expect(page.get_popupElement().isPresent()).toBeTruthy();
  });

  it('TestCase 2|It should launch the AutoComplete|5',()=>{
        
        page.navigateTo('/');
        browser.sleep(4000);
        page.getSearchkeyword1();
        browser.sleep(2000);
        page.clearSearchkeyword1();
        
        page.getSearchKeyword2();
        browser.sleep(1000);
        page.clearSearchkeyword1();
        page.getSearchkeyword3();
        browser.sleep(1000);
        page.clearSearchkeyword1();

        page.getMovieinfo_enterKeyword();
        browser.sleep(2000);
    
           expect(page.getMatElement().isPresent()).toBeTruthy();
    


  });

});
