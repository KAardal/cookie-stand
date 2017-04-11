'use strict';

function CookieStand(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookies = [];
}

CookieStand.prototype.getCookiesSold = function () {
  for(var i = 0; i < 15; i++) {
    this.cookies.push(Math.floor(((Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgPerCustomer));
  }
};
