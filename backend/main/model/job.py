from ..__init__ import db

class Job(db.Model):
    __tablename__ = 'job'
    job_id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(120), nullable=False)
    duration = db.Column(db.String(120), nullable=False)
    #farmer = db.relationship("Landwirt", back_populates="job")
    farmer_id = db.Column(db.Integer, db.ForeignKey('landwirt.id'))

    def __repr__(self):
        return '<Job ID %r>' % self.job_id