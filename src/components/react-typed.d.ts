// react-typed.d.ts
import { Component } from 'react';
declare module 'react-typed' {
  
    interface ReactTypedProps {
      strings?: string[];
      typeSpeed?: number;
      backSpeed?: number;
      loop?: boolean;
      showCursor?: boolean;
      cursorChar?: string;
      startDelay?: number;
      backDelay?: number;
      onComplete?: (self: Typed) => void;
      onStart?: (arrayPos: number, self: Typed) => void;
      onDestroy?: (self: Typed) => void;
      onStringTyped?: (arrayPos: number, self: Typed) => void;
      onLastStringBackspaced?: (self: Typed) => void;
      onTypingPaused?: (arrayPos: number, self: Typed) => void;
      onTypingResumed?: (arrayPos: number, self: Typed) => void;
      onReset?: (self: Typed) => void;
      onStop?: (arrayPos: number, self: Typed) => void;
      onStartDelay?: () => void;
      onBackspacing?: () => void;
      children?: React.ReactElement<unknown, string | JSXElementConstructor<any>>;
    }
  
    export default class Typed extends Component<ReactTypedProps> {}
  }