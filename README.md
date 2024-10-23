# Alumni_Directory
Here’s a stepwise breakdown of what your Flask-based project is doing:

### Steps:

1. **Start the Flask Web Application:**
   - Run the command `python app.py` to launch the Flask web server.
   - The server renders the alumni directory interface, allowing users to interact with the app.

2. **Load Alumni Data:**
   - The Flask app loads alumni data from an external dataset (e.g., an Excel file) hosted at a specific URL.
   - The data is processed on the backend to be displayed on the frontend.

3. **Search for Alumni:**
   - Users can search for alumni by entering their first name, last name, or both.
   - The Flask backend processes these queries and filters the alumni data accordingly.

4. **Display Alumni Profiles:**
   - Alumni profiles are dynamically displayed on the web page using JavaScript.
   - HTML and CSS (styled with Tailwind and Font Awesome) are used to create a clean and responsive layout.

5. **Paginate Results:**
   - Alumni profiles are shown in a paginated view, with a set number of profiles per page.
   - JavaScript handles switching between pages.

The project will continue functioning even if the dataset is updated or changed in the future.
