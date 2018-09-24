import React, { Component } from 'react';
import { is } from 'immutable';

export class PureComponent<T = {}, U = {}, V = any> extends Component<T, U, V> {
  public shouldComponentUpdate = (nextProps: any = {}, nextState: any = {}) => {
    const thisProps: any = this.props || {}, thisState: any = this.state || {};
    if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
        Object.keys(thisState).length !== Object.keys(nextState).length) {
      return true;
    }
    for (const key in nextProps) {
      if (!is(thisProps[key], nextProps[key])) {
        return true;
      }
    }
    for (const key in nextState) {
      if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
        return true;
      }
    }
    return false;
  }
}