function Car(x, y, speed) {
  this.speed = speed;
  this.x = x;
  this.y = y;
  this.element = $("<div class='car'>");
  $("#circuito").append(this.element);
}
Car.prototype.goUp = function() {
  this.y -= this.speed;
};

Car.prototype.goDown = function() {
  this.y += this.speed;
};
Car.prototype.update = function() {
  this.element.css("top", this.y);
  this.element.css("left", this.x);
};
