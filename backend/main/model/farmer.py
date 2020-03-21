from main.database import db

class Landwirt(db.Model):
    __tablename__ = 'landwirt'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(120), unique=True, nullable=False)
    zipcode = db.Column(db.String(120), nullable=False)
    job = db.relationship('Job') #, back_populates="farmer")

    def __repr__(self):
        return '<Landwirt {}>'.format(self.name)
