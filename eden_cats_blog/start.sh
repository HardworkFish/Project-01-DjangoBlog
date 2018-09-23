#!/bin/bash

python3 manage.py collectstatic --noinput &&
python3 manage.py migrate &&
gunicorn eden_cats_blog.wsgi:application -c gunicorn.conf


