from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__)

# Load alumni data
alumni_data = pd.read_excel('data/DataSet.xlsx')  # Ensure this file is placed correctly

# Route for the home page
@app.route('/')
def index():
    return render_template('index.html')

# Route to display alumni profiles based on search criteria
@app.route('/search', methods=['POST'])
def search():
    query = request.form.get('query').strip()  # Remove leading/trailing spaces
    
    # Ensure the query is not empty
    if not query:
        return render_template('index.html', error="Please enter a search term.")  # Add an error message to the homepage
    
    # Split query in case user enters both first and last name
    query_parts = query.split()
    
    # Create filters for first and last name matches
    if len(query_parts) == 1:
        # Search by either first name or last name (exact match)
        filtered_data = alumni_data[
            (alumni_data['first_name'].str.lower() == query.lower()) | 
            (alumni_data['last_name'].str.lower() == query.lower())
        ]
    elif len(query_parts) == 2:
        # Search by both first and last name
        first_name_query, last_name_query = query_parts
        filtered_data = alumni_data[
            (alumni_data['first_name'].str.lower() == first_name_query.lower()) &
            (alumni_data['last_name'].str.lower() == last_name_query.lower())
        ]
    else:
        # Handle invalid queries with more than 2 words
        return render_template('index.html', error="Please enter only a first or last name, or both.")
    
    # Check if any results were found
    if filtered_data.empty:
        return render_template('results.html', alumni=[], message="Sorry, no alumni found.")  # Pass message to template
    
    # Render the results page, passing the filtered alumni data
    return render_template('results.html', alumni=filtered_data.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
