from flask import Blueprint, render_template

bp = Blueprint('car-info', __name__)

@bp.route('/car-info')
def entry_exit():
    return render_template('car-info.html', title="Car Info")
