# TORENOVATE Website Information Architecture Specification

## Purpose

This document defines the first implementation-level information architecture for the TORENOVATE public website.

The purpose of this stage is **not** to build the final visual design or the final CMS. The purpose is to create a simple, working frontend prototype where all planned public pages exist, routes work, navigation between pages is visible, and the overall visitor flow can be reviewed before detailed styling and backend integration.

This document should be treated as the source of truth for the public website page structure during this prototype stage.

---

# 1. Project Goal

TORENOVATE should be presented primarily as a professional **General Contractor / Full Renovation Company**, not as a collection of unrelated trade services.

The website should help a visitor quickly:

1. Understand what TORENOVATE does.
2. See the main renovation services.
3. Review real project work.
4. Understand how the company works.
5. Build trust in the company.
6. Request a quote.

The most important content areas are:

- Services
- Real Projects
- Company credibility
- Process
- Quote / Contact conversion

Projects are a central part of the website and should connect naturally with services.

---

# 2. Public Website Sitemap

The public website should contain the following routes:

```text
/
├── /about
├── /process
├── /services
│   └── /services/[slug]
├── /projects
│   └── /projects/[slug]
├── /contact
├── /privacy
└── /404
```

The following launch service slugs should be supported:

```text
/services/general-contracting
/services/basement-renovation
/services/bathroom-renovation
/services/kitchen-renovation
/services/interior-renovation
/services/exterior-decks
```

The frontend should use a shared dynamic service detail route:

```text
/services/[slug]
```

Do not create six unrelated page implementations if one reusable service detail template can handle all service pages.

The same principle applies to projects:

```text
/projects/[slug]
```

---

# 3. Main Navigation

## Desktop Header

Primary navigation:

```text
Logo → Home

Services
Projects
Our Process
About

Request a Quote
```

Recommended order:

```text
[TORENOVATE Logo]

Services
Projects
Our Process
About

[Request a Quote]
```

### Header behavior

- Logo links to `/`
- Services links to `/services`
- Projects links to `/projects`
- Our Process links to `/process`
- About links to `/about`
- Request a Quote links to `/contact`

The Services navigation item may later become a dropdown, but for this first simple prototype it is acceptable for it to link directly to `/services`.

If a simple dropdown is easy to implement without adding unnecessary complexity, it may contain:

```text
All Services
General Contracting / Full Home
Basement Renovation
Bathroom Renovation
Kitchen Renovation
Interior Renovation
Exterior / Decks
```

## Mobile Header

Use the same navigation structure in a simple mobile menu.

Do not spend time building advanced animations.

---

# 4. Footer Navigation

The footer should make the full site structure easy to understand.

Recommended groups:

```text
Company
├── About
└── Our Process

Services
├── General Contracting / Full Home
├── Basement Renovation
├── Bathroom Renovation
├── Kitchen Renovation
├── Interior Renovation
└── Exterior / Decks

Portfolio
└── Projects

Contact
└── Request a Quote

Legal
└── Privacy Policy
```

The footer should appear on all public pages.

---

# 5. Home Page

## Route

```text
/
```

## Purpose

The Home page should immediately explain:

- what TORENOVATE is,
- what kind of projects it handles,
- what services are available,
- what real work has been completed,
- how to continue exploring,
- how to request a quote.

## Page structure

```text
HOME
│
├── 1. Hero
├── 2. Company / General Contractor Positioning
├── 3. Main Services
├── 4. Featured Projects
├── 5. Why TORENOVATE / Approach
├── 6. Process Preview
└── 7. Final CTA
```

## Section details

### 5.1 Hero

Include:

- simple placeholder headline,
- short supporting text,
- primary CTA: `Request a Quote`,
- secondary CTA: `View Projects`.

Links:

```text
Request a Quote → /contact
View Projects → /projects
```

No final marketing copy is required yet.

### 5.2 Company / General Contractor Positioning

Purpose:

Explain that TORENOVATE handles renovation work as a general contractor and can manage broader project scopes.

