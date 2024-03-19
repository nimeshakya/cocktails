from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model
UserModel = get_user_model()

# custom form data validation
def custom_validation(data):
    email = data['email'].strip()
    password = data['password'].strip()
    ## check same email
    if not email or UserModel.objects.filter(email = email).exists():
        raise ValidationError('choose another email')
    ## password validation
    if not password or len(password) < 8:
        raise ValidationError('choose another password (min 8 characters)')
    return data

# custom email validation (existence of email in data)
def validate_email(data):
    email = data['email'].strip()
    if not email:
        raise ValidationError("An email is required!")
    return True

# custom username validation (existence)
def validate_username(data):
    username = data['username'].strip()
    if not username:
        raise ValidationError("Choose another username!")
    return True

# custom password validation (existence)
def validate_password(data):
    password = data['password'].strip()
    if not password:
        raise ValidationError('A password is required!')
    return True