import React from 'react';
import Typed from 'typed.js';

interface TypeWriter {
    el: any,
    typed: Typed
}

class TypeWriter extends React.Component<{ strings: Array<string> }> {
    componentDidMount() {
      const { strings } = this.props;
      const options = {
          strings: strings,
          typeSpeed: 50,
          backSpeed: 50,
          loop: true,
          loopCount: Infinity,
          shuffle: true,
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
      // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }

    render() {
        return (
            <span ref={(el) => { this.el = el; }}/>
        )
    }
}

export default TypeWriter