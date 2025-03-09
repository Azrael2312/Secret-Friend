# Amigo Secreto (Secret Friend) - Web Application

This is a simple web application that allows you to manage a list of friends and randomly select one as the "Amigo Secreto" (Secret Friend). It's built with HTML, CSS (presumably, though not provided), and JavaScript.

## Features

*   **Add Friends:** Enter a friend's name in the input field and click "Añadir" (Add) or press Enter to add them to the list.
*   **Input Validation:**  The application checks for empty input fields and displays an alert if you try to add a blank name.
*   **View List:**  Displays the list of entered names below the input field.
*   **Random Draw:**  Click the "Sortear amigo" (Draw Friend) button to randomly select a name from the list and display it as the "Amigo Secreto."
*   **Clear Results:**  The previous result is cleared when a new draw is performed.
*   **Enter Key Support:** Pressing the Enter key in the input field adds the name, just like clicking the "Add" button.

## Project Structure

The project consists of the following files:

*   `index.html`:  The main HTML file that defines the structure of the web page.
*   `app.js`:  The JavaScript file that contains the application logic (adding friends, validating input, performing the random draw, and updating the display).
*   `style.css`: (Presumably) The CSS file that styles the appearance of the web page. (Not provided in the original prompt, but referenced in the HTML).
*	`assets/`: (Presumably) A folder that contains images.

## How to Use

1.  **Open `index.html` in a web browser:**  Simply double-click the `index.html` file, or open it directly from your browser's "File > Open" menu.  No web server is required to run this basic version of the application.
2.  **Add Friends:** Type names into the input field and click "Añadir" or press Enter.
3.  **Draw the Secret Friend:** Once you've added at least one name, click "Sortear amigo" to randomly select a name from the list.

## Technologies Used

*   **HTML:**  For the structure of the web page.
*   **CSS:**  For styling the appearance (not provided, but assumed).
*   **JavaScript:** For the application logic (adding names, validation, random selection, and DOM manipulation).
* **DOM API:** The JavaScript code interacts directly with the Document Object Model (DOM) to update the list of names and display the result.

## Improvements / Future Enhancements

Here are some potential improvements that could be made to the application:

*   **CSS Styling:**  Add CSS to improve the visual appearance of the application (make it look nicer).
*   **Local Storage:**  Save the list of friends to the browser's local storage so that the list persists even if the page is refreshed or closed.
*   **Remove Friends:** Add the ability to remove names from the list.
*   **Edit Names:**  Allow users to edit existing names in the list.
*   **Prevent Duplicate Names:**  Add validation to prevent the same name from being added multiple times.
*   **More Sophisticated Draw:** Instead of just showing *one* "Amigo Secreto," implement a full "Secret Santa" draw, where each person is assigned another person to give a gift to (without revealing who is giving to whom). This would require more complex logic to ensure no one is assigned to themselves and that everyone is assigned someone.
*  **Animations:** Use CSS transitions or JavaScript animations to improve the user experience.
*  **Error Handling:** Add more robust error handling (e.g., handling cases where the browser doesn't support local storage).
* **Accessibility** Improve accessibility according to web standards.

## Development Notes
* The application logic is implemented using vanilla JavaScript. It uses `document.getElementById`, `addEventListener`, `createElement`, `appendChild` and `.textContent`, `.value`,`.innerHTML` and other standard DOM manipulation techniques.
* There is validation to prevent empty names.
* A random name is selected from the list.
* The user interface is updated directly via DOM manipulation.

## Author

Andy Zárate


