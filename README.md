# Back Button-ish

A simple example project that shows how to override the `ion-back-button` using an Angular Route Guard.

## Installation

1. Clone the repository: `git clone https://github.com/marlon-ionic/back-buttonish.git`
2. Install dependencies: `npm install`

## Usage

1. Run the development server: `ionic serve`
2. Open your browser and navigate to `http://localhost:8100/home`

## Getting Started

- Launch the app and navigate from `home` to the `next` route by tapping the `Next` button.
- Tap the `Back` button to navigate back to the `home` route. Instead of navigating back to home, you will be redirected to the `alternate` route. This is because the `home` route is protected by the `homeGuard` functional Route Guard.
  