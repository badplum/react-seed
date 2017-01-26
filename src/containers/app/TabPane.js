/**
 * @file app/TabPane.js
 *  作为tabbar对应的页面入口，封装tabbar中页面切换的过场动画等功能
 * @author maoquan(maoquan@htsc.com)
 */

import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default function TabPane(props) {
  const { location, children } = props;
  const { action, pathname } = location;
  return (
    <ReactCSSTransitionGroup
      component="section"
      transitionName={action === 'POP' ? 'page-reverse' : 'page'}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {React.cloneElement(children, {
        key: pathname
      })}
    </ReactCSSTransitionGroup>
  );
}

TabPane.propTypes = {
};

TabPane.defaultProps = {
};
