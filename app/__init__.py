from flask import Flask, request, send_from_directory
from flask_mail import Mail
from flask_bootstrap import Bootstrap
from flask_babel import Babel

app = Flask(__name__, static_folder='static')

# load config 
app.config.from_pyfile('public_config.py', silent=False)
app.config.from_pyfile('config.py', silent=True)

# modules
bootstrap = Bootstrap(app)
babel = Babel(app)
mail = Mail(app)

@app.route('/robots.txt')
@app.route('/sitemap.xml')
@app.route('/googlee08bc4f482dc3039.html')
def static_from_root():
    return send_from_directory(app.static_folder, request.path[1:])
