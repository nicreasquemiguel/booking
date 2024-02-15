from django.db import models
from django.contrib.auth.models  import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.
class UserAccountManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, phone, password=None):
        if not email:
            raise ValueError('Usuarios necesitan un correo electronico')
        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name=last_name, phone=phone)

        user.set_password(password)
        user.save(using=self._db)


        return user
    
    def create_superuser(self, email, first_name, last_name, phone, password):
        """ Create a new superuser profile """
        user = self.create_user(email,first_name, last_name,  phone, password)
        user.is_superuser = True
        user.is_staff = True

        user.save(using=self._db)

        return user



class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique= True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name','phone']

    def get_full_name(self):
        return self.first_name + self.last_name
    
    def get_short_name(self):
        return self.first_name
    
    def __str__(self):
        return self.first_name + " " + self.last_name