Include:

- short placeholder description,
- link to About.

```text
Learn More About TORENOVATE → /about
```

### 5.3 Main Services

Show six service cards:

```text
General Contracting / Full Home Renovation
Basement Renovation
Bathroom Renovation
Kitchen Renovation
Interior Renovation
Exterior / Decks
```

Each card links to:

```text
/services/[slug]
```

### 5.4 Featured Projects

Show a small number of mock featured project cards.

Each card should include simple placeholder values such as:

- title,
- category,
- location,
- placeholder image block.

Each card links to:

```text
/projects/[slug]
```

Add:

```text
View All Projects → /projects
```

### 5.5 Why TORENOVATE / Approach

Simple placeholder section.

Possible topics:

- organized project management,
- quality workmanship,
- clear communication,
- full renovation capability.

This is only structural at this stage.

### 5.6 Process Preview

Brief preview of:

```text
Consultation
Estimate
Contract
Construction
Handover
```

Link:

```text
View Our Process → /process
```

### 5.7 Final CTA

Primary CTA:

```text
Request a Quote → /contact
```

---

# 6. Services Index Page

## Route

```text
/services
```

## Purpose

Act as the main service hub.

It should help visitors understand the major categories of work without making the company look like a collection of small individual trades.

## Page structure

```text
SERVICES
│
├── 1. Hero / Introduction
├── 2. General Contractor Positioning
├── 3. Main Service Cards
├── 4. Related Project Preview
└── 5. Quote CTA
```

## Service cards

Display these six services:

```text
General Contracting / Full Home Renovation
Basement Renovation
Bathroom Renovation
Kitchen Renovation
Interior Renovation
Exterior / Decks
```

Each card links to its service detail route.

Example:

```text
Basement Renovation
→ /services/basement-renovation
```

## Small trade services

The following should **not** have independent public pages in this prototype:

```text
Flooring
Tile
Framing
Drywall
Painting
Carpentry
Insulation
```

They should later appear inside relevant service detail pages as capabilities or scope items.

## Related Projects Preview

Show a few project cards linking to `/projects/[slug]`.

## CTA

```text
Request a Quote → /contact
```

---

# 7. Service Detail Template

## Route

```text
/services/[slug]
```

## Purpose

Explain one main service and connect that service with relevant real project work.

## Page structure

```text
SERVICE DETAIL
│
├── 1. Hero
├── 2. Service Overview
├── 3. What This Service May Include
├── 4. Capabilities / Scope
├── 5. Related Projects
├── 6. Process CTA
└── 7. Request Quote CTA
```

## 7.1 Hero

Include:

- service title,
- short placeholder description,
- placeholder image.

## 7.2 Service Overview

Simple descriptive placeholder.

## 7.3 What This Service May Include

Use sample bullet content relevant to the service.

This is where smaller trade activities may appear.

For example, a basement renovation could later include:

- framing,
- insulation,
- drywall,
- flooring,
- painting,
- carpentry.

## 7.4 Capabilities / Scope

Show a simple reusable section describing related capabilities.

No final copy is required.

## 7.5 Related Projects

Show mock projects related to the current service.

Each links to:

```text
/projects/[slug]
```

This relationship is important:

```text
Service
   ↓
Related Projects
   ↓
Project Detail
```

## 7.6 Process CTA

```text
Learn About Our Process → /process
```

## 7.7 Request Quote CTA

The link should preserve service context when possible:

```text
/contact?service=<service-slug>
```

Example:

```text
/contact?service=basement-renovation
```

The Contact page should be able to read this query parameter later.

For this prototype, simply displaying the selected service on the Contact page is enough.

---

# 8. Projects Index Page

## Route

```text
/projects
```

## Purpose

This is the main project portfolio page.

Real project work is one of the strongest trust-building elements of the TORENOVATE website.

## Page structure

```text
PROJECTS
│
├── 1. Hero / Portfolio Introduction
├── 2. Category Filter
├── 3. Project Grid
└── 4. Quote CTA
```

