import React from 'react';
import PropTypes from 'prop-types';

class TextScrambler extends React.Component {
   static propTypes = {
      text: PropTypes.string.isRequired,
      delay: PropTypes.number
   };

   static defaultProps = {
      text: '',
      delay: 0
   };

   constructor(props) {
      super(props);
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.state = { text: '' };
      this.isUmounted = false;
      this.update = this.update.bind(this);
   }

   componentWillUnmount() {
      this.isUmounted = true;
   }

   setText(newText) {
      const oldText = this.state.text;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise(resolve => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
         const from = oldText[i] || '';
         const to = newText[i] || '';
         const start = Math.floor(Math.random() * 40);
         const end = start + Math.floor(Math.random() * 40);
         this.queue.push({ from, to, start, end });
      }
      window.cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
   }

   update() {
      let output = '';
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
         let { from, to, start, end, char } = this.queue[i];
         if (this.frame >= end) {
            complete++;
            output += to;
         } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
               char = this.randomChar();
               this.queue[i].char = char;
            }
            output += char;
         } else {
            output += from;
         }
      }

      if (!this.isUmounted) {
         this.setState({ text: output });
      }
      if (complete === this.queue.length) {
         this.resolve();
      } else {
         this.frameRequest = window.requestAnimationFrame(this.update);
         this.frame++;
      }
   }

   randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
   }

   componentWillMount() {
      const { text } = this.props;

      setTimeout(() => {
         this.setText(text);
      }, this.props.delay);
   }

   render() {
      return (
         <div>
            <div>{this.state.text}</div>
         </div>
      );
   }
}

export default TextScrambler;
