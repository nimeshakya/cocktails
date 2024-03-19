# our custom user manager
from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _

class AppUserManager(BaseUserManager):
    """
    Custom user manager where email is the unique identifier for authentication
    instead of username
    """
    def create_user(self, email, password, **extra_fields):
        """
        Create and save auser with the given email and password
        """
        if not email:
            raise ValueError(_("The Email must be set!"))
        if not password:
            raise ValueError(_("A password is required!"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a superuser with the given email and password
        """
        extra_fields.setdefault("is_superuser", True)
        
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser = True."))
        
        return self.create_user(email,password, **extra_fields)