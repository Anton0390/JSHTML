function tableCreate(thead, tbody) {
            if (!thead) thead = ['test', 'test']
            if (!tbody) thead = [
                ['test', 'test'],
                ['test', 'test']
            ]
            let body = document.getElementsByTagName('body')[0];
            let tbl = document.createElement('table');
            tbl.style.width = '100%';
            tbl.style['border-style'] = 'solid';
            tbl.style['border-collapse'] = 'collapse';
            tbl.setAttribute('border', '1');
            let tbdy = document.createElement('tbody');
            let tbhd = document.createElement('thead');
            let tr = document.createElement('tr');

            //header

            thead.forEach(cell => {
                let th = document.createElement('th');
                th.style.background = '#b2b0b0'
                th.style['text-align'] = 'center';
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
                    td.style['text-align'] = 'center'
                    td.appendChild(document.createTextNode(cell))
                    tr.appendChild(td)
                })
                tbdy.appendChild(tr);
            })
            tbl.appendChild(tbdy);
            body.replaceChild(tbl, body.childNodes[body.childNodes.length - 1]);
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
