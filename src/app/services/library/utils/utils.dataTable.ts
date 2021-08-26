declare var $: any;
function ApplySizePaginateButton(selectorDataTable:string): void {
  $(
    `${selectorDataTable} .paginate_button.page-item.previous > a`
  )[0].style.textAlign = 'center';
  $(
    `${selectorDataTable} .paginate_button.page-item.previous > a`
  )[0].style.minWidth = '80px';
  $(
    `${selectorDataTable} .paginate_button.page-item.previous > a`
  )[0].style.minHeight = '40px';

  $(
    `${selectorDataTable} .paginate_button.page-item.next > a`
  )[0].style.textAlign = 'center';
  $(
    `${selectorDataTable} .paginate_button.page-item.next > a`
  )[0].style.minWidth = '80px';
  $(
    `${selectorDataTable} .paginate_button.page-item.next > a`
  )[0].style.minHeight = '40px';

  $(
    `${selectorDataTable} .paginate_button.page-item.active> a`
  )[0] && ($(`${selectorDataTable} .paginate_button.page-item.active> a`)[0].style.minHeight = '40px');
}


function DestroyDataTable(objDataTable:any): void {
  objDataTable && objDataTable.destroy();
}

export{
  DestroyDataTable,
  ApplySizePaginateButton
}
