import { CheckIcon } from '@heroicons/react/solid';
import cx from 'classnames';
import { allocate, subtract, multiply, isZero } from 'dinero.js';
import React, { useState } from 'react';
import ReactSlider from 'react-slider';

import { format } from './utils';

function App() {
  const [seats, setSeats] = useState(70);
  const tiers = [{
    color: "violet"
  },
  {
    color: "blue"
  },
  {
    color: "red"
  },
  {
    color: "orange"
  },
  {
    color: "yellow"
  },
  {
    color: "green"
  }
];
  return (
    <div className="relative bg-white">
      <div className="fixed top-0 left-0 right-0 z-30 w-full px-4 py-2 text-sm text-center text-white bg-blue-600 shadow-lg">
        
      </div>
      <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
            Color prana's
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            
          </p>
          <div className="h-16 sm:px-16 lg:px-40 xl:px-24 sm:h-32">
            <ReactSlider
              className="mt-14"
              marks
              min={1}
              max={100}
              defaultValue={seats}
              onChange={(value) => setSeats(value)}
              renderThumb={(props, state) => (
                <div
                  {...props}
                  style={{ ...props.style, zIndex: 20 }}
                  className="relative flex flex-col items-center w-8 h-8 -mt-2 outline-none"
                >
                  <div className="absolute top-0 inline-block px-2 py-1 mb-2 -mt-8 text-xs text-white bg-gray-900 rounded-sm whitespace-nowrap">
                    {state.valueNow} percentage
                  </div>
                  <div className="w-8 h-8 bg-white border-4 border-blue-700 rounded-full shadow-lg cursor-pointer" />
                </div>
              )}
              renderTrack={(props, state) => (
                <div
                  {...props}
                  className={cx('h-4 rounded-full cursor-pointer', {
                    'bg-gray-100': state.index === 1,
                    'bg-blue-700 z-10': state.index === 0,
                  })}
                />
              )}
            />
          </div>
        </div>
        <div style={{ width: "auto", height: "100vh"}}>
          {tiers.map((itemm, index) => {
            return (
              <Tier key={index} color={itemm.color} opacity={seats}>
              </Tier>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Tier({ color, opacity }) {
  return (
    <div
      style={{
        backgroundColor: color,
        opacity: opacity / 100,
        borderRadius: "50%",
        width: "calc(25%)",
        height: "calc(45%)",
        margin: "20px",
        marginLeft: "25px",
        float: "left"
      }}
    >
    </div>
  );
}

export default App;
