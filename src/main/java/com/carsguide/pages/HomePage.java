package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    private static final Logger log= LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement buy_SellTopTab;

    @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchCarLink;

    public void mouseHoverOnBuyAndSellTopTab(){
        log.info("Mouse hover on : "+buy_SellTopTab.toString());
        mouseHoverToElement(buy_SellTopTab);
    }

    public void clickOnSearchCarLink(){
        log.info("Clicking on : "+searchCarLink.toString());
        clickOnElement(searchCarLink);
    }
}
