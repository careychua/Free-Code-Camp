# Free Code Camp Project
## Technical Documentation Page

![Technical Documentation Page](Technical%20Documentation%20Page/images/FCC%20Technical%20Documentation%20Page.gif)

[CodePen.io](https://codepen.io/careychua/pen/LYpJwNV)


## Project Requirements
1. There is the ```main``` element with a corresponding ```id="main-doc"```, which contains the page's main content (technical documentation).

2. Within the ```#main-doc``` element, there are several section elements, each with a class of ```main-section```. There should be a minimum of 5.
   
3. The first element within each .```main-section``` should be a ```header``` element which contains text that describes the topic of that section.
   
4. Each ```section``` element with the class of ```main-section``` should also have an ```id``` that corresponds with the text of each header contained within it. Any spaces should be replaced with underscores (e.g. The ```section``` that contains the header "JavaScript and Java" should have a corresponding ```id="JavaScript_and_Java"```).
   
5. The ```.main-section``` elements should contain at least 10 ```p``` elements total (not each).
   
6. The ```.main-section``` elements should contain at least 5 ```code``` elements total (not each).
   
7. The ```.main-section``` elements should contain at least 5 ```li``` items total (not each).
   
8. There is a ```nav``` element with a corresponding ```id="navbar"```.
   
9. The ```navbar``` element should contain one ```header``` element which contains text that describes the topic of the technical documentation.
    
10. The navbar should contain link (```a```) elements with the class of ```nav-link```. There should be one for every element with the class ```main-section```.
    
11. The ```header``` element in the navbar must come before any link (```a```) elements in the navbar.
    
12. Each element with the class of ```nav-link``` should contain text that corresponds to the ```header``` text within each ```section``` (e.g. if there is a "Hello world" section/header, the navbar should have an element which contains the text "Hello world").
    
13. When a navbar element is clicked, the page should navigate to the corresponding section of the ```main-doc``` element (e.g. If a ```nav-link``` element that contains the text "Hello world" is clicked, the page navigates to a ```section``` element that has that id and contains the corresponding ```header```.
    
14. On regular sized devices (laptops, desktops), the element with ```id="navbar"``` should be shown on the left side of the screen and should always be visible to the user.

15. There should be at least one media query.
