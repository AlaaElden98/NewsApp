# News App

News App is a mobile application that display a list of news and news sources from [News API](https://newsapi.org/)
developed with [react-native](https://reactnative.dev/).

## Getting started

### Setup the development environment

Follow the instructions from react native [docs](https://reactnative.dev/docs/environment-setup).
Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

### Installation

- Clone this repo or download the ZIP file.
- Make your own [API_KEY](https://newsapi.org/register)
- Create .env file in your project root and add the api key
  `API_KEY=YourApiKey`
- Open the terminal inside the project root.
- Run the following commands :
  - `yarn install` to download the dependencies and generates node_module.
  - `yarn start` to starts Metro Bundler.
  - `yarn android` to run on android device/emulator.
  - `npm run ios` to run on ios device/emulator. (Note: I havn't tested the app on ios machine)

## API and External libraries

[NEWS API](https://newsapi.org/).
[React Navigation (native/native-stack/buttom-tabs/top-tabs)](https://reactnavigation.org/docs/getting-started/#installation)
[Redux Toolkit](https://redux-toolkit.js.org/)
[prop-types](https://github.com/facebook/prop-types)
[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
[react-native-config](https://github.com/luggit/react-native-config)

## More about the app

The app main functionality is to displays a list of top headlines news and sources fetched through a web API.

The app contain 3 main tabs :

- A tab where the user can browse top headlines about business and sports in Egypt or UAE.
  Each headline should consist of the following:

1. An image for the headline.
2. A title.
3. The author’s name.
4. Date and time of publishing.

Clicking on any of the headlines should navigate the user to a new page that
contains the headline details.
Each headline details page should consist of the following:

1. An image for the headline.
2. A title.
3. The author’s name.
4. Date and time of publishing.
5. The content.
6. The source of the headline which navigates me to its external web page.

- A tab where the user can view a list of all the names of the available news
  sources.

Clicking on any of the sources should navigate the user to a new page
containing all the headlines from that source. The user can view the headline
details by clicking on any headline. Then both the headline and the headline
details page should consist of the same data mentioned earlier.

- A tab where the user can view a list of all the headlines that he had
  clicked/viewed before. The list should be in reverse chronological order by the
  time of viewing the headline. If the user had viewed the same headline again,
  the list should be reordered to the latest timestamp of that headline.

### TODO

- [ ] Add documentation to the code
- [ ] Test the app componants and functions ([Jest](https://jestjs.io/),[React Native Testing](https://callstack.github.io/react-native-testing-library/))
- [ ] Follow [React Native Accessibility](https://reactnative.dev/docs/accessibility) guides
- [ ] Run on ios
