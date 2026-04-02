Kevin Vo
khvo
https://github.com/khkvo/01shortAIProject

# FPS Game Sensitivity Converter

This is a web-based application that allows you to convert your mouse sensitivity between different FPS games.

## Features

*   **Sensitivity Conversion:** Convert your mouse sensitivity between popular FPS games.
*   **ADS Sensitivity Conversion:** Convert your ADS (Aim Down Sights) sensitivity.
*   **DPI Input:** Input your mouse DPI for more accurate calculations in the future.

## How It Works

The conversion is based on the `yaw` value of each game. The `yaw` value is a multiplier that determines how many degrees the camera turns for each unit of mouse input. The formula for the conversion is:

```
converted_sensitivity = (sensitivity * from_game_yaw) / to_game_yaw
```

## How to Run

1.  Clone this repository.
2.  Navigate to the `sens-converter` directory:
    ```bash
    cd sens-converter
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm start
    ```
5.  Open your browser and go to `http://localhost:3000`.

## Future Features

*   **FOV Scaling:**  A feature to maintain the same feel when changing your field of view between games is planned for a future update.

## Technologies Used

*   React
*   HTML
*   CSS
*   JavaScript
