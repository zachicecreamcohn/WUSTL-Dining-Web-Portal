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

@app.route('/productsales')
def customercategories():
    return render_template('productsales.html', title='SALES')

@app.route('/customcompare')
def compare():
    return render_template('customcompare.html', title='CUSTOM COMPARE')

@app.route('/settings')
def settings():
    return render_template('settings.html', title='SETTINGS')



# Testing Chart



if __name__ == '__main__':
    app.run(debug=True)