package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SelectedCarPages extends Utility {
    private static final Logger log= LogManager.getLogger(SelectedCarPages.class.getName());

    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement pageTitleText;

    public String getPageTitleText(){
        log.info("Getting text from : "+pageTitleText.toString());
        return getTextFromElement(pageTitleText);
    }
}
