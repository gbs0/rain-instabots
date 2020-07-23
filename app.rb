require "selenium-webdriver"

driver = Selenium::WebDriver.for :chrome

# Convenient way
driver.get 'https://www.instagram.com/p/CC_cEcbF3Y0/'

# Longer Way
# driver.navigate.to 'https://selenium.dev'