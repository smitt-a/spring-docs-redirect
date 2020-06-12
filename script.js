// ==UserScript==
// @name         spring-doc
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirect outdated spring-doc links to current ones
// @author       smitt
// @match        https://docs.spring.io/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  let url = new URL(location.href);

  const regex = RegExp(/\/\d{1,3}\.\d{1,3}\.(\d{1,3}|x)(\.*\w*\/)/);
  if (regex.test(url.pathname)) {
    url.pathname = url.pathname.replace(regex, '/current/');
    console.log(url);
    window.location.replace(url);
  }
})();
