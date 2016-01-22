import React from 'react';
import {TransitionMotion, spring} from 'react-motion';

const willEnter = children => ({children, opacity: spring(0), scale: spring(1)});

const willLeave = (key, {children}) => ({children, opacity: spring(0),  scale: spring(1)});


const getStyles = (children, pathname) => ({[pathname]: {children, opacity: spring(1), scale: spring(1)}});





//console.log(children);

export default function RouteTransition({children, pathname}) {

  console.log(children)
  return (
    <TransitionMotion
      styles={getStyles(children, pathname)}
      willEnter={willEnter}
      willLeave={willLeave}
    >
      {interpolated =>
        <div>
          {Object.keys(interpolated).map(key =>
            <div
              key={`${key}-transition`}
              style={{
                position: 'absolute',
                opacity: interpolated[key].opacity,
                transform: `scale(${interpolated[key].scale})`
              }}
            >
              {interpolated[key].children}
            </div>
          )}
        </div>
      }
    </TransitionMotion>
  );
}