# Memos

<img align="right" height="96px" src="https://raw.githubusercontent.com/usememos/.github/refs/heads/main/assets/logo-rounded.png" alt="Memos" />

An open-source, self-hosted note-taking service. Your thoughts, your data, your control — no tracking, no ads, no subscription fees.

[![Home](https://img.shields.io/badge/🏠-usememos.com-blue?style=flat-square)](https://www.usememos.com)
[![Live Demo](https://img.shields.io/badge/✨-Try%20Demo-orange?style=flat-square)](https://demo.usememos.com/)
[![Docs](https://img.shields.io/badge/📚-Documentation-green?style=flat-square)](https://www.usememos.com/docs)
[![Discord](https://img.shields.io/badge/💬-Discord-5865f2?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/tfPJa4UmAv)
[![Docker Pulls](https://img.shields.io/docker/pulls/neosmemo/memos?style=flat-square&logo=docker)](https://hub.docker.com/r/neosmemo/memos)

<img src="https://raw.githubusercontent.com/usememos/.github/refs/heads/main/assets/demo.png" alt="Memos Demo Screenshot" height="512" />

### 💎 Featured Sponsors

[**Warp** — The AI-powered terminal built for speed and collaboration](https://go.warp.dev/memos)

<a href="https://go.warp.dev/memos" target="_blank" rel="noopener">
  <img src="https://raw.githubusercontent.com/warpdotdev/brand-assets/main/Github/Sponsor/Warp-Github-LG-02.png" alt="Warp - The terminal for the 21st century" height="300" />
</a>

## Overview

Memos is a privacy-first, self-hosted knowledge base that works seamlessly for personal notes, team wikis, and knowledge management. Built with Go and React, it offers lightning-fast performance without compromising on features or usability.

**Why choose Memos over cloud services?**

| Feature           | Memos                          | Cloud Services                |
| ----------------- | ------------------------------ | ----------------------------- |
| **Privacy**       | ✅ Self-hosted, zero telemetry | ❌ Your data on their servers |
| **Cost**          | ✅ Free forever, MIT license   | ❌ Subscription fees          |
| **Performance**   | ✅ Instant load, no latency    | ⚠️ Depends on internet        |
| **Ownership**     | ✅ Full control & export       | ❌ Vendor lock-in             |
| **API Access**    | ✅ Full REST + gRPC APIs       | ⚠️ Limited or paid            |
| **Customization** | ✅ Open source, forkable       | ❌ Closed ecosystem           |

## Features

- **🔒 Privacy-First Architecture**
- **📝 Markdown Native**
- **⚡ Blazing Fast**
- **🐳 Simple Deployment**
- **🔗 Developer-Friendly**
- **🎨 Beautiful Interface**

## Quick Start

### Docker (Recommended)

```bash
docker run -d \
  --name memos \
  -p 5230:5230 \
  -v ~/.memos:/var/opt/memos \
  neosmemo/memos:stable
```

Open `http://localhost:5230` and start writing!

### Try the Live Demo

Don't want to install yet? Try our [live demo](https://demo.usememos.com/) first!

### Other Installation Methods

- **Docker Compose** - Recommended for production deployments
- **Pre-built Binaries** - Available for Linux, macOS, and Windows
- **Kubernetes** - Helm charts and manifests available
- **Build from Source** - For development and customization

See our [installation guide](https://www.usememos.com/docs/installation) for detailed instructions.
