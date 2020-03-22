$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Contacts Feature",
  "description": "",
  "id": "free-crm-contacts-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Contacts Test Scenario",
  "description": "",
  "id": "free-crm-contacts-feature;free-crm-contacts-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters login details \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contacts deatils \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003caddress\u003e\" and \"\u003ccity\u003e\" and \"\u003cstate\u003e\" and \"\u003czip\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-contacts-feature;free-crm-contacts-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "address",
        "city",
        "state",
        "zip"
      ],
      "line": 15,
      "id": "free-crm-contacts-feature;free-crm-contacts-test-scenario;;1"
    },
    {
      "cells": [
        "any.kkr@gmail.com",
        "Aniket@1992",
        "Aniket",
        "Korgaonar",
        "Navi Peth",
        "Pune",
        "Maharashtra",
        "411030"
      ],
      "line": 16,
      "id": "free-crm-contacts-feature;free-crm-contacts-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Contacts Test Scenario",
  "description": "",
  "id": "free-crm-contacts-feature;free-crm-contacts-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters login details \"any.kkr@gmail.com\" and \"Aniket@1992\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contacts deatils \"Aniket\" and \"Korgaonar\" and \"Navi Peth\" and \"Pune\" and \"Maharashtra\" and \"411030\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Contacts.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 82464895246,
  "status": "passed"
});
formatter.match({
  "location": "Contacts.user_title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 200996491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "any.kkr@gmail.com",
      "offset": 27
    },
    {
      "val": "Aniket@1992",
      "offset": 51
    }
  ],
  "location": "Contacts.user_enters_login_details_and(String,String)"
});
formatter.result({
  "duration": 2745358009,
  "status": "passed"
});
formatter.match({
  "location": "Contacts.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 330698275,
  "status": "passed"
});
formatter.match({
  "location": "Contacts.user_clicks_on_Contacts_link()"
});
formatter.result({
  "duration": 5394338136,
  "status": "passed"
});
formatter.match({
  "location": "Contacts.user_clicks_on_New_button()"
});
formatter.result({
  "duration": 3370579332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aniket",
      "offset": 30
    },
    {
      "val": "Korgaonar",
      "offset": 43
    },
    {
      "val": "Navi Peth",
      "offset": 59
    },
    {
      "val": "Pune",
      "offset": 75
    },
    {
      "val": "Maharashtra",
      "offset": 86
    },
    {
      "val": "411030",
      "offset": 104
    }
  ],
  "location": "Contacts.user_enters_contacts_deatils_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3761673473,
  "status": "passed"
});
formatter.match({
  "location": "Contacts.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 2257203275,
  "status": "passed"
});
formatter.match({
  "location": "Contacts.user_close_the_browser()"
});
formatter.result({
  "duration": 728298701,
  "status": "passed"
});
});