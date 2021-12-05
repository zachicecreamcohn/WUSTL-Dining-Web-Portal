# Import all Flask components
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify

# initialize the Flask application
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', title='DASHBOARD')

@app.route('/locations')
def about():
    return render_template('locations.html', title='LOCATIONS')

@app.route('/productsales')
def customercategories():
    return render_template('productsales.html', title='SALES')

@app.route('/customcompare')
def compare():
    return render_template('customcompare.html', title='CUSTOM COMPARE')

@app.route('/settings')
def settings():
    return render_template('settings.html', title='SETTINGS')



if __name__ == '__main__':
    app.run(debug=True)