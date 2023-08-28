from rest_framework import serializers
from .models import User, Trainer, WorkoutPlan, NutritionPlan, UserWorkoutLog, UserNutritionLog, FitnessGoal, ProgressTracking

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class TrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trainer
        fields = '__all__'

class WorkoutPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutPlan
        fields = '__all__'

class NutritionPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = NutritionPlan
        fields = '__all__'

class UserWorkoutLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserWorkoutLog
        fields = '__all__'

class UserNutritionLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserNutritionLog
        fields = '__all__'

class FitnessGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = FitnessGoal
        fields = '__all__'

class ProgressTrackingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgressTracking
        fields = '__all__'
