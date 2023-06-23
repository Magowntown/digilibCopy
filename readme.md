DigiLib Overview
A local city library has hired us to design an app for their avid readers. The app should catalog all the their books and allow patrons to mark books as read or "want-to-read" (inspiration: Caliber and caliber-web, source code)

Getting Started
cd
git clone git@github.com:msimbo/digilib.git
cd digilib
type yarn (to install all this project's dependencies)
Create you feature branch e.g. "feature/*-github id" (read this guide on why we name branches this way)
Work, commit your work, push and submit a PR
Installation
Install "Markdown Preview Mermaid Support" extension
Launch from catalogue "Markdown: Open Preview to the Side" or "Markdown: Open Preview" to preview
User Flow
[x] @TODO use mermaid to create user journey chart for user admin as a system.

Admin User flow
---
title: Digilib Admin App
---
flowchart LR
    A[Home] --> B[Login]
    B --> C[Dashboard]
    C --> D[Manage Books]
    D --> E[Add a Book] & F[Edit] & G[Remove a Book]
    E -->  D[Manage Books]
    F -->  D[Manage Books]
    G -->  D[Manage Books]
Patron User Flow
[x] @TODO use mermaid to create user journey chart for app user as a system.

---
title: Digilib User App
---
flowchart LR
    A[Home] --> B[Login] & C[Create Acc.]
    C --> B[Login]
    B --> D[Dashboard]
    D --> E[Search] & F[Mark]
    E --> G{Found} & H{!Found}
    G --> F[Mark]
    F --> I[Read] & J[Unread]
    H --> E[Search]
    I & J --> D[Dashboard]
App Architecture
@TODO Ref issue #6

// k4Vh60SJzOVUgMit