## Welcome to my project!

This project was adapted from fireship's next.js starter course. However,
the user submittable blogs feature is entirely by my own design.

## Setup

```
git clone <this-repo> nextcourse
cd nextcourse
npm install
```

If errors happen during the first `npm run dev`, then be sure to run `prisma generate` first.

Env variables are as follows:

GITHUB_ID=43f20406ac6f4e587d22
GITHUB_SECRET=e2013de05827d41c35f8f91c8bfa3fbb728302cd
NEXTAUTH_SECRET=e2013de05827d41c35f8f91c8bfa3fbb728302cd
DATABASE_URL=postgresql://SonaraSelect:YPOHi0n7ZavV@ep-solitary-fog-05320445.us-east-2.aws.neon.tech/nextblog?sslmode=require
SHADOW_DATABASE_URL=postgresql://SonaraSelect:YPOHi0n7ZavV@ep-solitary-fog-05320445.us-east-2.aws.neon.tech/shadow?sslmode=require