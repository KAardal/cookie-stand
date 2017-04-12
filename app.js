'use strict';

var stores = [];

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

function createTableHeaderRow() {
  var row = document.createElement('tr');
  row.setAttribute('id', 'sales-header-row');
  var th = document.createElement('th');
  th.setAttribute('class', 'sales-th');
  th.textContent = '';
  row.appendChild(th);
  var time;
  for(var i = 1; i < 15; i++) {
    th = document.createElement('th');
    th.setAttribute('class', 'sales-th');
    time = i + 5;
    if(time < 12){
      th.textContent = time + ':00am';
    } else if(time > 12){
      time -= 12;
      th.textContent = time + ':00pm';
    } else {
      th.textContent = time + ':00pm';
    }
    row.appendChild(th);
  }
  th = document.createElement('th');
  th.setAttribute('class', 'sales-th');
  th.textContent = 'Daily Location Total';
  row.appendChild(th);
  return row;
}

function createTableFooterRow() {
  var row = document.createElement('tr');
  row.setAttribute('id', 'sales-footer-row');
  var tf = document.createElement('td');
  tf.setAttribute('class', 'sales-tf');
  tf.textContent = 'totals';
  row.appendChild(tf);
  for(var i = 0; i < stores.length; i++){
    var total;
    tf = document.createElement('td');
    tf.setAttribute('class', 'sales-tf');
    total += stores[i].cookies[i];
    tf.textContent = total;
    row.appendChild(tf);
  }
  tf = document.createElement('td');
  tf.setAttribute('class', 'sales-tf');
  tf.textContent = '';
  row.appendChild(tf);
  return row;
}

function renderTable(stores) {

  var div = document.getElementById('table-div');
  var table = document.createElement('table');
  table.setAttribute('id', 'sales-table');
  var head = document.createElement('thead');
  head.setAttribute('id', 'sales-head');
  head.appendChild(createTableHeaderRow());
  table.appendChild(head);
  for (var i = 0; i < stores.length; i++) {
    table.appendChild(stores[i].getTableRow());
  }
  var foot = document.createElement('tfoot');
  foot.setAttribute('id', 'sales-foot');
  foot.appendChild(createTableFooterRow(stores[i]));
  table.appendChild(foot);
  div.appendChild(table);
}

function createExistingLocations() {
  var pike = new CookieStand('1st and Pike', 23, 65, 6.5);
  pike.getCookiesSold();
  stores.push(pike);

  var seaTac = new CookieStand('SeaTac Airport', 3, 24, 1.2);
  seaTac.getCookiesSold();
  stores.push(seaTac);

  var seattleCenter = new CookieStand('Seattle Center', 11, 38, 3.7);
  seattleCenter.getCookiesSold();
  stores.push(seattleCenter);

  var capitolHill = new CookieStand('Capitol Hill', 20, 38, 2.3);
  capitolHill.getCookiesSold();
  stores.push(capitolHill);

  var alki = new CookieStand('Alki', 2, 16, 4.6);
  alki.getCookiesSold();
  stores.push(alki);
}

function addLocationHandler(event) {
  event.preventDefault();

  var location = event.target.location.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;

  event.target.location.value = '';
  event.target.min.value = '';
  event.target.max.value = '';
  event.target.avg.value = '';


}

var addLocationForm = document.getElementById('add-location');
addLocationForm.addEventListener('submit', addLocationHandler);

createExistingLocations();
renderTable(stores);
