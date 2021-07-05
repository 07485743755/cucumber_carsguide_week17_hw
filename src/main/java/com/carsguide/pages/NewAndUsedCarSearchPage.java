package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class NewAndUsedCarSearchPage extends Utility {

    private static final Logger log= LogManager.getLogger(NewAndUsedCarSearchPage.class.getName());

    @FindBy(xpath = "//h1[contains(text(),'New & Used Car Search - carsguide')]")
    WebElement pageTitleText;
    @FindBy(xpath = "//select[@id='makes']")
    WebElement makeDropDown;
    @FindBy(xpath = "//select[@id='models']")
    WebElement modelDropDown;
    @FindBy(xpath = "//select[@id='locations']")
    WebElement locationDropDown;
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement priceDropDown;
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findMyCarButton;

    public String getPageTitleText(){
        log.info("Getting text from : "+pageTitleText.toString());
        return getTextFromElement(pageTitleText);
    }
    public void selectMakeFromDropDown(String make){
        log.info("Select make from : "+makeDropDown);
        selectByVisibleTextFromDropDown(makeDropDown,make);
    }
    public void selectModelFromDropDown(String model){
        log.info("Select model from : "+modelDropDown.toString());
        selectByVisibleTextFromDropDown(modelDropDown,model);
    }
    public void selectLocationFromDropDown(String location){
        log.info("Select location from : "+locationDropDown.toString());
        selectByVisibleTextFromDropDown(locationDropDown,location);
    }
    public void selectPriceFromDropDown(String price){
        log.info("Select price from : "+priceDropDown.toString());
        selectByVisibleTextFromDropDown(priceDropDown,price);
    }
    public void clickOnFindMyCarButton(){
        log.info("Clicking on : "+findMyCarButton.toString());
        clickOnElement(findMyCarButton);
    }

}
