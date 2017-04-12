'use strict';

var stands = [];
const hours = 15;

function CookieStand(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookies = [];
}

CookieStand.prototype.getCookiesSold = function() {
  for(var i = 0; i < hours; i++) {
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

function createCookieStand(location, min, max, avg) {
  var i = stands.length;
  stands.push(window['stand' + i] = new CookieStand(location, min, max, avg));
  stands[i].getCookiesSold();
}

function createTableHeaderRow() {
  var row = document.createElement('tr');
  row.setAttribute('id', 'sales-header-row');
  var th = document.createElement('th');
  th.setAttribute('class', 'sales-th');
  th.textContent = '';
  row.appendChild(th);
  var time;
  for(var i = 1; i < hours; i++) {
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

function createTableFooterRow(stands) {
  var row = document.createElement('tr');
  row.setAttribute('id', 'sales-footer-row');
  var tf = document.createElement('td');
  tf.setAttribute('class', 'sales-tf');
  tf.textContent = 'totals';
  row.appendChild(tf);
  var total;
  for(var i = 0; i < hours; i++) {
    tf = document.createElement('td');
    tf.setAttribute('class', 'sales-tf');
    total = 0;
    console.log('create td');
    for(var j = 0; j < stands.length; j++) {
      console.log('move though stands array');
      console.log(stands[j]);
      var stand = stands[j];
      total += stand.cookies[i];
    }
    tf.textContent = total;
    row.appendChild(tf);
  }


  // var total;
  // for(var i = 0; i < hours; i++){
  //   tf = document.createElement('td');
  //   tf.setAttribute('class', 'sales-tf');
  //   for(var j = 0; j < stands.length; j++) {
  //     var stand = stands[i];
  //     total += stand.cookies[j];
  //     tf.textContent = total;
  //   }
  //   row.appendChild(tf);
  // }
  tf = document.createElement('td');
  tf.setAttribute('class', 'sales-tf');
  tf.textContent = '';
  row.appendChild(tf);
  return row;
}

function renderTable(stands) {

  var div = document.getElementById('table-div');
  var table = document.createElement('table');
  table.setAttribute('id', 'sales-table');
  var head = document.createElement('thead');
  head.setAttribute('id', 'sales-head');
  head.appendChild(createTableHeaderRow());
  table.appendChild(head);
  for (var i = 0; i < stands.length; i++) {
    table.appendChild(stands[i].getTableRow());
  }
  var foot = document.createElement('tfoot');
  foot.setAttribute('id', 'sales-foot');
  foot.appendChild(createTableFooterRow(stands));
  table.appendChild(foot);
  div.textContent = '';
  div.appendChild(table);
}

function createExistingLocations() {
  createCookieStand('1st and Pike', 23, 65, 6.5);
  createCookieStand('SeaTac Airport', 3, 24, 1.2);
  createCookieStand('Seattle Center', 11, 38, 3.7);
  createCookieStand('Capitol Hill', 20, 38, 2.3);
  createCookieStand('Alki', 2, 16, 4.6);
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

  createCookieStand(location, min, max, avg);
  renderTable(stands);
}

var addLocationForm = document.getElementById('add-location');
addLocationForm.addEventListener('submit', addLocationHandler);

createExistingLocations();
renderTable(stands);
