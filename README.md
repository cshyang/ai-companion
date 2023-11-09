# mini-product-recommendation-engine
This project allowed you to create your own AI companion chatbot that imitates the personalities of a celebrity. 

Original project: https://github.com/AntonioErdeljac/next13-ai-companion/blob/master/app/layout.tsx

<img width="854" alt="image" src="https://github.com/cshyang/ai-companion/assets/45311586/fce37c39-ead2-4301-9325-a743e37ce282">

## Startup 🚀
1. Cloning this repository. ```git clone https://github.com/cshyang/companion-ai.git```
2. Install the packages  `npm i`
3. Set up .env files
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
  CLERK_SECRET_KEY=
  
  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
  
  OPENAI_API_KEY=
  REPLICATE_API_TOKEN=
  
  PINECONE_API_KEY=
  PINECONE_ENVIRONMENT=
  PINECONE_INDEX=
  
  UPSTASH_REDIS_REST_URL=
  UPSTASH_REDIS_REST_TOKEN=
  
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
  
  DATABASE_URL=
  
  STRIPE_API_KEY=
  STRIPE_WEBHOOK_SECRET=
  
  NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```
4. Setup Prisma
```
npx prisma db push
```
```
node scripts/seed.ts
```
5. Run the project
```
npm run dev
```

## Stacks
1. NextJS
2. TailwindCSS
3. Typescript
4. Clerk
5. Prisma DB
6. Langchain
7. LLAMMA2
8. Replicate
9. Stripe
