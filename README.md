App of the local parties of Mungia 2014
=====================

## Installation

This application uses Ionic framework. To use this project as is, first clone the repo from GitHub, then run:

```bash
$ cd app-base
$ sudo npm install -g cordova ionic gulp
$ npm install
$ gulp install
```

## Add a platform

For example, for android, you need Java, Android SDK, Ant and an Android Developer License.

Add the Android platform like this:

```bash
ionic platform add android
```

## Run it in the browser

```bash
$ ionic serve
```

## Emulate with Android emulator

```bash
$ ionic emulate android
```

## Install and run in the phone

Note that you will need the phone's USB drivers installed.

```bash
$ ionic run android
```
