package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
				features = "src/main/java/Features/contacts.feature",
				glue = {"StepDefinitions"},
//				glue = { "StepDefinitions" },
				plugin = { "pretty", "html:target/cucumber-html-report", "json:target/cucumber-json-report" },
//				strict = true,
//				monochrome = true,
				dryRun = false
)

public class TestRunner {

}