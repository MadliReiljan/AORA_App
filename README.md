# AORA

Aora is a video-sharing application where users can easily log in, upload videos with thumbnails and captions, and interact with trending content. 
This app was built as part of a tutorial video to help me learn and practice building mobile applications. It serves as a foundational project that will guide me in creating more advanced apps in the future. 

You can follow the tutorial here: https://www.youtube.com/watch?v=ZBCUegTZF7M

## Installation

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

* Git
* Node.js (v20.11.1)
* npm (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/MadliReiljan/AORA_App
cd aora
```
### Installation

Install the project dependencies:

```bash
npm install
```
```bash
npx create-expo-app@latest
```
### Running the Project

```bash
 npx expo start -c
```

### Expo Go

Download the Expo Go app onto your device, then use it to scan the QR code from Terminal and run.
NP! There may be some visual differences when using Android phone, because the app was made for IOS users.

### Using Appwrite

https://appwrite.io/ > create an account > create a project and choose either IOS or android

Create a database with 2 tables and a few attributes - it is also shown in the video. Create a connection between the application and the database - creating the appwrite.js file in lib and adding the necessary keys.



## Features

* Onboarding Screen: Engaging graphics and clear instructions welcome users to the app.

* Robust Authentication & Authorization System: Secure email login safeguards user accounts.

* Dynamic Home Screen with Animated Flat List: Smoothly animated flat list showcases the latest videos for seamless browsing.

* Pull-to-Refresh Functionality: Users can refresh content with a simple pull gesture for up-to-date information.

* Full-Text Search Capability: Efficiently search through videos with real-time suggestions and instant results.

* Tab Navigation: Navigate between sections like Home, Search, and Profile with ease using tab navigation.

* Post Creation Screen for Uploading Media: Upload video and image posts directly from the app with integrated media selection.

* Profile Screen with Detailed Insights: View account details and activity, including uploaded videos and follower count, for a personalized experience.

* Responsiveness: Smooth performance and adaptability across various devices and screen sizes for a consistent user experience.

* Animations: Dynamic animations using the Animatable library to enhance user interaction and engagement throughout the app's UI.

and many more, including code architecture and reusability
