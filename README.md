# 🧠 Quiz Master - Interactive React Quiz Application

A modern, feature-rich quiz application built with React that provides an engaging and interactive learning experience. Perfect for showcasing React skills and modern web development practices.

![Quiz Master Screenshot](https://via.placeholder.com/800x400/667eea/ffffff?text=Quiz+Master+Application)

## ✨ Features

### 🎯 Core Functionality
- **Interactive Quiz Interface**: Clean, modern UI with smooth animations
- **Multiple Question Categories**: General Knowledge, Science, History, Geography, Literature, Sports
- **Difficulty Levels**: Easy, Medium, Hard with adaptive scoring
- **Customizable Quiz Length**: Choose from 5, 10, 15, 20, or 25 questions
- **Real-time Progress Tracking**: Visual progress bar and question counter
- **Timer Functionality**: Track completion time with bonus scoring

### 🎨 User Experience
- **Modern Design**: Beautiful gradient backgrounds and card-based layout
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: CSS transitions and hover effects throughout
- **Accessibility**: Keyboard navigation and screen reader support

### 📊 Advanced Features
- **Smart Scoring System**: Percentage-based scoring with time bonuses
- **Performance Analytics**: Detailed results with performance feedback
- **Local Storage**: Quiz history and high scores persistence
- **Question Navigation**: Previous/Next buttons for easy navigation
- **Results Dashboard**: Comprehensive score breakdown and statistics

### 🛠️ Technical Features
- **React Hooks**: Modern functional components with useState, useEffect
- **React Router**: Client-side routing for seamless navigation
- **Context API**: Theme management with React Context
- **CSS Modules**: Scoped styling with modern CSS features
- **Local Storage API**: Data persistence across sessions
- **Responsive CSS Grid**: Flexible layout system

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Quiz-Application-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── LandingPage.js          # Main landing page with quiz configuration
│   ├── LandingPage.css         # Landing page styles
│   ├── Quiz.js                 # Quiz container component
│   ├── Quiz.css                # Quiz container styles
│   ├── QuesList.js             # Question list and navigation logic
│   ├── QuesList.css            # Question list styles
│   ├── Ques.js                 # Individual question component
│   ├── Ques.css                # Question component styles
│   ├── Answer.js               # Answer display component
│   ├── Answer.css              # Answer component styles
│   ├── ThemeToggle.js          # Dark/light theme toggle
│   └── ThemeToggle.css         # Theme toggle styles
├── contexts/
│   └── ThemeContext.js         # Theme management context
├── data.js                     # Question database
├── App.js                      # Main application component
├── App.css                     # Global application styles
├── index.js                    # Application entry point
└── index.css                   # Global styles and CSS reset
```

## 🎮 How to Use

### Taking a Quiz
1. **Select Category**: Choose from 6 different knowledge categories
2. **Set Difficulty**: Pick Easy, Medium, or Hard difficulty level
3. **Choose Length**: Select number of questions (5-25)
4. **Start Quiz**: Click "Start Quiz" to begin
5. **Navigate**: Use Previous/Next buttons or answer and continue
6. **Submit**: Complete all questions and submit your answers
7. **View Results**: See detailed performance analytics

### Features Overview
- **Theme Toggle**: Click the sun/moon icon in the top-right corner
- **Progress Tracking**: Monitor your progress with the visual progress bar
- **Timer**: Watch your completion time for bonus points
- **Navigation**: Move between questions freely before submitting
- **Results**: Get detailed feedback on your performance

## 🎨 Customization

### Adding New Questions
Edit `src/data.js` to add new questions:

```javascript
{
  id: 41,
  question: "Your new question here?",
  options: [
    "Option 1",
    "Option 2", 
    "Option 3",
    "Option 4"
  ],
  correct_answer: "Option 1"
}
```

### Styling Customization
- Modify component-specific CSS files for styling changes
- Update `App.css` for global styles
- Adjust theme colors in `ThemeContext.js`

### Adding New Categories
1. Update the categories array in `LandingPage.js`
2. Add corresponding questions in `data.js`
3. Implement category filtering logic in `QuesList.js`

## 🛠️ Technologies Used

- **React 18.3.0** - Frontend framework
- **React Router DOM 6.23.0** - Client-side routing
- **CSS3** - Modern styling with Grid, Flexbox, and animations
- **JavaScript ES6+** - Modern JavaScript features
- **Local Storage API** - Data persistence
- **Google Fonts** - Inter font family

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure redirects for React Router

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect and deploy the React app

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] Sound effects and audio feedback
- [ ] Multiplayer quiz mode
- [ ] User authentication and profiles
- [ ] Question difficulty based on performance
- [ ] Social sharing of results
- [ ] Quiz creation tools
- [ ] Advanced analytics dashboard
- [ ] Offline support with PWA features

## 📞 Contact

For questions or suggestions, please open an issue or contact the developer.

---

**Built with ❤️ using React and modern web technologies**# Quiz-App
