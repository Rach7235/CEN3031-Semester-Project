# Mood Mappers
Mental health issues become more prevalent since the introduction of social media and the pandemic. Our project was envisioned with the idea of addressing mental health struggles. 
Mental health still has a stigma in different places. Individuals may not feel comfortable talking about their mental health openly and do not seek the help that they need. Thats where MoodMappers comes in! MoodMappers is a Javascript-based mobile mood tracking application.

# Description

The goal of our project is to offer various coping methods/strategies to assist individuals with finding ways to better their mental health status. In addition, provide an interface for users to track their mood over time and let out their feelings by writing journal entries. Some features include (in-progress):

# Features

* Login: Allow users to have an account with a username and password (stored in a mongoDB database). This account will contain their saved journal entries and mood data.
* Autosave: Journal entries will be autosaved on a timer. If the user stops typing or exits the application, what they have wrote will be saved.
* Personalized Recommendations: The application will utilize API calls to a chatGPT bot to return an itemized list of recommendations on ways to cope with various mental conditions catered to your journal entry input.
* Daily Reminders: The application will utilize a DuoLingo type streak system by checking date and time of the user's machine to send daily reminders to complete their journal entry everyday. This promotes the user to continue their progress on improving their mental health.
* Personal Goals: Users can set personal goals for themselves and see progress on their goals with a visual tracker. Similar to FitBit.
* Exporting: Users can download their journal entry text to their desktop exported as a pdf or word docx.
* Journal Categorization: Users can categoize journal entries by mood to see insights and keep track of emotional trends.
* Search Entries: User can search their past entries by keyword if they wish to re-read an entry that was previously completed.

# Tools & Frameworks
* Express.js
* MongoDB
* Node.js
* React Native
* Expo/Expo Go
* Visual-Studio (VS) code editor


