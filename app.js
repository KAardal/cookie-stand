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
    this.cookies.push(Math.floor(((Math.random() * (this.max - this.min + 1)) + this.min) * this.avg));
  }
  return this.cookies;
};

CookieStand.prototype.getTotalCookies = function () {
  var total = 0;
  for(var i = 0; i < this.cookies.length; i++) {
    total += this.cookies[i];
  }
  return total;
};
