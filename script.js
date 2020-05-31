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
  const pathArr = url.pathname.split('/');
  if (pathArr[3] != 'current') {
    pathArr[3] = 'current';
    url.pathname = pathArr.join('/');
    window.location.replace(url);
  }
})();
