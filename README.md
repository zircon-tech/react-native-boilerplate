React Native Boillerplate
====================================

# Overview

This is a React Native Boillerplate with custom components and login function with redux.

# Structure

![Structure](/images/structure.jpg)

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

# Installation

* Download the repo `git clone git@bitbucket.org:zircon-tech/react_native_bolilerplate.git`
* `cd react_native_bolilerplate`
* Install project dependencies `npm i`.
* Install cocoapods dependencies `cd ios && pod install`
* Create `.env` file on the root following the `.env.example` file
* Run project
  * `npm run android` for Android 
  * `npm run ios` for IOS 
* Build amazing APPs 🚀.

# Usage 

## Secrets (.env file)
```
API_URL= SERVER URL WHERE API LIVE (example: http://localhost:3000/api)
API_PORT= SERVER PORT (example: 3000)
API_KEY= SERVER KEY FOR HEADER SECURITY
```

## Error/Success modal

![Structure](/images/modal.png)

1. Connect App component to redux
2. Import alertActions and Modal. 
3. Add `alertObject` redux state and `clear` action.
4. Create `modalClose` method that call `alertActions.clear()`.
5. Add modal component with props on return.
6. Dispatch `success` or `error` actions with message and title params.
