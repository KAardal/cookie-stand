'use strict';

function CookieStand(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookies = [];
}

CookieStand.prototype.getCookiesSold = function() {
  for(var i = 0; i < 15; i++) {
    this.cookies.push(Math.floor(((Math.random() * (this.max - this.min + 1)) + this.min) * this.avg));
  }
  return this.cookies;
};

CookieStand.prototype.getTotalCookies = function() {
  var total = 0;
  for(var i = 0; i < this.cookies.length; i++) {
    total += this.cookies[i];
  }
  return total;
};

CookieStand.prototype.getTableRow = function() {
  var row = document.createElement('tr');
  row.setAttribute('class', 'sales-row');
  var td = document.createElement('td');
  td.setAttribute('class', 'location-td');
  td.textContent = this.location;
  row.appendChild(td);
  for(var i = 0; i < this.cookies.length; i++) {
    td = this.getTableData(i);
    row.appendChild(td);
  }
  td.textContent = this.getTotalCookies();
  row.appendChild(td);
  return row;
};

CookieStand.prototype.getTableData = function(index) {
  var td = document.createElement('td');
  td.setAttribute('class', 'sales-td');
  td.textContent = this.cookies[index];
  return td;
};

var pike = new CookieStand('1st and Pike', 23, 65, 6.5);
pike.getCookiesSold();

var seaTac = new CookieStand('SeaTac Airport', 3, 24, 1.2);
seaTac.getCookiesSold();

var seattleCenter = new CookieStand('Seattle Center', 11, 38, 3.7);
seattleCenter.getCookiesSold();

var capitolHill = new CookieStand('Capitol Hill', 20, 38, 2.3);
capitolHill.getCookiesSold();

var alki = new CookieStand('Alki', 2, 16, 4.6);
alki.getCookiesSold();

var div = document.getElementById('table-div');
var table = document.createElement('table');
table.setAttribute('id', 'sales-table');
table.appendChild(pike.getTableRow());
table.appendChild(seaTac.getTableRow());
table.appendChild(seattleCenter.getTableRow());
table.appendChild(capitolHill.getTableRow());
table.appendChild(alki.getTableRow());
div.appendChild(table);
