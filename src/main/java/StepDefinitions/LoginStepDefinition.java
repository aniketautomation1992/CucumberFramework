//package StepDefinitions;
//
//import org.junit.Assert;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//public class LoginStepDefinition {
//
//	WebDriver driver;
//
//	@Given("^user is already on login page$")
//	public void user_is_already_on_login_page() {
//		System.setProperty("webdriver.chrome.driver", "D:\\Software Testing\\Softwares\\chromedriver.exe");
//		driver = new ChromeDriver();
//		driver.manage().window().maximize();
//		driver.get("https://ui.freecrm.com");
//	}
//
//	@When("^user title of login page is Free CRM$")
//	public void user_title_of_login_page_is_Free_CRM() {
//		String title = driver.getTitle();
//		System.out.println(title);
//		Assert.assertEquals("Cogmento CRM", title);
//	}
//
//	@Then("^user enters login details \"([^\"]*)\" and \"([^\"]*)\"$")
//	public void user_enters_login_details_and(String username, String password) {
//		driver.findElement(By.xpath("//input[@type='text']")).sendKeys(username);
//		driver.findElement(By.xpath("//input[@type='password']")).sendKeys(password);
//	}
//
//	@Then("^user clicks on login button$")
//	public void user_clicks_on_login_button() {
//		driver.findElement(By.xpath("//div[contains(text(), 'Login')]")).click();
//	}
//
//	@Then("^user clicks on Contacts link$")
//	public void user_clicks_on_Contacts_link() throws InterruptedException {
//		Thread.sleep(5000);
//		driver.findElement(By.xpath("//span[contains(text(), 'Contacts')]")).click();
//	}
//
//	@Then("^user clicks on New button$")
//	public void user_clicks_on_New_button() throws InterruptedException {
//		driver.findElement(By.xpath("//button[contains(text(), 'New')]")).click();
//		Thread.sleep(3000);
//	}
//
//	@Then("^user enters contacts deatils \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
//	public void user_enters_contacts_deatils_and_and_and_and_and(String firstname, String lastname, String address,
//			String city, String state, String zip) {
//		driver.findElement(By.name("first_name")).sendKeys(firstname);
//		driver.findElement(By.name("last_name")).sendKeys(lastname);
//		driver.findElement(By.name("address")).sendKeys(address);
//		driver.findElement(By.name("city")).sendKeys(city);
//		driver.findElement(By.name("state")).sendKeys(state);
//		driver.findElement(By.name("zip")).sendKeys(zip);
//	}
//
//	@Then("^user clicks on save button$")
//	public void user_clicks_on_save_button() throws InterruptedException {
//		Thread.sleep(2000);
//		driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
//	}
//
//	@Then("^user close the browser$")
//	public void user_close_the_browser() {
//		driver.quit();
//	}
//}