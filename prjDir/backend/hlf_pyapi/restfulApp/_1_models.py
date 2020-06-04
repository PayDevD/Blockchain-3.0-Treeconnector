from django.db import models
"""
데이터 전용 객체들 : 필드 형식(Char,Text..)별로 정의 --> 모델 수정시 makemigration, migrate 해야
"""
class Model_test1(models.Model):
	title = models.CharField(max_length=200)
	content = models.TextField()

	def __str__(self):
		return self.title
"""
enum
"""
from django.utils.translation import gettext_lazy as _
class Student(models.Model):
    FRESHMAN = 'FR'
    SOPHOMORE = 'SO'
    JUNIOR = 'JR'
    SENIOR = 'SR'
    GRADUATE = 'GR'
    YEAR_IN_SCHOOL_CHOICES = [
        (FRESHMAN, 'Freshman'),
        (SOPHOMORE, 'Sophomore'),
        (JUNIOR, 'Junior'),
        (SENIOR, 'Senior'),
        (GRADUATE, 'Graduate'),
    ]
    year_in_school = models.CharField(
        max_length=2,
        choices=YEAR_IN_SCHOOL_CHOICES,
        default=FRESHMAN,
	)
#	def is_upperclass(self):
#        return self.year_in_school in {self.JUNIOR, self.SENIOR}

class YearInSchool(models.TextChoices):
	FRESHMAN = 'FR', _('Freshman')
	SOPHOMORE = 'SO', _('Sophomore')
	JUNIOR = 'JR', _('Junior')
	SENIOR = 'SR', _('Senior')
	GRADUATE = 'GR', _('Graduate')

class Student_enum(models.Model):
    year_in_school = models.CharField(
        max_length=2,
        choices=YearInSchool.choices,
        default=YearInSchool.FRESHMAN,
    )
#    def is_upperclass(self):
#		return self.year_in_school in{
#            self.YearInSchool.JUNIOR,
#            self.YearInSchool.SENIOR,
#        }
