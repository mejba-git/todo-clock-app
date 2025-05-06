# **ToDo App with Digital Clock**

## **Overview**

This is a simple ToDo web application with aRetro-inspired digital clock. It allows you to manage your tasks and keep track of time.

**Live Demo:** https://todo-clock-app.vercel.app/

## **Features**

* **ToDo List:**  
  * Add new tasks to your list.  
  * View all your added tasks.  
  * Delete tasks from the list.  
* **Digital Clock:**  
  * Displays the current time in a digital format.  
  * Shows the day of the week.  
  * Displays the date and year.  
  * Retro-style design with neon colors.

## **Technologies Used**

* HTML  
* CSS  
* JavaScript  
* Local Storage (for persisting ToDo items)  
* Digital-Fonts

## **Setup**

1. Clone the repository:  
   \* git clone \<repository\_url\>  
2. Open the HTML file:  
   \* Open the index.html file in your web browser.

## **Usage**

* **Adding a task:**  
  * Enter your task in the input field labeled "Today's Plan".  
  * Click the "Add now" button.  
* **Viewing tasks:**  
  * All added tasks are displayed in the list section.  
* **Deleting a task:**  
  * Click the "X" button next to the task you want to delete.  
* **Viewing the clock:**  
  * The digital clock is displayed on the right side of the page. It shows the current time, day, date, and year.

## **CSS Files**

* **style.css:** Contains all the styles for the application, including colors, layout, and fonts.  
* **fonts.css:** Imports the 'Digital-Fonts' and 'Poppins' fonts.

## **JavaScript Files**

* **script.js:** Contains all the javascript logic for the web application.

## **Fonts**

* **TickingTimebombBB.ttf:** This file is used for the digital clock display. Ensure it is in the ./fonts/ directory.

## **Key Features**

1. **Dynamic Clock:** The updateClock() function updates the time every second using setInterval(). The Date() object is used to get the current time.  
2. **Local Storage:**  
   * getItemsFromLocalStorage() retrieves saved todo items from local storage.  
   * saveItemsToLocalStorage(items) saves the todo items to local storage.  
3. **Dynamic List Rendering:** The renderTodoList() function updates the listSection with the current todo items. It creates div elements for each item and adds them to the DOM.  
4. **Adding Items:** The setItem() function adds a new item to the todo list, saves it to local storage, and refreshes the list display.  
5. **Deleting Items:** The deleteItem(index) function removes an item from the todo list, updates local storage, and refreshes the list display.

## **Explanation of HTML structure**

* **Container**: Wraps the main content of the application  
* **Todo Main**: Contains the logo and the todo input section  
* **Todo Input**: Contains the input field and the add button.  
* **List Section**: Section where the list of todo items is displayed  
* **Main**: Wraps the watch section.  
* **Watch**: Displays the digital clock.  
* **WatchTop**: Displays Day and Year  
* **WatchBody**: Displays Hour, minute and the separator.  
* **WatchButtom**: Displays AM/PM, Second, and Date.

## **Explanation of CSS**

The CSS provides a dark theme with neon accents, ensuring a retro yet modern look. Flexbox is used for the layout of the main container, todo input, watch body, and list items, enabling a responsive design. Custom font is used for the digital clock.

## **JavaScript Logic**

1. **Clock Functionality**:  
   * The updateClock() function gets the current time, formats it, and updates the clock elements in the HTML.  
   * setInterval() is used to call updateClock() every second, updating the display in real-time.  
2. **Todo List Functionality**:  
   * getItemsFromLocalStorage() and saveItemsToLocalStorage(items) handle loading and saving tasks to local storage, respectively.  
   * renderTodoList() dynamically displays the todo list.  
   * setItem() adds a new task to the list.  
   * deleteItem(index) removes a task from the list.

## **Fonts**

* **Poppins:** This is a modern sans-serif font used for the main text.  
* **Digital-Fonts:** This is a custom font (TickingTimebombBB.ttf) used to give the clock a digital appearance.

## **Improvements**

* Add more features like marking tasks as complete.  
* Implement more complex styling.  
* Make the application responsive.