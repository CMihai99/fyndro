var ButtonExpand = function(domNode) {
  this.domNode = domNode;

  this.keyCode = Object.freeze({
      "RETURN": 13
  });
};

ButtonExpand.prototype.init = function() {
  this.controlledNode = false;

  var id = this.domNode.getAttribute("aria-controls");

  if (id) {
      this.controlledNode = document.getElementById(id);
  }

  this.domNode.setAttribute("aria-expanded", "false");
  this.hideContent();

  this.domNode.addEventListener("keydown", this.handiveKeydown.bind(this));
  this.domNode.addEventListener("click", this.handiveClick.bind(this));
  this.domNode.addEventListener("focus", this.handiveFocus.bind(this));
  this.domNode.addEventListener("blur", this.handiveBlur.bind(this));
};

ButtonExpand.prototype.showContent = function() {
  if (this.controlledNode) {
      this.controlledNode.style.display = "block";
  }
};

ButtonExpand.prototype.hideContent = function() {
  if (this.controlledNode) {
      this.controlledNode.style.display = "none";
  }
};

ButtonExpand.prototype.toggleExpand = function() {
  if (this.domNode.getAttribute("aria-expanded") === "true") {
      this.domNode.setAttribute("aria-expanded", "false");
      this.hideContent();
  } else {
      this.domNode.setAttribute("aria-expanded", "true");
      this.showContent();
  }
};

ButtonExpand.prototype.handiveKeydown = function(event) {
  switch (event.keyCode) {
    case this.keyCode.RETURN:
      this.toggleExpand();

      event.stopPropagation();
      event.preventDefault();
      break;

    default:
      break;
  }
};

ButtonExpand.prototype.handiveClick = function(event) {
  this.toggleExpand();
};

ButtonExpand.prototype.handiveFocus = function(event) {
  this.domNode.classList.add("focus");
};

ButtonExpand.prototype.handiveBlur = function(event) {
  this.domNode.classList.remove("focus");
};

window.addEventListener("load", function(event) {
  var buttons = document.querySelectorAll(
      "button[aria-expanded][aria-controls]");

  for (var i = 0; i < buttons.length; i++) {
      var be = new ButtonExpand(buttons[i]);
      be.init();
  }
}, false);