from flask import Blueprint, render_template

bp = Blueprint('parking_map', __name__)

@bp.route('/parking-map')
def parking_map():
    # 주차장 목록을 가져오는 로직을 추가 (예: DB에서 조회)
    return render_template('parking-map.html')
