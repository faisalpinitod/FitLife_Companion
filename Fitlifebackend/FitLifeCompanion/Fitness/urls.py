from django.urls import path
from .views import (
    UserList, UserDetail, TrainerList, TrainerDetail,
    WorkoutPlanList, WorkoutPlanDetail, NutritionPlanList, NutritionPlanDetail,
    UserWorkoutLogList, UserWorkoutLogDetail, UserNutritionLogList, UserNutritionLogDetail,
    FitnessGoalList, FitnessGoalDetail, ProgressTrackingList, ProgressTrackingDetail,
)

urlpatterns = [
    path('users/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    
    path('trainers/', TrainerList.as_view(), name='trainer-list'),
    path('trainers/<int:pk>/', TrainerDetail.as_view(), name='trainer-detail'),
    
    path('workout-plans/', WorkoutPlanList.as_view(), name='workoutplan-list'),
    path('workout-plans/<int:pk>/', WorkoutPlanDetail.as_view(), name='workoutplan-detail'),
    
    path('nutrition-plans/', NutritionPlanList.as_view(), name='nutritionplan-list'),
    path('nutrition-plans/<int:pk>/', NutritionPlanDetail.as_view(), name='nutritionplan-detail'),
    
    path('user-workout-logs/', UserWorkoutLogList.as_view(), name='userworkoutlog-list'),
    path('user-workout-logs/<int:pk>/', UserWorkoutLogDetail.as_view(), name='userworkoutlog-detail'),
    
    path('user-nutrition-logs/', UserNutritionLogList.as_view(), name='usernutritionlog-list'),
    path('user-nutrition-logs/<int:pk>/', UserNutritionLogDetail.as_view(), name='usernutritionlog-detail'),
    
    path('fitness-goals/', FitnessGoalList.as_view(), name='fitnessgoal-list'),
    path('fitness-goals/<int:pk>/', FitnessGoalDetail.as_view(), name='fitnessgoal-detail'),
    
    path('progress-trackings/', ProgressTrackingList.as_view(), name='progresstracking-list'),
    path('progress-trackings/<int:pk>/', ProgressTrackingDetail.as_view(), name='progresstracking-detail'),
]
