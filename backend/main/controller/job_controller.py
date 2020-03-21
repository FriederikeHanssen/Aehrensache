from flask import request, render_template, make_response
from flask_restplus import Resource, Namespace
from flask import current_app as app
from main.model import job
from main.database import db
from main.util.dto import job_dto


ns = Namespace('job', description='Job')
ns.add_model(job_dto.name, job_dto)

""" 
@ns.route('/')
def add_job():
   
    task = request.args.get('task')
    duration = request.args.get('duration')
    farmer_id = request.args.get('farmer_id') 
    if task:
        existing_job = Job.query.filter(Job.task == task and Job.farmer_id == farmer_id and Job.duration == duration).first()
        if existing_job:
            return make_response(f'{task} ({farmer_id}) already created!')
        new_job = Job(task=task,
                        duration=duration,
                        farmer_id=farmer_id
                        )
        db.session.add(new_job)  # Add new User record to database
        db.session.commit()  # Commit all changes
    return make_response(f"{new_job} successfully created!") """