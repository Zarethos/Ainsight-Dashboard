<div align="center">

# 🧠 AINSIGHT

### Intelligent Linux System Monitoring with AI-Powered Insights

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)

<img src="https://raw.githubusercontent.com/yourusername/ainsight-dashboard/main/docs/demo.gif" alt="AINSIGHT Demo" width="800"/>

**Real-time system monitoring meets artificial intelligence.**

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 🎯 What is AINSIGHT?

AINSIGHT transforms raw system metrics into actionable intelligence. It continuously monitors your Linux servers' CPU, RAM, Disk, and Network performance, then leverages AI to detect anomalies, forecast potential issues, and recommend optimizations — all through a clean, intuitive dashboard.

**Stop interpreting stats. Start acting on insights.**

```
❌ Before: "CPU at 87%, is that bad?"
✅ With AINSIGHT: "CPU spike detected due to backup process. Pattern is normal, but consider scheduling during off-peak hours."
```

---

## ✨ Features

### 📊 **Real-Time Monitoring**
- **CPU Usage** — Track utilization, load averages, and per-core metrics
- **Memory Stats** — Monitor RAM usage, swap, and available memory
- **Disk I/O** — Watch read/write speeds, usage percentages, and partition health
- **Network Traffic** — Analyze bandwidth, packet rates, and connection states

### 🤖 **AI-Powered Intelligence**
- **Anomaly Detection** — Automatically identify unusual patterns and potential issues
- **Predictive Forecasting** — Get alerts before problems occur
- **Smart Recommendations** — Receive context-aware optimization suggestions
- **Natural Language Insights** — Understand your system health in plain English

### 🏗️ **Modern Architecture**
- **Self-Hosted** — Full control over your data and infrastructure
- **Docker-Ready** — Deploy in seconds with docker-compose
- **Lightweight Agent** — Minimal resource footprint (~50MB RAM)
- **Multi-Server Ready** — Scalable architecture for fleet monitoring
- **API-First Design** — Integrate with your existing tools and workflows

---

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- OpenAI API key (or compatible LLM endpoint)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/ainsight-dashboard.git
cd ainsight-dashboard

# Configure environment
cp .env.example .env
# Edit .env and add your OpenAI API key

# Launch with Docker
docker-compose up --build
```

### Access

🌐 **Frontend Dashboard:** http://localhost:3000  
🔧 **Backend API:** http://localhost:8000  
📚 **API Docs:** http://localhost:8000/docs

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|-------|------------|
| **Backend** | FastAPI, Python 3.11+, psutil |
| **Frontend** | React 18, Tailwind CSS, Recharts |
| **AI/ML** | OpenAI API, Custom Anomaly Detection |
| **Infrastructure** | Docker, Docker Compose |
| **Monitoring** | Real-time WebSockets, REST API |

</div>

---

## 📖 Documentation

### Architecture Overview

```
┌─────────────────┐      ┌──────────────────┐      ┌─────────────────┐
│                 │      │                  │      │                 │
│  React Frontend │◄────►│  FastAPI Backend │◄────►│   OpenAI API    │
│   (Port 3000)   │      │   (Port 8000)    │      │   (Insights)    │
│                 │      │                  │      │                 │
└─────────────────┘      └──────────────────┘      └─────────────────┘
                                  │
                                  ▼
                         ┌────────────────┐
                         │   psutil       │
                         │   System Metrics│
                         └────────────────┘
```

### Configuration

Edit `.env` to customize:

```env
# AI Configuration
OPENAI_API_KEY=your_api_key_here
AI_MODEL=gpt-4-turbo-preview

# Monitoring Settings
COLLECTION_INTERVAL=5  # seconds
RETENTION_PERIOD=7     # days

# Alert Thresholds
CPU_ALERT_THRESHOLD=80
MEMORY_ALERT_THRESHOLD=85
DISK_ALERT_THRESHOLD=90
```

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/metrics` | GET | Current system metrics |
| `/api/insights` | GET | AI-generated insights |
| `/api/history` | GET | Historical metric data |
| `/api/alerts` | GET | Active alerts and warnings |

Full API documentation: [API Reference](docs/API.md)

---

## 💡 Use Cases

### 🏢 **DevOps Teams**
Monitor production servers and receive intelligent alerts before incidents occur.

### 🖥️ **System Administrators**
Manage multiple Linux servers with unified, AI-assisted monitoring.

### 🔬 **Researchers & Students**
Learn system monitoring and AI integration with a production-ready example.

### 🏠 **Homelab Enthusiasts**
Keep your self-hosted infrastructure healthy with minimal effort.

---

## 🤝 Contributing

We welcome contributions! Whether it's bug fixes, new features, or documentation improvements.

```bash
# Fork the repository
# Create a feature branch
git checkout -b feature/amazing-feature

# Commit your changes
git commit -m "Add amazing feature"

# Push and create a Pull Request
git push origin feature/amazing-feature
```

**Areas We Need Help:**
- 🔌 Additional metric collectors (GPU, temperature, custom services)
- 🌐 Support for other LLM providers (Anthropic, Ollama, local models)
- 📱 Mobile-responsive dashboard improvements
- 🧪 Test coverage expansion
- 📖 Documentation and tutorials

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📈 Roadmap

- [x] Core system monitoring (CPU, RAM, Disk, Network)
- [x] AI-powered insights and anomaly detection
- [x] Docker deployment
- [ ] Multi-server agent deployment
- [ ] Historical data visualization with trends
- [ ] Slack/Discord/Email alert integrations
- [ ] Custom metric plugins
- [ ] Kubernetes monitoring support
- [ ] Mobile app (iOS/Android)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License - Free to use, modify, and distribute.
```

---

## 🙏 Acknowledgments

Built with ❤️ using:
- [FastAPI](https://fastapi.tiangolo.com/) - Modern Python web framework
- [React](https://reactjs.org/) - UI library
- [psutil](https://github.com/giampaolo/psutil) - System monitoring
- [OpenAI](https://openai.com/) - AI insights

---

## 📞 Support

- 🐛 **Bug Reports:** [Open an issue](https://github.com/<your-username>/ainsight-dashboard/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/<your-username>/ainsight-dashboard/discussions)
- 📧 **Email:** support@ainsight.dev
- 🌟 **Star this repo** if you find it useful!

---

<div align="center">

### ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=<your-username>/ainsight-dashboard&type=Date)](https://star-history.com/#<your-username>/ainsight-dashboard&Date)

**Made with 💙 by developers, for developers**

[⬆ Back to Top](#-ainsight)

</div>
