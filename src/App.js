import React from 'react';
import './App.css';
import Car1 from './Car1.png'; // Importing the first car image
import Car2 from './Car2.png'; // Importing the second car image
import logo from './amg.png'

const sampleData = {
    team: 'Mercedes AMG Petronas Formula One Team',
    driver1: {
        name: 'Lewis Hamilton',
        wins: 7,
        podiums: 12,
        polePositions: 10,
        fastestLaps: 8,
        tireData: {
            temperature: '80°C',
            pressure: '2.3 bar',
            degradation: 'Low',
        },
        raceData: {
            stints: 2,
            lapTimes: '1:20.123',
            drsStatus: 'Enabled',
        },
        emergencyData: {
            issue: 'Fuel Leak',
            solution: 'Pit Stop',
        },
    },
    driver2: {
        name: 'Valtteri Bottas',
        wins: 3,
        podiums: 9,
        polePositions: 5,
        fastestLaps: 6,
        tireData: {
            temperature: '75°C',
            pressure: '2.2 bar',
            degradation: 'Medium',
        },
        raceData: {
            stints: 1,
            lapTimes: '1:21.345',
            drsStatus: 'Disabled',
        },
        emergencyData: {
            issue: 'Brake Failure',
            solution: 'Adjust Brake Balance',
        },
    },
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="header-box">
                    <img src= {logo} alt="Mercedes F1 Team" className="logo" />
                    <h1>{sampleData.team}</h1>
                </div>
                <div className="main-data">
                    <div className="data-container">
                        <div className="data">
                            <h2>Driver: {sampleData.driver1.name}</h2>
                            <p>Wins: {sampleData.driver1.wins}</p>
                            <p>Podiums: {sampleData.driver1.podiums}</p>
                            <p>Pole Positions: {sampleData.driver1.polePositions}</p>
                            <p>Fastest Laps: {sampleData.driver1.fastestLaps}</p>
                        </div>
                        <div className="data">
                            <h2>Driver: {sampleData.driver2.name}</h2>
                            <p>Wins: {sampleData.driver2.wins}</p>
                            <p>Podiums: {sampleData.driver2.podiums}</p>
                            <p>Pole Positions: {sampleData.driver2.polePositions}</p>
                            <p>Fastest Laps: {sampleData.driver2.fastestLaps}</p>
                        </div>
                    </div>
                </div>
                <div className="race-data">
                    <div className="data-container">
                        <div className="data">
                            <h2>Race Data - {sampleData.driver1.name}</h2>
                            <p>Stints: {sampleData.driver1.raceData.stints}</p>
                            <p>Lap Times: {sampleData.driver1.raceData.lapTimes}</p>
                            <p>DRS Status: {sampleData.driver1.raceData.drsStatus}</p>
                        </div>
                        <div className="data">
                            <h2>Race Data - {sampleData.driver2.name}</h2>
                            <p>Stints: {sampleData.driver2.raceData.stints}</p>
                            <p>Lap Times: {sampleData.driver2.raceData.lapTimes}</p>
                            <p>DRS Status: {sampleData.driver2.raceData.drsStatus}</p>
                        </div>
                    </div>
                </div>
                <div className="car-group">
                    <div className="car-container">
                        <div className="car-wrapper">
                            <div className="car-data">
                                <h2>Tire Data</h2>
                                <p>Temperature: {sampleData.driver1.tireData.temperature}</p>
                                <p>Pressure: {sampleData.driver1.tireData.pressure}</p>
                                <p>Degradation: {sampleData.driver1.tireData.degradation}</p>
                            </div>
                            <img src={Car1} alt="Mercedes F1 Car" className="car-image" />
                        </div>
                        <div className="emergency-box">
                            <h2>Emergency Data</h2>
                            <div className="emergency-data">
                                <h3>Driver: {sampleData.driver1.name}</h3>
                                <p>Issue: {sampleData.driver1.emergencyData.issue}</p>
                                <p>Solution: {sampleData.driver1.emergencyData.solution}</p>
                            </div>
                        </div>
                    </div>
                    <div className="car-container">
                        <div className="car-wrapper">
                            <div className="car-data">
                                <h2>Tire Data</h2>
                                <p>Temperature: {sampleData.driver2.tireData.temperature}</p>
                                <p>Pressure: {sampleData.driver2.tireData.pressure}</p>
                                <p>Degradation: {sampleData.driver2.tireData.degradation}</p>
                            </div>
                            <img src={Car2} alt="Second F1 Car" className="car-image" />
                        </div>
                        <div className="emergency-box">
                            <h2>Emergency Data</h2>
                            <div className="emergency-data">
                                <h3>Driver: {sampleData.driver2.name}</h3>
                                <p>Issue: {sampleData.driver2.emergencyData.issue}</p>
                                <p>Solution: {sampleData.driver2.emergencyData.solution}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <footer className="footer">
                <p>Mercedes AMG Petronas Formula One Team</p>
                <p>Powered by React</p>
            </footer>
        </div>
    );
}

export default App;