## 8.1 Project categories

Use:

```text
All
Full Home / General Contracting
Basement
Bathroom
Kitchen
Interior
Exterior / Decks
```

## 8.2 Filtering

For this prototype, filtering may be implemented with simple frontend mock data.

Preferred future URL format:

```text
/projects?category=basement-renovation
```

Do not overengineer filtering.

## 8.3 Project Grid

Use mock project objects.

Each card should contain:

- title,
- category,
- location,
- placeholder image.

Each card links to:

```text
/projects/[slug]
```

## 8.4 CTA

```text
Request a Quote → /contact
```

---

# 9. Project Detail Template

## Route

```text
/projects/[slug]
```

## Purpose

Present one completed project in enough detail to demonstrate TORENOVATE's work and guide the visitor toward a related service or quote request.

## Page structure

```text
PROJECT DETAIL
│
├── 1. Project Hero
├── 2. Project Overview
├── 3. Scope of Work
├── 4. Before Photos
├── 5. During Photos
├── 6. After Photos
├── 7. Related Service
├── 8. Related Projects
└── 9. Request a Similar Project CTA
```

## 9.1 Project Hero

Include:

- project title,
- category,
- location,
- placeholder hero image.

## 9.2 Project Overview

Simple mock description.

## 9.3 Scope of Work

Display a short list of mock scope items.

Example:

```text
Demolition
Framing
Electrical coordination
Drywall
Flooring
Painting
Finish carpentry
```

The actual content will later come from project data.

## 9.4 Before Photos

Display simple placeholder image blocks.

## 9.5 During Photos

Display simple placeholder image blocks.

## 9.6 After Photos

Display simple placeholder image blocks.

The visual design does not need to be final.

The purpose is only to establish page structure.

## 9.7 Related Service

Each project should point back to one main service.

Example:

```text
Related Service:
Basement Renovation

→ /services/basement-renovation
```

## 9.8 Related Projects

Display a few additional mock projects.

Links:

```text
/projects/[slug]
```

## 9.9 Request Similar Project

Primary CTA:

```text
Request a Similar Project → /contact
```

It is acceptable to pass project context in the query string later.

Example:

```text
/contact?project=modern-basement-richmond-hill
```

---

# 10. About Page

## Route

```text
/about
```

## Purpose

Build trust and explain the company.

This page should not duplicate the full Services page.

## Page structure

```text
ABOUT
│
├── 1. Hero / Introduction
├── 2. Company Story / Background
├── 3. General Contractor Positioning
├── 4. Values / Working Approach
├── 5. Selected Project Preview
└── 6. CTA
```

## Links

Useful outbound links:

```text
About → /projects
About → /process
About → /contact
```

---

# 11. Our Process Page

## Route

```text
/process
```

## Purpose

Reduce uncertainty for potential clients and explain what happens after they contact TORENOVATE.

## Main process

```text
Consultation
    ↓
Estimate
    ↓
Contract
    ↓
Construction
    ↓
Handover
```

## Page structure

```text
PROCESS
│
├── 1. Intro
├── 2. Consultation
├── 3. Estimate
├── 4. Contract
├── 5. Construction
├── 6. Handover
├── 7. Project Examples
└── 8. Start Your Project CTA
```

## Links

```text
Project Examples → /projects
Start Your Project → /contact
```

---

# 12. Contact / Request a Quote Page

## Route

```text
/contact
```

## Purpose

Act as the primary lead conversion page.

## Page structure

```text
CONTACT
│
├── 1. Intro
├── 2. Business Contact Information
└── 3. Quote Request Form
```

## Quote form fields

Use simple prototype fields for:

```text
Name
Email
Phone
Project Location
Project Type
Project Description
Expected Timing
Budget / Budget Range
```

Do not implement image upload.

Do not implement CRM integration.

Do not implement final email delivery yet unless separately requested.

At this prototype stage, the form may simply prevent default submission and show a temporary success/placeholder message.

## Query parameter behavior

Support:

