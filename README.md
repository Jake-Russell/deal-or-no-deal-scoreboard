# Deal Or No Deal Scoreboard

A simple web application for emulating the scoreboard in a game of Deal or No Deal. It is intended to be used solely as an electronic scoreboard, accompanying physical boxes as used in the TV show game. 

# Customising The Scoreboard

The scoreboard can be customised by changing the available prizes, the frequency of the banker calling, and the inclusion of a Gamble Box in the game.

## Customising Prizes

Prizes can be customised by changing them in the `prizes` array in `prize.service.ts`. Each element of the array is a `Prize` object comprising of the following properties:

- `name` - A string representing the displayed name of the prize
- `prizeType` - A `PrizeType` enum corresponding to if the prize is a high or low value prize. This correlates to a blue prize (low value) or a red prize (high value) in the game.
- `available` - A boolean value used to represent if the prize is still available in the game or not.
- `value` - An integer representing the value of the prize. Lower value prizes should have a low number, and higher value prizes should have a high number. This is used to determine what prize the banker should offer. It is recommended that their are no duplicate values, and each prize increases value by one. For example, if there are 12 prizes, then the worst prize should have a value of 1 and the best prize should have a value of 12.

## Customising Banker Frequency

By default, the banker is set to call after every 5 turns. This can be customised by changing the value of `bankerCallFrequency` in `prize.service.ts`.

## Customising Gamble Box Inclusion

By default, the game is configured to include a Gamble Box. This means that when the player reaches one remaining box, the banker will call to offer them a trade of whatever prize they have won for a Gamble Box, which the player is unaware of. This feature can be disabled by toggling the value of `includeGambleBox` in `prize.service.ts`.

# Using the Scoreboard

When the scoreboard is up and running in a browser (see [Running Locally](#running-locally)), prizes can be removed from the board by clicking on them. Once removed, they will become greyed out and unclickable.

After the number of turns configured before the banker calls has been reached (which by default is five), a popup will appear with the banker's offer. The player will be prompted to select either Deal or No Deal. If they choose Deal, the game ends and they win the offered prize. Otherwise, the game will continue until the banker makes another offer.

If playing with a Gamble Box, the banker will make another offer when only one box remains. This offer will be a trade of the prize the player has won for the Gamble Box.

When any deal is accepted, the game will end and the scoreboard will be reset.

# Running Locally

Run `ng serve` or `npm start` for a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
