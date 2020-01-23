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
API_URL= SERVER URL WHERE API LIVE (example: localhost)
API_PORT= SERVER PORT (example: 3000)
API_KEY= SERVER KEY FOR HEADER SECURITY
```

## Validate

1. Create validations file following [VALIDATE.JS](https://validatejs.org/) guide.
Example:
```javascript
const validations = {
  email: {
    presence: {
      message: '^Please enter an email address',
    },
    email: {
      message: '^Please enter a valid email address',
    },
  },

  password: {
    presence: {
      message: '^Please enter a password',
    },
    length: {
      minimum: 5,
      message: '^Your password must be at least 5 characters',
    },
  },
};

export default validations;
```

2. Import function:
```javascript
import validate from 'utils/validate';
```
3. Capture inputs in variables, for example: 
```javascript
const email = 'joaquinb@zircon.tech';
const password 'super_secret_password';
```
4. Use validate function with variables as key-value array
```javascript
const valid = validate({email, password});
```
5. Outputs:
  - Everithing is OK: 
  ```javascript
  null
  ```
  - Something wrong: 
  ```javascript
  {
    email: [
      "Please enter a valid email address",
    ],
    password: [
      "Your password must be at least 5 characters",
    ]
  }
  ```