React Native Boillerplate
====================================

# Overview

This is a React Native Boillerplate with custom components and login function with redux.

# Dependencies

* [axios](https://github.com/axios/axios)
* [react-native-config](https://github.com/luggit/react-native-config)
* [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler)
* [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
* [react-native-screens](https://github.com/kmagiera/react-native-screens)
* [react-navigation](https://github.com/react-navigation/react-navigation)
* [react-redux](https://github.com/reduxjs/react-redux)
* [redux](https://github.com/reduxjs/redux)
* [redux-thunk](https://github.com/reduxjs/redux-thunk)

# Structure

![Structure](/structure.jpg)

## Views
Redux connected. Group of components that make up a screen.

## Services
API calls, push notifications and everything that comes from outside.

## Lib
Generic components, config variables and generic methods.

## Redux
Everything related to redux, actions, reducers, stores and types.

## Res
All application texts in their language variations, colors and assets (images, fonts, etc.).

## Navigation
Everything related to navigation within the application with an index containing the main navigation.

# Installation & Usage

* Download the repo `git clone git@bitbucket.org:zircon-tech/react_native_bolilerplate.git`
* `cd react_native_bolilerplate`
* Install project dependencies `npm i`.
* Install cocoapods dependencies `cd ios && pod install`
* Create `.env` file on the root following the `.env.example` file
* Run project
  * `npm run android` for Android 
  * `npm run ios` for IOS 
* Build amazing APPs 🚀.

# Secrets (.env file)
```
API_URL= SERVER URL WHERE API LIVE (example: localhost)
API_PORT= SERVER PORT (example: 3000)
API_KEY= SERVER KEY FOR HEADER SECURITY
```