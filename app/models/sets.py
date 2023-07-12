from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy import UniqueConstraint
from .set_folder import set_folders

class Set(db.Model):
    __tablename__ = "sets"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(15), nullable=False)
    description = db.Column(db.String(100),nullable=False)
    draft = db.Column(db.Boolean, default = False)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)


    user = db.relationship("User",back_populates = "set")

    setOfCards = db.relationship("Card", back_populates = "cardsInSet", cascade="all, delete")

    setRating = db.relationship("Rating", back_populates = "set", cascade="all, delete")

    setsInFolder = db.relationship(
        "Folder",
        secondary=set_folders,
        backref="foldersOfSets",
    )

    UniqueConstraint("name","userId", name="idx_name_userId")