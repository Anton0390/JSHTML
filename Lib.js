function tableCreate(thead, tbody, replaceChild) {
  if (!thead) thead = ['test', 'test']
  if (!tbody) thead = [
    ['test', 'test'],
    ['test', 'test']
  ]
  let body = document.getElementsByTagName('body')[0];
  let tbl = document.createElement('table');

  let tbdy = document.createElement('tbody');
  let tbhd = document.createElement('thead');
  let tr = document.createElement('tr');

  //header

  thead.forEach(cell => {
    let th = document.createElement('th');

    th.appendChild(document.createTextNode(cell))
    tr.appendChild(th)
    tbhd.appendChild(tr);
  })
  tbl.appendChild(tbhd);

  //tbody 

  tbody.forEach(row => {
    let tr = document.createElement('tr');
    row.forEach(cell => {
      let td = document.createElement('td');
      td.appendChild(document.createTextNode(cell))
      tr.appendChild(td)
    })
    tbdy.appendChild(tr);
  })
  tbl.appendChild(tbdy);
  if (replaceChild) body.replaceChild(tbl, body.childNodes[body.childNodes.length - 1]);
  if (!replaceChild) body.appendChild(tbl)
} 

/**
 * return the number rounded to the places.
 *
 * @param {Number} num Число которое буден округлено.
 * @param {Number} places Кол-во разрядов до которого будет окурглено число.
 * @param {String} replace Если num не число, то оно заменяется на replace.
 * @return the number round up or down to the places.
 */

function round(num, places, replace) {
  if (!places && places !== 0) places = 3
  if (!replace) replace = '-'
  if (isNaN(Number(num)) || num === '') return replace
  else return +(Math.round(+num + "e+" + places) + "e-" + places);
}
