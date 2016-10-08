//The following line is critical for menu operation, and MUST APPEAR ONLY ONCE. If you have more than one menu_array.js file rem out this line in subsequent files
menunum=0;menus=new Array();_d=document;function addmenu(){menunum++;menus[menunum]=menu;}function dumpmenus(){mt="<scr"+"ipt language=javascript>";for(a=1;a<menus.length;a++){mt+=" menu"+a+"=menus["+a+"];"}mt+="<\/scr"+"ipt>";_d.write(mt)}
//Please leave the above line intact. The above also needs to be enabled if it not already enabled unless this file is part of a multi pack.



////////////////////////////////////
// Editable properties START here //
////////////////////////////////////

// Special effect string for IE5.5 or above please visit 
effect = "Fade(duration=0.2);Alpha(style=0,opacity=88);Shadow(color='#777777', Direction=135, Strength=5)"


timegap=500			// The time delay for menus to remain visible
followspeed=5		// Follow Scrolling speed
followrate=40		// Follow Scrolling Rate
suboffset_top=4;	// Sub menu offset Top position 
suboffset_left=6;	// Sub menu offset Left position
closeOnClick = true

style1=[			// style1 is an array of properties. You can have as many property arrays as you need. This means that menus can have their own style.
"black",			// Mouse Off Font Color
"orange",			// Mouse Off Background Color
"66ff66",			// Mouse On Font Color
"006699",			// Mouse On Background Color
"006699",			// Menu Border Color 
12,					// Font Size in pixels
"normal",			// Font Style (italic or normal)
"bold",				// Font Weight (bold or normal)
"Verdana, Arial",	// Font Name
4,					// Menu Item Padding
"arrow.gif",		// Sub Menu Image (Leave this blank if not needed)
,					// 3D Border & Separator bar
"66ffff",			// 3D High Color
"000099",			// 3D Low Color
,			// Current Page Item Font Color (leave this blank to disable)
,				// Current Page Item Background Color (leave this blank to disable)
"arrowdn.gif",		// Top Bar image (Leave this blank to disable)
"ffffff",			// Menu Header Font Color (Leave blank if headers are not needed)
"000099",			// Menu Header Background Color (Leave blank if headers are not needed)
"006699"			// Menu Item Separator Color
]


addmenu(menu=[		// This is the array that contains your menu properties and details
"mainmenu",			// Menu Name - This is needed in order for the menu to be called
,					// Menu Top - The Top position of the menu in pixels
,					// Menu Left - The Left position of the menu in pixels
,					// Menu Width - Menus width in pixels
1,					// Menu Border Width 
"center",			// Screen Position - here you can use "center;left;right;middle;top;bottom" or a combination of "center:middle"
style1,				// Properties Array - this is set higher up, as above
1,					// Always Visible - allows the menu item to be visible at all time (1=on/0=off)
"left",				// Alignment - sets the menu elements text alignment, values valid here are: left, right or center
,					// Filter - Text variable for setting transitional effects on menu activation - see above for more info
,					// Follow Scrolling - Tells the menu item to follow the user down the screen (visible at all times) (1=on/0=off)
1, 					// Horizontal Menu - Tells the menu to become horizontal instead of top to bottom style (1=on/0=off)
,					// Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page (1=on/0=off)
,					// Position of TOP sub image left:center:right
,					// Set the Overall Width of Horizontal Menu to 100% and height to the specified amount (Leave blank to disable)
,					// Right To Left - Used in Hebrew for example. (1=on/0=off)
,					// Open the Menus OnClick - leave blank for OnMouseover (1=on/0=off)
,					// ID of the div you want to hide on MouseOver (useful for hiding form elements)
,					// Background image for menu when BGColor set to transparent.
,					// Scrollable Menu
,					// Reserved for future use
,"Home","home.htm",,"Back to the home page",1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"About&nbsp;the&nbsp;Conference&nbsp;","show-menu=about",,,1
,"Participation&nbsp;&nbsp;","show-menu=Participation",,,1
,"Location&nbsp;&nbsp;","show-menu=Location",,,1
,"Program&nbsp;&nbsp;","program.html",,,1
,"Abstracts&nbsp;","abstracts_geloba2009.pdf",,,1
,"Related&nbsp;Links&nbsp;","links.html",,,1
,"Sponsors&nbsp;","home.htm\#sponsors",,,1
,"Photos","photos.html",,,1
])

	addmenu(menu=["about",
	,,165,1,"",style1,,"left",effect,,,,,,,,,,,,
	//,"First Announcement","home.htm\#first",,,1
	,"Invited Speakers","home.htm\#invited",,,1
	,"Mini Courses","home.htm\#minis",,,1
	,"Scientific Committee","home.htm\#scientifics",,,1
	,"Organizing Committee","home.htm\#organizers",,,1
	,"Contact","home.htm\#contact",,,1	
	])

	addmenu(menu=["Participation",
	,,155,1,"",style1,,"left",effect,,,,,,,,,,,,
	//,"How to Participate","home.htm\#partecipate",,,1
	//,"How to Participate","comingsoon.html"
	,"Registration","home.htm\#partecipate",,,1
	,"Deadlines","home.htm\#dead",,,1
	,"Participants","participants.html",,,1])
	//,"Participants","comingsoon.html",,,1])

	addmenu(menu=["Location",
	,,180,1,"",style1,,"left",effect,,,,,,,,,,,,
	//,"Location Information","location.html\#info",,,1
	//,"Location Information","comingsoon.html",,,1
	,"Hotel Information","location.html\#hotel",,,1
	,"How to Arrive","location.html\#howto",,,1
		])
	
	addmenu(menu=["Program",,,165,1,"",style1,,"left",effect,,,,,,,,,,,,
	,"Conference Program","scientific_program.pdf",,,1
	//,"Conference Program","comingsoon.html",,,1
	,"Abstracts","abstracts_geloba2009.pdf",,,1
	//,"Social Program","comingsoon.html",,,1
	,"Social Program","social_program.html",,,1
])
	
	
	
	

dumpmenus() 
