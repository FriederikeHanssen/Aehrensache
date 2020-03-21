from . import db

class Landwirt(db.Model):
    __tablename__ = 'landwirt'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(120), unique=True, nullable=False)
    zipcode = db.Column(db.String(120), nullable=False)
    #job = db.relationship('Job') #, back_populates="farmer")

    def __repr__(self):
        return '<Landwirt {}>'.format(self.name)


class Job(db.Model):
    __tablename__ = 'job'
    job_id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(120), nullable=False)
    duration = db.Column(db.String(120), nullable=False)
    #farmer = db.relationship("Landwirt", back_populates="job")
    farmer_id = db.Column(db.Integer, db.ForeignKey('landwirt.id'))

    def __repr__(self):
        return '<Job ID %r>' % self.job_id