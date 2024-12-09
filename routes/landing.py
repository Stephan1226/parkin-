from flask import Blueprint, render_template

bp = Blueprint('landing', __name__)

@bp.route('/landing')
def home():
    return render_template('landing.html', title="Start")
