from main import app
"""
uwsgi.ini 파일
chdir=./
wsgi-file=./run.py(flask 앱 진입점)
callable=app
"""

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
