/**
     * Create or refresh the table.
     *
     * @param {Array} thead The head of the table.
     * @param {Array<Array>} tbody The body of the table.
     * @param {String} tableId Set Id of the table.
     * @param {HTMLelement} body HTML Element to append/replace the table.
     * @return The HTML table.
     */
    function tableCreate(thead, tbody, tableId, parent) {
        if (!parent) parent = document.getElementsByTagName('body')
        if (!tableId) tableId = 'tableId'
        if (!tbody) tbody = [
            []
        ]
        let tbl = document.createElement("table");
        tbl.setAttribute("id", tableId.toString());
        tbl.setAttribute("class", 'AStable');

        let tbdy = document.createElement("tbody");
        let tbhd = document.createElement("thead");
        let tr = document.createElement("tr");

        //header

        thead.forEach((cell) => {
            let th = document.createElement("th");
            th.appendChild(document.createTextNode(cell));
            tr.appendChild(th);
            tbhd.appendChild(tr);
        });
        tbl.appendChild(tbhd);

        //tbody

        tbody.forEach((row) => {
            let tr = document.createElement("tr");
            row.forEach((cell) => {
                let td = document.createElement("td");
                td.appendChild(document.createTextNode(cell));
                tr.appendChild(td);
            });
            tbdy.appendChild(tr);
        });
        tbl.appendChild(tbdy);

        let tablePos;
        Array.prototype.slice.call(parent[0].childNodes).forEach((el, i) => {
            if (el.id == tableId) tablePos = i;
        });
        tablePos
            ?
            parent[0].replaceChild(tbl, parent[0].childNodes[tablePos]) :
            parent[0].appendChild(tbl);
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
