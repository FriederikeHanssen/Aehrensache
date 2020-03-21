FROM python:3.6.8

COPY requirements.txt /app/
WORKDIR /app
COPY . ./
RUN pip install -r requirements.txt
CMD ["python", "server.py"]

#https://github.com/sameersbn/docker-postgresql