# Import all Flask components
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify, Markup
import datetime
# initialize the Flask application
app = Flask(__name__)

labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

values = [96.5, 98.5, 99.5, 100.5, 101.5, 102.5, 103.5, 104.5, 105.5, 106.5, 107.5, 108.5]

colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d', '#6f42c1', '#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545']

@app.route('/')
def home():
    # today's date in YYYY-MM-DD format
    now = datetime.datetime.now()
    today = now.strftime("%Y-%m-%d")

    line_labels = labels
    line_values = values
    return render_template('dashboard.html', title='DASHBOARD', max=120, labels=line_labels, values=line_values, set=zip(line_labels, line_values, colors), today=today)

@app.route('/locations')
def about():
    return render_template('locations.html', title='LOCATIONS')

# subroutes for each location
@app.route('/locations-<location>')
def location(location):
    return render_template(f'{location}.html', title=location.upper(), location=location)

@app.route('/productsales')
def customercategories():
    return render_template('productsales.html', title='SALES')

# some dummy data for search results
class Product:
    def __init__(self, name, price, cost, type, description, ingredients, number_sold_today):
        self.name = name
        self.price = price
        self.cost = cost
        self.type = type
        self.description = description
        self.ingredients = ingredients
        self.number_sold_today = number_sold_today
        

## the dummy data in a list of Product objects
products = [
    Product('Coffee', '$1.00', '$0.50', 'Coffee', 'This is a description of the coffee', 'drink', '100'),
    Product('Bagel', '$1.00', '$0.50', 'Bagel', 'This is a description of the bagel', 'Bread', '100'),
    Product('Cake', '$1.00', '$0.50', 'Cake', 'This is a description of the cake', 'Dessert', '100'),
    Product('Cookie', '$1.00', '$0.50', 'Cookie', 'This is a description of the cookie', 'Dessert', '100'),
    Product('Cupcake', '$1.00', '$0.50', 'Cupcake', 'This is a description of the cupcake', 'Dessert', '100'),
    Product('Orange Juice', '$1.00', '$0.50', 'Juice', 'This is a description of the juice', 'Drink', '100'),
    Product('Apple Juice', '$1.00', '$0.50', 'Juice', 'This is a description of the juice', 'Drink', '100'),
    Product('Water', '$1.00', '$0.50', 'Water', 'This is a description of the water', 'Drink', '100'),
    Product('Sweet Potato Wrap', '$1.00', '$0.50', 'Wrap', 'This is a description of the wrap', 'Pre-packaged', '100'),
    Product('Chips', '$1.00', '$0.50', 'Chips', 'This is a description of the chips', 'Pre-packaged', '100'),
    Product('Candy', '$1.00', '$0.50', 'Candy', 'This is a description of the candy', 'Pre-packaged', '100'),
]

# subroutes for each product menu option
@app.route('/productsales-<menuoption>', methods=['GET', 'POST'])
def product(menuoption):
    if menuoption == 'search':
        if request.method == 'POST':
            # get search term
            searchterm = request.form['searchterm']
            
            # TODO: build search engine for products

            # return search results

            # results are in a list of Product objects. This is DUMMY DATA created above
            results= products
            return render_template('search.html', title='SEARCH', searchterm=searchterm, results=results)
        
    return render_template(f'{menuoption}.html', title=menuoption.upper(), menuoption=menuoption)

@app.route('/customcompare')
def compare():
    return render_template('customcompare.html', title='CUSTOM COMPARE')

@app.route('/settings')
def settings():
    return render_template('settings.html', title='SETTINGS')



# Testing Chart



if __name__ == '__main__':
    app.run(debug=True)