class Navigation {

  private pathname = '';

  private mainPath = '/';
  private searchPath = '/search';
  private basketPath = '/basket';


  // Метод получения текущего пути
  public getPathname() {
    return this.pathname;
  }

  // Метод установки текущего пути
  public setPathname(pathname: string) { 
    this.pathname = pathname;
  }

  public getCurrentNavigationPage(pathname: string) {
    const newPathname = `/${pathname}`;

    this.pathname = newPathname;
    return newPathname;
  }

  // Метод для получения начального пути
  public getMainPath() {
    return this.getCurrentNavigationPage(this.mainPath);
  }

  // Метод для получения пути поиска
  public getSearchPath() {
    return this.getCurrentNavigationPage(this.searchPath);
  }

  // Метод для получения пути корзины
  public getBasketPath() {
    return this.getCurrentNavigationPage(this.basketPath);
  }
}

export const navigation = new Navigation();
export type NavigationType = typeof navigation;
