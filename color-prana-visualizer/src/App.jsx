import cx from 'classnames';
import React, {useState} from 'react';
import ReactSlider from 'react-slider';


function App() {
    const [seats, setSeats] = useState(70);

    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    React.useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);

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
            <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="sm:flex sm:flex-col sm:align-center">
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
                                    style={{...props.style, zIndex: 20}}
                                    className="relative flex flex-col items-center w-8 h-8 -mt-2 outline-none"
                                >
                                    <div
                                        className="absolute top-0 inline-block px-2 py-1 mb-2 -mt-8 text-xs text-white bg-gray-900 rounded-sm whitespace-nowrap">
                                        {state.valueNow} percentage
                                    </div>
                                    <div
                                        className="w-8 h-8 bg-white border-4 border-blue-700 rounded-full shadow-lg cursor-pointer"/>
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
                <div style={{width: "100%", height: "100vh"}}>
                    {tiers.map((itemm, index) => {
                        return (
                            <Tier key={index} color={itemm.color} opacity={seats} size={dimensions.width / 5}>
                            </Tier>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function Tier({color, opacity, size}) {
    return (
        <div
            style={{
                backgroundColor: color,
                opacity: opacity / 100,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
                margin: "20px",
                marginLeft: "25px",
                float: "left"
            }}
        >
        </div>
    );
}

export default App;
