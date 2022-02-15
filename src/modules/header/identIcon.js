const Component = require("react").Component;
const h = require("react-hyperscript");
const inherits = require("util").inherits;
const findDOMNode = require("react-dom").findDOMNode;
const jazzicon = require("rockicon");
const iconFactoryGen = require("./iconFactory");
const iconFactory = iconFactoryGen(jazzicon);

module.exports = IdenticonComponent;

inherits(IdenticonComponent, Component);
function IdenticonComponent() {
  Component.call(this);

  this.defaultDiameter = 46;
}

IdenticonComponent.prototype.render = function () {
  var props = this.props;
  var diameter = props.diameter || this.defaultDiameter;
  return h("div", {
    key: "identicon-" + this.props.address,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: diameter,
      width: diameter,
      pointerEvents: "none",
      borderRadius: diameter / 2,
      overflow: props.overflow || "hidden",
    },
  });
};

IdenticonComponent.prototype.componentDidMount = function () {
  const props = this.props;
  const { address, network } = props;

  if (!address) return;

  // eslint-disable-next-line react/no-find-dom-node
  const container = findDOMNode(this);

  const img = iconFactory.iconForAddress(address, 24, network);
  container.appendChild(img);
};
