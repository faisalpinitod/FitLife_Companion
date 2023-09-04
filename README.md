# FitLife Companion

Welcome to the **FitLife Companion** project, a comprehensive health and wellness application that includes both a React.js frontend and a Node.js backend. This README provides an overview of the entire project, including key features, installation instructions, and essential information about both the frontend and backend components.

---

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Frontend](#frontend)
  - [Key Features](#frontend-key-features)
  - [Getting Started (Frontend)](#frontend-getting-started)
- [Backend](#backend)
  - [API Endpoints](#backend-api-endpoints)
  - [Database Schema](#backend-database-schema)
  - [Getting Started (Backend)](#backend-getting-started)


---

## Introduction

The **FitLife Companion** is a comprehensive health and wellness application that consists of both a React.js frontend and a Node.js backend. It empowers users to track their fitness goals, connect with fitness trainers, access personalized workout and nutrition plans, and more. This project offers a hands-on learning experience in building a functional web app while focusing on fundamental web and server-side development techniques.

### Project Structure

The project follows a structured directory layout to maintain code organization and separation of concerns. Key directories and their purposes include:

- `frontend/`: Contains the source code for the React.js frontend app.
- `backend/`: Contains the Node.js server code and API endpoints.
- `docs/`: Documentation files for the project.

For a more in-depth look at the project structure, please refer to the [Project Structure section](#project-structure).

---

## Frontend

The frontend of the FitLife Companion project is a React.js application that provides users with a web-based interface for managing their fitness goals, workout plans, and more. Below are details about the frontend.

### Frontend Key Features

1. **User and Trainer Profiles**: Users can create and manage their profiles, and trainers can do the same. Profile details include name, age, gender, contact information, and more.

2. **Fitness Plans**: Trainers can create workout and nutrition plans tailored to users' fitness goals.

3. **Workout and Nutrition Logs**: Users can log their daily workout and dietary activities, including multiple entries per day.

4. **Fitness Goal Setting**: Users can set and track their fitness goals, updating progress over time.

5. **Dashboard and Insights**: Users have access to a personalized dashboard displaying their plans, goals, progress charts, and achievements.

For more details about the frontend features, please refer to the [Frontend Key Features section](#frontend-key-features).

### Frontend Getting Started

#### Prerequisites

Before you can run the FitLife Companion React.js frontend, make sure you have the following prerequisites:

- [Node.js](https://nodejs.org/) installed on your development machine.
- A code editor of your choice (e.g., Visual Studio Code).

#### Installation

1. Clone the frontend repository to your local machine:

   ```bash
   git clone https://github.com/faisalpinitod/FitLife_Companion.git

# Backend

## API Endpoints

## Trainers

- `/trainers/login` - POST
- `/trainers/signup` - POST

## Workout Plans

- `/workoutPlan` - POST
- `/workoutPlan` - GET
- `/workoutPlan/:id` - GET
- `/workoutPlan/:id` - PATCH
- `/workoutPlan/:id` - DELETE

## Nutrition Plans

- `/nutritionPlan` - POST
- `/nutritionPlan` - GET
- `/nutritionPlan/:id` - GET
- `/nutritionPlan/:id` - PATCH
- `/nutritionPlan/:id` - DELETE

## Users

- `/user/login` - POST
- `/user/signup` - POST

## User Workouts

- `/userworkout` - POST
- `/userworkout` - GET
- `/userworkout/:id` - DELETE

## User Nutrition

- `/usernutrition` - POST
- `/usernutrition` - GET
- `/usernutrition/:id` - DELETE

## Goals

- `/Goal` - POST
- `/Goal` - GET
- `/Goal/:id` - GET
- `/Goal/:id` - PATCH
- `/Goal/:id` - DELETE

## Progress Tracking

- `/progressing` - POST
- `/progressing` - GET
- `/progressing/:id` - GET
- `/progressing/:id` - PATCH
- `/progressing/:id` - DELETE