```text
/contact?service=<slug>
```

If this parameter exists, preselect or display the matching service in `Project Type`.

Optionally prepare for:

```text
/contact?project=<slug>
```

but do not overengineer this if it requires extra unnecessary logic.

---

# 13. Privacy Policy Page

## Route

```text
/privacy
```

## Purpose

Provide the future legal/privacy page route.

For this prototype:

- create the page,
- add a simple placeholder heading and paragraph,
- link it from the footer.

Do not write final legal language.

---

# 14. 404 / Not Found

Provide a simple not-found experience.

It should include:

```text
Page not found
Return Home
View Projects
```

Links:

```text
Return Home → /
View Projects → /projects
```

---

# 15. Core Page Relationships

The main site structure should feel like:

```text
                         HOME
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
     SERVICES           PROJECTS            ABOUT
        │                  │                  │
 Service Detail      Project Detail       PROCESS
        │                  │                  │
        └───────────┬──────┴──────────────────┘
                    │
              REQUEST A QUOTE
                    │
                 CONTACT
```

---

# 16. Primary Visitor Journeys

## Journey A — Service First

```text
Home
 ↓
Services
 ↓
Service Detail
 ↓
Related Projects
 ↓
Project Detail
 ↓
Request a Similar Project
 ↓
Contact
```

## Journey B — Portfolio First

```text
Home
 ↓
Featured Project
 ↓
Project Detail
 ↓
Related Service
 ↓
Service Detail
 ↓
Contact
```

## Journey C — Trust First

```text
Home
 ↓
About
 ↓
Our Process
 ↓
Projects
 ↓
Contact
```

No important page should become a dead end.

---

# 17. Shared Components Needed for the Prototype

The implementation should reuse simple components instead of duplicating page markup unnecessarily.

Recommended shared components:

```text
Header
Footer
PageContainer
Section
PageHero
CTASection

ServiceCard
ProjectCard

ServiceGrid
ProjectGrid

ProcessSteps

PlaceholderImage
```

These names are recommendations, not strict requirements.

The main requirement is reuse and clarity.

Do not create a large design system yet.

---

# 18. Mock Data

For this prototype, use local mock data.

Recommended structure:

```text
frontend/src/data/services.ts
frontend/src/data/projects.ts
```

or another clean equivalent already consistent with the repository architecture.

## Service mock data

Each service should minimally have:

```text
title
slug
shortDescription
description
capabilities
```

## Project mock data

Each project should minimally have:

```text
title
slug
category
serviceSlug
location
summary
description
scope
featured
beforeImages
duringImages
afterImages
```

Use simple placeholder image paths or styled placeholder blocks if image assets do not yet exist.

Do not add an image library just for placeholders.

---

# 19. Service ↔ Project Relationship

This relationship is one of the most important architectural concepts.

Example:

```text
Basement Renovation
        ↓
Related Basement Projects
        ↓
Project Detail
        ↓
Related Service
        ↓
Basement Renovation
```

Mock project data should include a relation to a service slug.

Example:

```text
serviceSlug: "basement-renovation"
```

This allows:

- Service Detail → Related Projects
- Project Detail → Related Service

The relationship should be simple and easy to replace with API/database data later.

---

# 20. Static vs Dynamic Pages

## Static page templates

These are structurally static:

```text
/
 /about
 /process
 /services
 /projects
 /contact
 /privacy
```

Their content may become CMS-managed later, but the routes themselves are fixed.

## Dynamic templates

These depend on data:

```text
/services/[slug]
/projects/[slug]
```

Do not hard-code separate React page files for every service or every project.

---

# 21. CMS Relationship — Future Only

The public prototype should be designed so the following can later be CMS-managed:

```text
Home content
About content
Process content

Services
Projects
Project photos
SEO metadata
```

However:

**Do not build the CMS in this task.**

Future admin routes may look like:

```text
/admin/login

/admin
├── projects
│   ├── new
│   └── [id]/edit
├── services
│   └── [id]/edit
├── pages
│   ├── home
│   ├── about
│   └── process
├── media
└── redirects
```

