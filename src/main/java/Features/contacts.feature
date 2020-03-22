Feature: Free CRM Contacts Feature 

Scenario Outline: Free CRM Contacts Test Scenario
	Given user is already on login page 
	When user title of login page is Free CRM 
	Then user enters login details "<username>" and "<password>" 
	Then user clicks on login button
	Then user clicks on Contacts link
	Then user clicks on New button
	Then user enters contacts deatils "<firstname>" and "<lastname>" and "<address>" and "<city>" and "<state>" and "<zip>" 
	Then user clicks on save button 
	Then user close the browser 
	
	Examples: 
		| username | password | firstname | lastname | address | city | state | zip |
		| any.kkr@gmail.com | Aniket@1992 | Aniket | Korgaonar | Navi Peth | Pune | Maharashtra | 411030 |