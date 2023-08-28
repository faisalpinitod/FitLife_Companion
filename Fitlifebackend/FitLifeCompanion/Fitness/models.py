from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    height = models.FloatField()
    weight = models.FloatField()
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=20)

class Trainer(models.Model):
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    specialization = models.CharField(max_length=100)
    experience = models.IntegerField()
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=20)

class WorkoutPlan(models.Model):
    plan_name = models.CharField(max_length=100)
    goal = models.CharField(max_length=100)
    duration = models.PositiveIntegerField()
    description = models.TextField()
    trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE)

class NutritionPlan(models.Model):
    plan_name = models.CharField(max_length=100)
    goal = models.CharField(max_length=100)
    duration = models.PositiveIntegerField()
    guidelines = models.TextField()
    trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE)

class UserWorkoutLog(models.Model):
    date = models.DateField()
    workout_plan = models.ForeignKey(WorkoutPlan, on_delete=models.CASCADE)
    exercises = models.TextField()
    duration = models.PositiveIntegerField()

class UserNutritionLog(models.Model):
    date = models.DateField()
    nutrition_plan = models.ForeignKey(NutritionPlan, on_delete=models.CASCADE)
    meals = models.TextField()
    caloric_intake = models.PositiveIntegerField()

class FitnessGoal(models.Model):
    GOAL_CHOICES = [
        ('weight_loss', 'Weight Loss'),
        ('muscle_gain', 'Muscle Gain'),
        ('endurance', 'Endurance'),
    ]
    goal_type = models.CharField(max_length=20, choices=GOAL_CHOICES)
    target = models.CharField(max_length=100)
    timeline = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class ProgressTracking(models.Model):
    date = models.DateField()
    weight = models.FloatField()
    body_measurements = models.TextField()
    notes = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
