$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/SearchFunction.feature");
formatter.feature({
  "name": "Search Functionality in Amazon website",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Search"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Provide the search function to the user to have quick access to the required product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "The user is already on the Amazon Home Page",
  "keyword": "Given "
});
formatter.step({
  "name": "user Click on search bar and type \"\u003cProductName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should be shown all the availble \"\u003cProductName\u003e\" in the inventory",
  "keyword": "Then "
});
formatter.step({
  "name": "User should not see the \"\u003cExcludedProduct\u003e\"",
  "keyword": "But "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ProductName",
        "ExcludedProduct"
      ]
    },
    {
      "cells": [
        "Laptop",
        "Dell"
      ]
    },
    {
      "cells": [
        "Mobile",
        "Samsung"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Provide the search function to the user to have quick access to the required product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is already on the Amazon Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonSearchSteps.the_user_is_already_on_the_amazon_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Click on search bar and type \"Laptop\"",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonSearchSteps.user_click_on_search_bar_and_type_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be shown all the availble \"Laptop\" in the inventory",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonSearchSteps.user_should_be_shown_all_the_availble_something_in_the_inventory(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should not see the \"Dell\"",
  "keyword": "But "
});
formatter.match({
  "location": "AmazonSearchSteps.user_should_not_see_the_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Provide the search function to the user to have quick access to the required product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is already on the Amazon Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonSearchSteps.the_user_is_already_on_the_amazon_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Click on search bar and type \"Mobile\"",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonSearchSteps.user_click_on_search_bar_and_type_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be shown all the availble \"Mobile\" in the inventory",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonSearchSteps.user_should_be_shown_all_the_availble_something_in_the_inventory(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should not see the \"Samsung\"",
  "keyword": "But "
});
formatter.match({
  "location": "AmazonSearchSteps.user_should_not_see_the_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Provide the search function to the user to have quick access to the required product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "The user is already on the Amazon Home Page",
  "keyword": "Given "
});
formatter.step({
  "name": "user Click on search bar and type \"\u003cProductName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should be shown all the availble \"\u003cProductName\u003e\" in the inventory",
  "keyword": "Then "
});
formatter.step({
  "name": "User should not see the \"\u003cExcludedProduct\u003e\"",
  "keyword": "But "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ProductName",
        "ExcludedProduct"
      ]
    },
    {
      "cells": [
        "Headphones",
        "Dell"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Provide the search function to the user to have quick access to the required product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is already on the Amazon Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonSearchSteps.the_user_is_already_on_the_amazon_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Click on search bar and type \"Headphones\"",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonSearchSteps.user_click_on_search_bar_and_type_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be shown all the availble \"Headphones\" in the inventory",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonSearchSteps.user_should_be_shown_all_the_availble_something_in_the_inventory(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should not see the \"Dell\"",
  "keyword": "But "
});
formatter.match({
  "location": "AmazonSearchSteps.user_should_not_see_the_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});