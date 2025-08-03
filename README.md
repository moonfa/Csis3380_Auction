# Csis3380_Auction
Term project for Full Stack Course

Project

Silent Auction React Application Project Description

Project Overview

Develop a minimalist React.js application for a silent auction where users can list items, place bids, and track top bids in real time. The admin can close the auction, declare winners, and notify them via email. The app must be deployed to a live server for accessibility.

Core Features
1. User Roles & Authentication

   o Admin: Manages auctions, declares winners, sends emails.

   o Bidders: Register/login, place bids on items.

   o Tools: Firebase Auth, Auth0, or JWT.

3. Auction Management

   o Admin can list up to 30 items (title, description, image).

   o Bidders view active items and place bids (minimum bid increment: $1).

   o Real-time bid tracking: Display all bids per item (UserID + amount) with the top bid highlighted.

5. Admin Controls

   o Close auctions manually.

   o Auto-generate a winner list (UserID + winning amount) per item.

   o Notify/Email notifications to winners via your own or third party services.

6. Bidder Experience

   o View all items with current bids.

   o Place bids (with validation: bid > current top bid).

   o See bid history per item.

   o Search for items.

Technical Requirements

• Frontend

• State Management

• Styling: you can use CSS Modules, Tailwind CSS, or styled-components (minimalist design).

• Backend: Node.js/Express + MongoDB, or other tools/services.

• Email Service: You can use third party services or simulate.

• Deployment: Host on Netlify, Vercel, or Firebase Hosting (backend on Render/Heroku if applicable).

Key User Flows
1. Admin Flow
   o Log in → Add/remove items → Monitor bids → Close auction → Declare winners → Trigger emails.
2. Bidder Flow
   o Register → Log in → Browse items → Place bid → See bid status (highlighted if winning).

Constraints

• Item Limit: Min 5 auction items.

• Bid Validation: Reject bids ≤ current top bid.

Deliverables

1. Deployed Application: Live URL accessible to users.

2. Code Repo: Well-documented React code (GitHub/GitLab).

3. Documentation:

   o Setup guide (dependencies, environment variables).

   o User manual (how to register, bid, close auction).

   o Video demonstration of working app.

Timeline & Milestones

1. Phase 1: Setup React, auth, item listing.

2. Phase 2: Implement bidding system + real-time updates.

3. Phase 3: Admin controls + email integration.

4. Phase 4: Testing, refinements, deployment.

Success Metrics

• Functional bid placement with real-time leaderboard.

• Admin can close auction and trigger winner emails.

• Clean UI, responsive design, no critical bugs.

• Extra Credit: Push notifications for outbid alerts, item categories; authentication and authorization.

Deployment is mandatory — ensure your app is live by the final demo!

Note: Prioritize simplicity and functionality over advanced styling. Use React best practices (component modularity, efficient state updates).
