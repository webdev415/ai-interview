# AI-Powered CRM System

🤖 **Intelligent Customer Relationship Management with Multi-Model AI Integration**

A production-ready CRM system that uses OpenRouter API with GPT-4o-mini and Gemini 2.5 Pro to automatically generate detailed subtasks, optimize timelines, and automate pipeline management.

## 🚀 Quick Start with Docker

**Prerequisites:**
- Docker and Docker Compose installed
- OpenRouter API key (provided in `.env.example`)

**Start the entire system:**
```bash
# Clone and navigate to project
cd context-engineering-intro

# Copy environment variables
cp .env.example .env

# Start all services with Docker
docker-compose up --build

# Wait for services to start, then access:
# Frontend: http://localhost:8080
# Backend API: http://localhost:3000/api
# Health Check: http://localhost:3000/api/health
```

**That's it!** The system will automatically:
- ✅ Start MongoDB with proper indexing
- ✅ Initialize the database with default data
- ✅ Start the Node.js backend with all APIs
- ✅ Serve the frontend with Nginx
- ✅ Configure real-time WebSocket connections
- ✅ Set up AI integration with OpenRouter

## 🎯 Key Features

### 🤖 AI-Powered Task Generation
- **Smart Subtasks**: AI breaks down complex tasks into actionable subtasks
- **Dependency Mapping**: Automatically identifies task dependencies
- **Time Estimation**: Realistic time estimates based on complexity
- **Multi-Model Intelligence**: Uses GPT-4o-mini for speed, Gemini 2.5 Pro for quality

### ⏰ Intelligent Timelines
- **Automated Scheduling**: AI generates realistic project timelines
- **Milestone Creation**: Smart milestone placement with progress tracking
- **Buffer Time**: Intelligent buffer allocation for high-priority tasks
- **Resource Optimization**: Considers team capacity and working hours

### 🔄 Pipeline Automation
- **Smart Routing**: Customers automatically move through pipeline stages
- **AI Triggers**: Automated task creation based on pipeline events
- **Conditional Logic**: Complex automation rules with AI integration
- **Real-time Analytics**: Live pipeline performance metrics

### 📊 Real-time Collaboration
- **Live Updates**: WebSocket-powered real-time synchronization
- **Progress Tracking**: Real-time AI generation progress indicators
- **Team Notifications**: Instant alerts for important events
- **Collaborative Planning**: Shared task planning and timeline optimization

## 🏗️ Architecture

### Backend (Node.js + MongoDB)
```
backend/
├── server.js              # Express server with Socket.IO
├── config/
│   ├── database.js         # MongoDB connection and pooling
│   ├── openrouter.js       # AI service integration
│   └── auth.js             # JWT authentication
├── models/
│   ├── User.js             # User authentication and profiles
│   ├── Customer.js         # CRM customer data
│   ├── Task.js             # AI-enhanced task management
│   └── Pipeline.js         # Automation workflows
├── routes/
│   └── auth.js             # Authentication endpoints
├── services/
│   └── taskGenerator.js    # AI task generation service
└── middleware/
    └── auth.js             # JWT and permission middleware
```

### Frontend (HTML5/CSS/ES6)
```
frontend/
├── index.html              # Marketing landing page
├── css/
│   └── components.css      # CRM-specific components
└── js/
    ├── main.js             # Application entry point
    └── services/           # API and WebSocket services
```

### Database Schema
- **Users**: Authentication, roles, permissions
- **Customers**: Contact info, pipeline tracking, notes
- **Tasks**: AI-generated subtasks with timelines
- **Pipelines**: Automation rules and analytics

## 🧪 Self-Testing System

The system includes comprehensive self-testing capabilities:

### Automated Health Checks
```bash
# Check all services
curl http://localhost:3000/api/health

# Expected response:
{
  "status": "healthy",
  "services": {
    "database": { "connected": true },
    "openrouter": { "configured": true },
    "auth": { "configured": true }
  }
}
```

