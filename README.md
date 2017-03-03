# <img src="http://i.imgur.com/Iy8Q9rJ.png" width="400" alt="Internet UC">

Internet UC is a Wifi UC fork made with React Native and Redux ✨

Easily manage your wifi devices allowed in UC wireless network.

### 📦 Install
⚠️ This is a WIP, no release versions yet!

### 📱 Screenshots
#### iOS
<img src="http://i.imgur.com/6PoyR9U.png" width="200">
<img src="http://i.imgur.com/NC2QvnQ.png" width="200">
<img src="http://i.imgur.com/YgfB0VV.png" width="200">
<img src="http://i.imgur.com/nvcFICB.png" width="200">
#### Android

<img src="http://i.imgur.com/JW3L60a.png" width="200">
<img src="http://i.imgur.com/GtGAUHd.png" width="200">
<img src="http://i.imgur.com/caHr3Yc.png" width="200">
<img src="http://i.imgur.com/gQA16f6.png" width="200">

## ℹ️ About
This is a clone of a series of [applications](https://negebauer.github.io/projects/wifiuc) made for iOS and Electron.
This version is based on [the latter](https://github.com/wachunei/wifiuc-menubar/), which is an Angular 1.x application 😨
## Features
- [x] Log in
- [x] Get user full name
- [x] Log out
- [x] Get devices list
- [x] Pull to refresh devices list
- [x] Activate/deactivate device
- [x] Add a new device
- [x] Validate new device before adding (MAC address, already exists)
- [x] Edit device
- [x] Delete device
- [ ] Display error messages
- [ ] Internationalization


## 🛠 Under the hood
The main reason to develop this app was to make it part of a process of learning both React Native and Redux. So it might be some things some experienced people could not agree in the way it is done, if you think so please fill an issue and become part of the process too!

Tools we're using:
* [`react-native`](https://github.com/facebook/react-native): Do'h!
* [`redux`](https://github.com/reactjs/redux) and [`react-redux`](https://github.com/reactjs/react-redux): State management and React bindings
* [`redux-thunk`](https://github.com/gaearon/redux-thunk): Thunk middleware for async actions
* [`redux-persist`](https://github.com/rt2zz/redux-persist): State persistance using `AsyncStorage`
* [`react-native-router-flux`](https://github.com/aksonov/react-native-router-flux): A nice Router (this might be an overkill)
* [`reselect`](https://github.com/reactjs/reselect): Memoized state selectors
* [`react-native-svg`](https://github.com/react-native-community/react-native-svg): An SVG library
* [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons): Vector icons
* [`react-native-keyboard-spacer`](https://github.com/Andr3wHur5t/react-native-keyboard-spacer): A keyboard spacer to shrink views when keyboard is being displayed
* [`react-native-debugger`](https://github.com/jhen0409/react-native-debugger): Awesome debugger

## ✊🏽 Contribute
Once I reach a minimum set of features I would love to review and accept some PRs.
Consider the code is linted with ESLint and the configuration extends from [Airbnb style guide](https://github.com/airbnb/javascript).
As I said before, coding-style related issues are welcome (even if you think something is missing from this README!).
