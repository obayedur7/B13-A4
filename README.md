
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById : selects only one element using its unique id.
getElementsByClassName : selects multiple elements with the same class.
querySelector : selects the first matching element using CSS selectors 
querySelectorAll selects all matching elements and returns them as a list.


2. How do you create and insert a new element into the DOM?
To create and insert a new element into the dom I will  create an empty filter “section” in my HTML file and make a “id” like  id= “filter-section” for the section. Then create a variable like filterSection in the js file using the “id” like  const filterSection  = document.getElementById(‘filter-section); . Then I created a function like function renderInterview ( ) . Then into the function I used innerHTML for the filterSection like filterSection.innerHTML = “ ”.   Then I create a div using createElement  like  let div = document.createElement(‘div’). Then add HTML in the div using innerHTML like div.innerHTML = `   something i want to add` .  Then append the div in the filterSection using  appendChild like  filterSection.appendChild(div).   Then I call the function when I want to make a new element using the onclick = ‘ ’ sector.


3. What is Event Bubbling? And how does it work?
Event bubbling is a behavior in JavaScript where an event starts from the element you click and then moves up to its parent elements. In simple words, when you click something, the event doesn’t stay there it goes upward step by step through the structure of the webpage.
For example, if you click a button inside a div, the event will first happen on the button, then it will go to the div, and then continue to higher elements. This happens automatically, but you can stop it using event.stopPropagation () . It is useful because you don’t always need to add events to every element separately.


4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation in JavaScript is a technique where you add a single event listener to a parent element instead of adding separate listeners to each child element. The parent handles events for its children by using event bubbling and checking which element triggered the event. It is useful because it improves performance and reduces code. You don’t need to attach many event listeners, and it also works for dynamically added elements, meaning even new elements will respond to the event without extra code.


5. What is the difference between preventDefault() and stopPropagation() methods?
The preventDefault () method is used to stop the default behavior of an element. For example, it can prevent a form from submitting or stop a link from opening a new page when clicked. It only affects the browser’s default action, not the event flow.On the other hand, stopPropagation () is used to stop the event from moving to parent elements. It controls the event flow (bubbling or capturing), but it does not stop the default behavior of the element.
