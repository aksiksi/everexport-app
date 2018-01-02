# EverExport App

## Development Stopped

Major issue is dealing with OAuth in an Electron app. More specifically, storing the API secret on the client is not straightforward and requires use of a proxy server + authentication. 

Migrating to a Play + Scala server-side application instead.

## Info

An [Electron](https://electronjs.org/) application that simplifies exporting notes out of your [Evernote](https://evernote.com/) account.

Currently, the Electron app itself is licensed under GPLv3, but the underlying [EverExport API](https://github.com/aksiksi/everexport) is MIT licensed. 
