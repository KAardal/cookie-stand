'use strict';

var stands = [];

var pikeStand = {
  location: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgPerCustomer: 6.3,
  cookiesSold: [], //each index will represent an hour in the day starting at 6am
  populateCookiesSold: function() {
    for(var i = 0; i < 16; i++) {
      this.cookiesSold.push(Math.floor(((Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgPerCustomer));
    }
  },
}
pikeStand.populateCookiesSold();
stands.push(pikeStand);

var seaTacStand = {
  location: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgPerCustomer: 1.2,
  cookiesSold: [],
  populateCookiesSold: function() {
    for(var i = 0; i < 16; i++) {
      this.cookiesSold.push(Math.floor(((Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgPerCustomer));
    }
  },
}
seaTacStand.populateCookiesSold();
stands.push(seaTacStand);

var seattleCenterStand = {
  location: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgPerCustomer: 3.7,
  cookiesSold: [],
  populateCookiesSold: function() {
    for(var i = 0; i < 16; i++) {
      this.cookiesSold.push(Math.floor(((Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgPerCustomer));
    }
  },
}
seattleCenterStand.populateCookiesSold();
stands.push(seattleCenterStand);

var capitolHillStand = {
  location: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgPerCustomer: 2.3,
  cookiesSold: [],
  populateCookiesSold: function() {
    for(var i = 0; i < 16; i++) {
      this.cookiesSold.push(Math.floor(((Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgPerCustomer));
    }
  },
}
capitolHillStand.populateCookiesSold();
stands.push(capitolHillStand);

var alkiStand = {
  location: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgPerCustomer: 4.6,
  cookiesSold: [],
  populateCookiesSold: function() {
    for(var i = 0; i < 16; i++) {
      this.cookiesSold.push(Math.floor(((Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgPerCustomer));
    }
  },
}
alkiStand.populateCookiesSold();
stands.push(alkiStand);

var listDiv = document.getElementById('list-div');
var standsUl;
var listHeading;
var currentStand;
for(var i = 0; i < stands.length; i++) {
  currentStand = stands[i];
  standsUl = document.createElement('ul');
  standsUl.setAttribute("class", "sales-list");
  listDiv.appendChild(standsUl);
  listHeading = document.createElement('lh');
  standsUl.appendChild(listHeading);
  listHeading.textContent = currentStand.location;

  var standsLi;
  var time;
  var total;
  var listEntry;
  for(var j = 0; j < currentStand.cookiesSold.length; j++) {
    time = j + 6;
    if(time < 12){
      listEntry = time + 'am: ';
    } else if(time > 12){
      time -= 12;
      listEntry = time + 'pm: ';
    } else {
      listEntry = time + 'pm: ';
    }

    listEntry += currentStand.cookiesSold[j] + ' cookies';
    standsLi = document.createElement('li');
    standsLi.setAttribute("class", "sales-per-hour");
    standsLi.textContent = listEntry;
    standsUl.appendChild(standsLi);
  }
}
