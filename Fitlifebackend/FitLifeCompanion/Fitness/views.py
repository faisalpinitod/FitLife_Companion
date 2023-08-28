from rest_framework import generics
from .models import User, Trainer, WorkoutPlan, NutritionPlan, UserWorkoutLog, UserNutritionLog, FitnessGoal, ProgressTracking
from .serializers import UserSerializer, TrainerSerializer, WorkoutPlanSerializer, NutritionPlanSerializer, UserWorkoutLogSerializer, UserNutritionLogSerializer, FitnessGoalSerializer, ProgressTrackingSerializer

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TrainerList(generics.ListCreateAPIView):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer

class TrainerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer

class WorkoutPlanList(generics.ListCreateAPIView):
    queryset = WorkoutPlan.objects.all()
    serializer_class = WorkoutPlanSerializer

class WorkoutPlanDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = WorkoutPlan.objects.all()
    serializer_class = WorkoutPlanSerializer

class NutritionPlanList(generics.ListCreateAPIView):
    queryset = NutritionPlan.objects.all()
    serializer_class = NutritionPlanSerializer

class NutritionPlanDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = NutritionPlan.objects.all()
    serializer_class = NutritionPlanSerializer

class UserWorkoutLogList(generics.ListCreateAPIView):
    queryset = UserWorkoutLog.objects.all()
    serializer_class = UserWorkoutLogSerializer

class UserWorkoutLogDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserWorkoutLog.objects.all()
    serializer_class = UserWorkoutLogSerializer

class UserNutritionLogList(generics.ListCreateAPIView):
    queryset = UserNutritionLog.objects.all()
    serializer_class = UserNutritionLogSerializer

class UserNutritionLogDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserNutritionLog.objects.all()
    serializer_class = UserNutritionLogSerializer

class FitnessGoalList(generics.ListCreateAPIView):
    queryset = FitnessGoal.objects.all()
    serializer_class = FitnessGoalSerializer

class FitnessGoalDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = FitnessGoal.objects.all()
    serializer_class = FitnessGoalSerializer

class ProgressTrackingList(generics.ListCreateAPIView):
    queryset = ProgressTracking.objects.all()
    serializer_class = ProgressTrackingSerializer

class ProgressTrackingDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProgressTracking.objects.all()
    serializer_class = ProgressTrackingSerializer
