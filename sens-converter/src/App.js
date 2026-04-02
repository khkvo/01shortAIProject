import React, { useState } from 'react';

const games = [
  { name: 'Valorant', yaw: 0.07 },
  { name: 'Counter-Strike 2', yaw: 0.022 },
  { name: 'Overwatch', yaw: 0.0066 },
  { name: 'Apex Legends', yaw: 0.022 },
  { name: 'Call of Duty: Modern Warfare', yaw: 0.022 },
];

function App() {
  const [fromGame, setFromGame] = useState(games[0]);
  const [toGame, setToGame] = useState(games[1]);
  const [sensitivity, setSensitivity] = useState(1);
  const [adsSensitivity, setAdsSensitivity] = useState(1);
  const [dpi, setDpi] = useState(800);
  const [convertedSensitivity, setConvertedSensitivity] = useState(null);
  const [convertedAdsSensitivity, setConvertedAdsSensitivity] = useState(null);
  const [useOneToOneAds, setUseOneToOneAds] = useState(true);

  const handleConvert = () => {
    const result = (sensitivity * fromGame.yaw) / toGame.yaw;
    setConvertedSensitivity(result.toFixed(4));

    if (useOneToOneAds) {
      const adsResult = (adsSensitivity * fromGame.yaw) / toGame.yaw;
      setConvertedAdsSensitivity(adsResult.toFixed(4));
    } else {
      setConvertedAdsSensitivity(null);
    }
  };

  return (
    <div>
      <h1>Sensitivity Converter</h1>
      <div>
        <label>
          DPI:
          <input
            type="number"
            value={dpi}
            onChange={(e) => setDpi(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          From:
          <select
            value={fromGame.name}
            onChange={(e) =>
              setFromGame(games.find((g) => g.name === e.target.value))
            }
          >
            {games.map((game) => (
              <option key={game.name} value={game.name}>
                {game.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          To:
          <select
            value={toGame.name}
            onChange={(e) =>
              setToGame(games.find((g) => g.name === e.target.value))
            }
          >
            {games.map((game) => (
              <option key={game.name} value={game.name}>
                {game.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Sensitivity:
          <input
            type="number"
            value={sensitivity}
            onChange={(e) => setSensitivity(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          ADS Sensitivity:
          <input
            type="number"
            value={adsSensitivity}
            onChange={(e) => setAdsSensitivity(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={useOneToOneAds}
            onChange={(e) => setUseOneToOneAds(e.target.checked)}
          />
          1:1 ADS Conversion
        </label>
      </div>
      <button onClick={handleConvert}>Convert</button>
      {convertedSensitivity && (
        <div>
          <h2>Converted Sensitivity:</h2>
          <p>{convertedSensitivity}</p>
        </div>
      )}
      {convertedAdsSensitivity && (
        <div>
          <h2>Converted ADS Sensitivity:</h2>
          <p>{convertedAdsSensitivity}</p>
        </div>
      )}
      <div>
        <h3>FOV Scaling</h3>
        <p>
          FOV scaling is not yet implemented. This feature will allow you to
          maintain the same feel when changing your field of view between
          games.
        </p>
      </div>
    </div>
  );
}

export default App;
