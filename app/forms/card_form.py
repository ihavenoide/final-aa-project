from flask_wtf import FlaskForm
from wtforms import Stringfield, IntegerField
from wtf.validators import DataRequired, ValidationError
from app.models import Set
from flask_login import current_user

def userOwnsSet(form,field):
    set = Set.query.get(field.data)
    if set.userId != current_user.id:
        raise ValidationError("Unauthorized")

def checkLength(form,field):
    if len(field.data) > 225:
        raise ValidationError("Over character limit")


class cardForm(FlaskForm):
    question = Stringfield("question",validators = [DataRequired()])
    answer = Stringfield("answer",validators = [DataRequired()])
    setId = IntegerField("setId", validators = [DataRequired()])
