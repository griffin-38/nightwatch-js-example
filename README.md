# sample-nightwatch.js - mocha | project setup

Steps to get started
Install Node
https://nodejs.org/en/
Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices."

Mac OSX? (use homebrew)
brew update
That will install cask which is now part of Homebrew.
Now you can install Java:
brew cask install java
Install Nightwatch:
$ npm install [-g] nightwatch
Download Selenium
Download the latest version of the selenium-server-standalone-{VERSION}.jar file from the Selenium downloads page and place it on the computer with the browser you want to test. In most cases this will be on your local machine and typically inside your project's source folder.

$ npm install -g webdriver-manager
Download the selenium server jar and driver binaries. By default it will download the selenium server jar and chromedriver binary.

$ webdriver-manager update <-- This will install latest and greatest or if you need specific version --> node ./node_modules/webdriver-manager/bin/webdriver-manager update --standalone --versions.standalone=3.7.1 --versions.chrome=2.34 --version.gecko=v0.19.1
Help info use the following:

$ webdriver-manager update help
Verify nightwatch.json & package.json
The test runner expects a configuration file to be passed, using by default a nightwatch.json file from the current directory, if present. A nigthwatch.conf.js file will also be loaded by default, if found.


