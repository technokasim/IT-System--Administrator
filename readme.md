**IT System Administrator -Technical Assessment**

This is the symple crud application which provided for test assesment

**Technologies Used:**
- HTML: For creating the user interface.
- JavaScript: For handling client-side interactions and form validations.
- Node.js: For creating the server-side code.
- Express.js: A Node.js framework for creating server applications.
- SpaceX API: To fetch active capsule data.

**Instructions to Run the Project:**

1. Make sure you have Node.js installed on your computer. You can download it from https://nodejs.org and install it if you haven't already.

2. Clone this repository to your local machine.

3. Open a terminal (or command prompt) and navigate to the project's root directory.

4. Install the required dependencies by running the following command:
   ```
   npm install
   ```

5. To start the server, run the following command:
   ```
   npm start
   ```

6. Once the server is running, open your web browser and go to `http://localhost:3000` to access the application.

**Using the Application:**

1. **Create a New Record:**
   - Fill in all the required fields in the form: Name, Phone Number, Email, and select a Capsule Name from the dropdown.
   - Click the "Create Record" button to add a new record. If any of the fields are invalid, appropriate error messages will be displayed.

2. **View All Records:**
   - Click the "View All Records" button to see all the records created so far.

3. **Update a Record:**
   - To update a record, click the "Update" button next to the record you want to modify. A popup form will appear with the existing record data filled in.
   - Make the necessary changes in the popup.
   - Click the "Update" button in the popup form to update the record. The record will be updated locally in the application.

4. **Remove a Record:**
   - To remove a record, click the "Remove" button next to the record you want to delete. The record will be removed from the list of records.

**Important Note:**
- The application uses a local array `records` to store the records. Any changes made (add, update, remove) will be saved in this local array only.

For any updation feel free to contact me.