These are included here only so the public information architecture does not conflict with future CMS needs.

---

# 22. Features Explicitly Out of Scope

Do not implement the following in this prototype:

```text
Final visual design
Advanced animations
Production CMS
Authentication
Project CRUD
Service CRUD
Image upload
Object storage
Email sending
CRM
Lead database
AI functionality
Customer portal
Chatbot
Blog
Photo upload in quote form
Final SEO implementation
Analytics dashboard
Production deployment
```

---

# 23. Styling Requirements for This Prototype

The frontend should be intentionally simple.

The goal is to make page structure and page relationships visible.

Use:

- clean layout,
- readable typography,
- basic spacing,
- simple cards,
- simple borders/backgrounds where useful,
- clear navigation,
- responsive layout.

Do not spend substantial time choosing colors, animation effects, complex visual identity, or production-level polish.

The final design system will be handled later.

---

# 24. Responsive Behavior

The prototype must be usable on:

- desktop,
- tablet,
- mobile.

At minimum:

- navigation must remain usable,
- cards should stack appropriately,
- page content should not overflow,
- CTA buttons should remain accessible,
- project image placeholders should scale properly.

No detailed breakpoint optimization is required yet.

---

# 25. Expected Route Matrix

| Page | Route | Type | Main Outbound Links |
|---|---|---|---|
| Home | `/` | Static | Services, Projects, About, Process, Contact |
| About | `/about` | Static | Projects, Process, Contact |
| Process | `/process` | Static | Projects, Contact |
| Services | `/services` | Static index | Service Details, Projects, Contact |
| Service Detail | `/services/[slug]` | Dynamic | Projects, Process, Contact |
| Projects | `/projects` | Static index | Project Details, Contact |
| Project Detail | `/projects/[slug]` | Dynamic | Related Service, Related Projects, Contact |
| Contact | `/contact` | Static | — |
| Privacy | `/privacy` | Static | — |
| 404 | framework not-found route | System | Home, Projects |

---

# 26. Prototype Acceptance Criteria

The prototype is complete when:

```text
All planned public routes exist.

Header navigation works.

Footer navigation works.

All service cards navigate to service detail pages.

All project cards navigate to project detail pages.

Service detail pages can show related projects.

Project detail pages can link back to related services.

Home can link to featured projects.

Process and About pages connect back into the main visitor journey.

Request a Quote links reach the Contact page.

Service context can be passed to Contact using a query parameter.

Unknown service/project slugs show a sensible not-found state.

Desktop and mobile layouts are usable.

No page is an unnecessary dead end.

Mock data is centralized rather than duplicated across pages.

The implementation is simple enough to replace mock data with backend API data later.
```

---

# 27. Important Implementation Principle

This prototype is intended to answer one question:

> Does the website structure and navigation make sense before we invest in final visual design, real data, CMS behavior, and backend integration?

Therefore:

- prefer clarity over polish,
- prefer reusable page templates over duplicated code,
- prefer simple mock data over premature backend work,
- do not implement features from later phases,
- do not redesign the repository architecture from Step 1 unless absolutely necessary.

---

# 28. Final Public Website Flow Summary

```text
HOME
│
├── ABOUT
│    ├── PROCESS
│    ├── PROJECTS
│    └── CONTACT
│
├── SERVICES
│    ├── GENERAL CONTRACTING
│    ├── BASEMENT
│    ├── BATHROOM
│    ├── KITCHEN
│    ├── INTERIOR
│    └── EXTERIOR / DECKS
│          │
│          └── RELATED PROJECTS
│                  │
│                  └── PROJECT DETAIL
│                          │
│                          ├── RELATED SERVICE
│                          ├── RELATED PROJECTS
│                          └── CONTACT
│
├── PROJECTS
│    └── PROJECT DETAIL
│
├── PROCESS
│
└── CONTACT
```

This structure should be implemented first as a simple frontend prototype and reviewed before final design work begins.
