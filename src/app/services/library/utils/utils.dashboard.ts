import { UtilsRouter } from './utils.routes';
import * as $ from "jquery";
class UtilsDashboard {
  static SideBarDropdownActiveConfig(): void {
    $('.sidebar-dropdown > a').click(function (e) {
      $('.sidebar-submenu').slideUp(200);
      if ($(this).parent().hasClass('active')) {
        e.preventDefault();
        $('.sidebar-dropdown').removeClass('active');
      } else {
        e.preventDefault();
        $('.sidebar-dropdown').removeClass('active');
        $(this).next('.sidebar-submenu').slideDown(200);
        $(this).parent().addClass('active');
      }
    });
  }

  static SideBarPureActiveConfig(): void {
    $('.sidebar-pure > a').click(function (e) {
      if(!!$(this).attr("href")=== false) return
      UtilsDashboard.ResetOptions();
      UtilsDashboard.ResetOptionsSidebarDropdown();
      $(this).css(UtilsDashboard.GetColorActive());
    });
  }

  static SideBarPureChildActiveConfig(): void {
    $('.sidebar-submenu-option').click(function (e) {
      if(!!$(this).attr("href")=== false) return
      UtilsDashboard.ResetOptions();
      $(this).closest('.active').find('i').css(UtilsDashboard.GetColorActive());
      $(this).css(UtilsDashboard.GetColorActive());
    });
  }
  static GetColorActive(): any {
    return {
      color: '#16c7ff',
      'text-shadow': '0px 0px 10px rgba(22, 199, 255, 0.5)',
    };
  }

  static ResetOptions(): void {
    $('.sidebar-pure > a').css(UtilsDashboard.ResetColorActive());
    $('.sidebar-dropdown:not(.sidebar-dropdown.active)').find("i").css(UtilsDashboard.ResetColorActive());
    $('.sidebar-submenu-option').css(UtilsDashboard.ResetColorActive());
  }

  static ResetOptionsSidebarDropdown(): void {
    $('.sidebar-submenu').slideUp(200);
    $('.sidebar-dropdown').removeClass('active');
    $('.sidebar-dropdown >a >i').css(UtilsDashboard.ResetColorActive());
  }

  static ResetColorActive(): any {
    return { color: '#818896', 'text-shadow': 'none' };
  }

  static ToggledSideBarConfig(): void {
    $('#close-sidebar').click(function () {
      $('.page-wrapper').removeClass('toggled');
    });
    $('#show-sidebar').click(function (e) {
      e.preventDefault();
      $('.page-wrapper').addClass('toggled');
    });
  }

  static ApplySideBarConfig(url:string): void {
    UtilsDashboard.SideBarPureActiveConfig();
    UtilsDashboard.SideBarPureChildActiveConfig();
    UtilsDashboard.SideBarDropdownActiveConfig();
    UtilsDashboard.ToggledSideBarConfig();
    UtilsDashboard.PaintOptionsByRoute(url);
  }

  static PaintOptionsByRoute(routerUrl:string): void {
    const objMapRoute:any = {
      [UtilsRouter.Home]:["#linkHome"],
      [UtilsRouter.PokedexList]:["#linkPokedex"],
    }
    Array.isArray(objMapRoute[routerUrl]) && objMapRoute[routerUrl].length === 1 ?
    $(objMapRoute[routerUrl][0]).css(UtilsDashboard.GetColorActive()):
    UtilsDashboard.ReloadMultiplePaint(objMapRoute[routerUrl][0],objMapRoute[routerUrl][1])

  }

  static SetTitlePage(title: string): void {
    $('.titleModule').text(title);
  }

  static ReloadMultiplePaint(
    selectorChild: string,
    selectorParent: string
  ): void {
    $(selectorChild).css(UtilsDashboard.GetColorActive());
    $(selectorParent).find('i').css(UtilsDashboard.GetColorActive());
    $(selectorParent).next('.sidebar-submenu').slideDown(200);
    $(selectorParent).parent().addClass('active');
  }

  static getMMDDYYYY(date) {
    var today = new Date(date);
    var d = today.getDate();
    var m = today.getMonth() + 1;
    var yyyy = today.getFullYear().toString();
    var dd ="";
    var mm = "";

    if (d < 10)
        dd = '0' + d.toString()
    else
      dd = d.toString()
      
    if (m < 10)
        mm = '0' + m
    else
      mm = m.toString()
    return mm + '/' + dd + '/' + yyyy;
  }

  
  static CurrencyFormatter(currency, sign): any {
    var sansDec = currency.toFixed(2);
    var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return sign + `${formatted}`;
  }

}
export {
  UtilsDashboard
}