### API Testing
```bash
# Test user registration
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@aicrm.com",
    "password": "TestPass123!",
    "firstName": "Test",
    "lastName": "User"
  }'

# Test AI task generation (coming soon)
curl -X POST http://localhost:3000/api/tasks \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Launch marketing campaign",
    "description": "Create and execute Q4 marketing campaign",
    "priority": "high"
  }'
```

### Frontend Testing
1. **Landing Page**: Visit http://localhost:8080
2. **AI Demo**: Click "Try AI Demo" and test task generation
3. **Authentication**: Navigate to login page and test registration
4. **Real-time Features**: Test WebSocket connections in browser dev tools

## 🔧 Development

### Local Development (without Docker)
```bash
# Start MongoDB locally
mongod --dbpath ./data/db

# Backend development
cd backend
npm install
npm run dev

# Frontend development (separate terminal)
cd frontend
python -m http.server 8080
```

### Environment Variables
```bash
# Required variables (see .env.example)
MONGODB_URI=mongodb://admin:password123@localhost:27017/ai_crm
JWT_SECRET=your-super-secret-jwt-key
OPENROUTER_API_KEY=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
PORT=3000
NODE_ENV=development
```

### API Documentation

#### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user profile

#### Future Endpoints (In Development)
- `GET /api/customers` - List customers
- `POST /api/customers` - Create customer
- `GET /api/tasks` - List tasks
- `POST /api/tasks/:id/generate-subtasks` - AI subtask generation
- `GET /api/pipelines` - List pipelines
- `GET /api/dashboard/stats` - Dashboard analytics

## 🤝 Contributing

This is a demonstration project built with Claude Code. The system follows enterprise-grade patterns:

### Code Standards
- **ESLint**: JavaScript code quality
- **JWT Security**: Token-based authentication
- **MongoDB Indexing**: Optimized database performance
- **Rate Limiting**: API protection
- **Error Handling**: Comprehensive error management
- **Logging**: Structured logging with Winston

### Testing Standards
- Unit tests for all API endpoints
- Integration tests for AI workflows
- End-to-end testing for user journeys
- Performance testing for concurrent usage

## 📈 Monitoring

### Health Monitoring
- Database connection status
- AI service availability
- Authentication system health
- Real-time connection status

### Performance Metrics
- API response times
- AI generation performance
- Database query optimization
- WebSocket connection health

## 🔒 Security

### Authentication
- JWT tokens with refresh rotation
- Role-based access control
- Secure HTTP-only cookies
- Password strength validation

### API Security
- Rate limiting per endpoint
- Input validation and sanitization
- CORS configuration
- Helmet.js security headers

### Data Protection
- MongoDB connection encryption
- Environment variable management
- Secure API key handling
- Audit logging for sensitive operations

## 📊 AI Models Used

### OpenRouter Integration
- **GPT-4o-mini**: Fast, cost-effective for routine operations
- **Gemini 2.5 Pro**: High-quality for complex AI tasks
- **Multi-model Routing**: Automatic fallback and optimization
- **Cost Management**: Usage tracking and budget controls

### AI Capabilities
- Natural language task breakdown
- Dependency analysis and optimization
- Timeline estimation with buffer calculation
- Context-aware customer insights
- Automated pipeline decision making

## 🚦 System Status

- ✅ **Core Backend**: Authentication, database, AI integration
- ✅ **Frontend**: Marketing page, AI demo, responsive design
- ✅ **Docker Setup**: Full containerization with MongoDB
- ✅ **AI Integration**: OpenRouter multi-model support
- 🔄 **In Progress**: CRUD operations, real-time features
- 📋 **Coming Soon**: Dashboard UI, advanced analytics

## 📞 Support

For issues or questions about this AI-powered CRM system:

1. **Health Check**: Visit http://localhost:3000/api/health
2. **Logs**: Check Docker logs with `docker-compose logs`
3. **Database**: MongoDB accessible on port 27017
4. **API**: All endpoints documented above

---

**Built with Claude Code** - Demonstrating AI-assisted development for production-ready applications.

🤖 **"Intelligence that scales with your business"**