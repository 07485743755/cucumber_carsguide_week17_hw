package com.carsguide.cucumber.stepdefs;

import com.carsguide.pages.SelectedCarPages;
import com.carsguide.pages.HomePage;
import com.carsguide.pages.NewAndUsedCarSearchPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BuyStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover on “buy\\+sell” tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().mouseHoverOnBuyAndSellTopTab();
    }

    @And("^I click Search Cars$")
    public void iClickSearchCars() {
        new HomePage().clickOnSearchCarLink();
    }

    @Then("^I navigate to new and used car search page$")
    public void iNavigateToNewAndUsedCarSearchPage() throws InterruptedException {
        Thread.sleep(1000);
        String expectedPageTitle="New & Used Car Search - carsguide";
        Assert.assertEquals(expectedPageTitle,new NewAndUsedCarSearchPage().getPageTitleText());
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make)  {

        new NewAndUsedCarSearchPage().selectMakeFromDropDown(make);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model)  {

        new NewAndUsedCarSearchPage().selectModelFromDropDown(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location)  {

        new NewAndUsedCarSearchPage().selectLocationFromDropDown(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price)  {

        new NewAndUsedCarSearchPage().selectPriceFromDropDown(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() throws InterruptedException {

        Thread.sleep(500);
        new NewAndUsedCarSearchPage().clickOnFindMyCarButton();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String expectedText) throws InterruptedException {

        Thread.sleep(1000);
        Assert.assertTrue(new SelectedCarPages().getPageTitleText().contains(expectedText));

    }
}
