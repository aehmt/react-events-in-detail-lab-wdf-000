const React = require('react');

class DelayedButton extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick([event.clientX, event.clientY]);
    }, this.props.delay);
    console.log(this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delayed</button>
    );
  }
}

module.exports = DelayedButton;
