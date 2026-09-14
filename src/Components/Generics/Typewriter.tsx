import React from 'react';
import Typed from 'typed.js';

interface TypeWriter {
    el: any,
    typed: Typed
}

class TypeWriter extends React.Component<{ strings: Array<string>, shuffle?: boolean }> {
    componentDidMount() {
      const { strings, shuffle = true } = this.props;
      const options = {
          strings: strings,
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 1500,
          loop: true,
          loopCount: Infinity,
          shuffle: shuffle,
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
