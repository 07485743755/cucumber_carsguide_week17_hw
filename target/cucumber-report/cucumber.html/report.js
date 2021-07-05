$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "\r\nAs a user I want to search car with model",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User should search the buy car with model",
  "description": "",
  "id": "search-functionality;user-should-search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "search-functionality;user-should-search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 19,
      "id": "search-functionality;user-should-search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "BMW",
        "3 Series",
        "NSW - All",
        "$50,000"
      ],
      "line": 20,
      "id": "search-functionality;user-should-search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Nissan",
        "Skyline",
        "NSW - Sydney",
        "$45,000"
      ],
      "line": 21,
      "id": "search-functionality;user-should-search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Peugeot",
        "RCZ",
        "NSW - New England",
        "$50,000"
      ],
      "line": 22,
      "id": "search-functionality;user-should-search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Toyota",
        "Prius",
        "QLD - All",
        "$40,000"
      ],
      "line": 23,
      "id": "search-functionality;user-should-search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Tesla",
        "Model S",
        "VIC - All",
        "$90,000"
      ],
      "line": 24,
      "id": "search-functionality;user-should-search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Rolls-Royce",
        "Any Model",
        "QLD - All",
        "$150,000"
      ],
      "line": 25,
      "id": "search-functionality;user-should-search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4447053100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should search the buy car with model",
  "description": "",
  "id": "search-functionality;user-should-search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"3 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 129756000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 689807600,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1326287800,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1066403700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 161929100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Series",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 206725400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 160898300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 153175900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2460084600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 1160554600,
  "status": "passed"
});
formatter.after({
  "duration": 759471300,
  "status": "passed"
});
formatter.before({
  "duration": 3597738200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should search the buy car with model",
  "description": "",
  "id": "search-functionality;user-should-search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Skyline\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$45,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Nissan\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 22400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 255438700,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1472554700,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1062793100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 182788100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Skyline",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 204873400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 146673000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 166333100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1948496900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 1143870800,
  "status": "passed"
});
formatter.after({
  "duration": 740396600,
  "status": "passed"
});
formatter.before({
  "duration": 3670101900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should search the buy car with model",
  "description": "",
  "id": "search-functionality;user-should-search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Peugeot\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"RCZ\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - New England\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Peugeot\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 29900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 630066100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1549463500,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1070361400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peugeot",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 153622600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RCZ",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 158192700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - New England",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 162656400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 162036400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1847083400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peugeot",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 1067344800,
  "status": "passed"
});
formatter.after({
  "duration": 719637800,
  "status": "passed"
});
formatter.before({
  "duration": 3523202800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should search the buy car with model",
  "description": "",
  "id": "search-functionality;user-should-search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Toyota\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Prius\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Toyota\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 24400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 802996000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1368573200,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1063557800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toyota",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 158833700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prius",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 190657700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 162148700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 170458600,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2601902000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toyota",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 1104177500,
  "status": "passed"
});
formatter.after({
  "duration": 737372700,
  "status": "passed"
});
formatter.before({
  "duration": 4396283300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should search the buy car with model",
  "description": "",
  "id": "search-functionality;user-should-search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Tesla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Model S\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"VIC - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Tesla\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 22600,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 244670300,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1293114200,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1048030900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tesla",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 162752800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Model S",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 167903200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - All",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 176367700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 152731900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2407239900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tesla",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 1057316100,
  "status": "passed"
});
formatter.after({
  "duration": 740403900,
  "status": "passed"
});
formatter.before({
  "duration": 3651100200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should search the buy car with model",
  "description": "",
  "id": "search-functionality;user-should-search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Rolls-Royce\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Any Model\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$150,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Rolls-Royce\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 25000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 419743000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 1435096700,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1048679700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rolls-Royce",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 165421200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Model",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 146932400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 165127200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$150,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 140587100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2354624600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rolls-Royce",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 1063081000,
  "status": "passed"
});
formatter.after({
  "duration": 738045500,
  "status": "passed"
});
});