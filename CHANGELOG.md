# 1.39.0

## ✨ Features

* AddMenu: Log sentry exception on click on add menu when offline
* DACC service to send anonymized measures about the file sizes grouped by app/konnector
* Upload: Upgrade cozy-client to allow all users to see progress on upload file
* Breadcrumbs: Use MUI Breadcrumb with fully fetched path

## 🐛 Bug Fixes

## 🔧 Tech

* Stylint: Format style files of the full repository to respect the Cozy config
* Dependencies: Update several dependencies packages
* Dependencies: Remove node-uuid unused package
* Dependabot: Configure the bot [dependabot](https://github.com/dependabot) to commit according to our convention
* Test: Use only one syntax of data-testid

# 1.38.0

## ✨ Features

* Filename is displayed in title when hovering the line.
* Add multiple import at once for Android
* Remove Pouch adapter migration

## 🐛 Bug Fixes

* Do not update files in parallel in the qualification migration service, as it might fail in nsjail for too many files
* Fix MoveModal breadcrumb
* Drive: display reasons of incorrect file name (illegal characters, forbidden name)
* Dropzone: Prevent errors during upload of file
* Searchbar: Handle better icon inside the searchbar
* Dependencies: Upgrade cozy-client in order to fix albums page from photos

## 🔧 Tech

* Use `<SharingBannerPlugin />` and `useSharingInfos()` from `cozy-sharing` instead of internal components
* Fixed an error in Search result when the result contained at least one Cozy Note
* Update cordova to 8.1.2 and cordova-android to 9.1.0
* Dependencies: Upgrade cozy-client, cozy-scanner caniuse-lite and fix tests
* Sharing: Upgrade cozy-sharing to fix typo in French
* Locales: Add locales in gitignore
* Docs: Explicit full path when importing cozy-ui component

# 1.37.0

## 🐛 Bug Fixes

* Fixed an error on mobile that was preventing users to long tap in order to trigger multiple files selection
* Fixed an error in directory tree names appearing under filenames where sometimes, the path appeared scrambled
* Fixed an error where creating a directory sent two save actions instead of one
* Added a missing loading status on delete confirm modal button
* Fixed issues related to recent view not going where it should when navigating back and forth in directory paths

## 🔧 Tech

* Add CodeQL in order to scan the code 🚫
* Add rel noopener on target blank link
