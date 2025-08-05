# SketchFlow - Collaborative Drawing Application

A real-time collaborative drawing and sketching application built with Next.js, TypeScript, and WebSocket technology. SketchFlow allows teams to brainstorm, design, and share ideas visually in real-time.

## 🚀 Features

### Core Functionality
- **Real-time Collaboration**: Multiple users can draw simultaneously on the same canvas
- **Multiple Drawing Tools**: Pencil, rectangles, circles, lines, arrows, text, and eraser
- **User Presence**: See who's collaborating with real-time avatars and presence indicators
- **Canvas Management**: Create, save, and manage multiple designs
- **Shareable Links**: Generate editable or read-only links for sharing

### Drawing Tools
- **Pencil**: Freehand drawing
- **Rectangle**: Draw rectangular shapes
- **Circle**: Draw circular shapes
- **Line**: Draw straight lines
- **Arrow**: Draw directional arrows
- **Text**: Add text annotations
- **Eraser**: Remove drawn elements

### User Experience
- **Responsive Design**: Modern UI with gradient backgrounds and smooth animations
- **Zoom & Pan**: Navigate large canvases with mouse wheel zoom and pan controls
- **User Authentication**: Secure signup/signin with profile photos
- **Dashboard**: Manage all your designs in one place
- **Read-only Mode**: Share designs with view-only access

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Real-time Communication**: WebSocket
- **Authentication**: Custom backend integration

## 📁 Project Structure

```
excelidraw-frontend/
├── app/                          # Next.js app directory
│   ├── canvas/[roomId]/          # Canvas pages with dynamic routing
│   ├── dashboard/                # User dashboard
│   ├── signin/                   # Sign in page
│   ├── signup/                   # Sign up page
│   └── page.tsx                  # Landing page
├── components/                   # React components
│   ├── landing/                  # Landing page components
│   ├── Canvas.tsx               # Main drawing canvas
│   ├── RoomCanvas.tsx           # Canvas with WebSocket integration
│   └── AuthPage.tsx             # Authentication component
├── draw/                        # Drawing game logic
├── config.ts                    # Configuration constants
└── public/                      # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Backend Requirements
⚠️ **Important**: This frontend application requires two separate backend services to function properly:

1. **HTTP Backend** - REST API server for authentication and design management
2. **WebSocket Backend** - Real-time communication server for collaborative drawing

Both backend services need to be running for the full application to work. 
Repository links :
   ```bash
   git clone https://github.com/OmGhadge/Sketchflow-httpbackend.git

   git clone https://github.com/OmGhadge/Sketchflow-websocketbackend.git 
   ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/OmGhadge/Sketchflow-frontend.git
   cd sketchflow-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   NEXT_PUBLIC_WS_URL=ws://localhost:8080
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Backend Setup
Once you have the backend repository links, you'll need to:

1. **Clone and set up the HTTP backend** (typically runs on port 3001)
2. **Clone and set up the WebSocket backend** (typically runs on port 8080)
3. **Ensure both backend services are running** before testing the frontend application

The frontend will show connection errors if the backend services are not available.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Key Components

### Canvas Component
The main drawing interface with:
- Tool selection sidebar
- Real-time collaboration
- Zoom and pan controls
- Text input overlay
- Share functionality

### RoomCanvas Component
Handles WebSocket connection and authentication for collaborative sessions.

### Dashboard
User interface for:
- Viewing all designs
- Creating new designs
- Opening existing designs
- Deleting designs

### Authentication
Custom authentication system with:
- User registration with profile photos
- Secure login
- Session management

## 🌐 API Integration

The application integrates with a backend API for:
- User authentication
- Design management
- Real-time WebSocket communication


## 🎯 Usage

1. **Sign Up/In**: Create an account or sign in to access the dashboard
2. **Create Design**: Click "New Design" to start a new canvas
3. **Draw**: Use the toolbar to select drawing tools and start creating
4. **Collaborate**: Share the canvas link with team members for real-time collaboration
5. **Share**: Generate editable or read-only links for sharing designs

## 🔒 Security Features

- Secure authentication with session management
- Read-only mode for sharing designs safely
- User presence indicators for collaborative sessions
- Private design storage

## 🎨 UI/UX Features

- Modern gradient design with purple and pink themes
- Responsive layout for different screen sizes
- Smooth animations and transitions
- Intuitive tool selection interface
- Real-time user presence indicators

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions, please open an issue in the repository.

---

**SketchFlow** - Turn your ideas into visual stories, together.
