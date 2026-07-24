# Portfolio Knowledge Assistant

An AI-powered knowledge assistant that answers questions exclusively from a curated knowledge repository.

This project demonstrates how to build a trustworthy AI assistant by grounding responses in structured documents instead of relying on the model's general knowledge.

---

## Problem Statement

Traditional AI chatbots answer from their pre-trained knowledge, which can lead to hallucinations or irrelevant responses.

Portfolio Knowledge Assistant is designed to answer only from a managed knowledge base containing professional information, project documentation, resumes, certifications, blogs, and other supporting documents.

---

## Key Features

- Knowledge-grounded responses
- Hallucination control
- Modular knowledge repository
- Extensible architecture
- Cloudflare Workers backend
- Gemini API integration
- Designed to evolve into a complete RAG system

---

## Repository Structure

```
portfolio-knowledge-assistant/

├── knowledge/
├── prompts/
├── worker/
├── docs/
├── examples/
├── tests/
└── README.md
```

---

## Current Version (v1)

Current implementation supports:

- Markdown knowledge files
- Prompt-based retrieval
- Portfolio-specific question answering
- Strict response boundaries

---

## Roadmap

- Markdown Knowledge Base
- PDF Support
- DOCX Support
- Image & Screenshot Understanding
- Semantic Search
- Embeddings
- Vector Database
- Hybrid Search
- Re-ranking
- Enterprise RAG

---

## Design Principle

The assistant follows one fundamental rule:

> If the answer is not present in the supplied knowledge repository, it must explicitly state that the information is unavailable rather than generating an answer.

---

## Tech Stack

- HTML
- JavaScript
- Cloudflare Workers
- Google Gemini
- Markdown

---

## License

MIT
