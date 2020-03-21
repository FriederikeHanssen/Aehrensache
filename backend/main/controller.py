from flask import request, render_template, make_response
from flask import current_app as app
from .models import db, Landwirt


@app.route('/', methods=['GET'])
def create_user():
    """Create a user."""
    name = request.args.get('user')
    email = request.args.get('email')
    phone = request.args.get('phone')
    zipcode = request.args.get('zipcode')
    if name and email:
        existing_user = Landwirt.query.filter(Landwirt.name == name or Landwirt.email == email).first()
        if existing_user:
            return existing_user
        new_user = Landwirt(name=name,
                        email=email,
                        phone = phone,
                        zipcode = zipcode
                        )
        db.session.add(new_user)  # Add new User record to database
        db.session.commit()  # Commit all changes
    return new_user