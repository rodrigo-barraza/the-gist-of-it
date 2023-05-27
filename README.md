# List of Gists
get user gists
https://docs.github.com/en/rest/gists/gists?apiVersion=2022-11-28#list-gists-for-a-user

# Filetype
Filetype**: After fetching the Gists, you can iterate through each Gist and extract the filetype from the `files` object. Each file object will have a `language` key containing the language (filetype) of the file.

# Forks
https://docs.github.com/en/rest/gists/gists?apiVersion=2022-11-28#list-gist-forks
Replace `:gist_id` with the ID of the Gist for which you'd like to fetch the forks. After fetching the forks, you can get the username and avatar url of the last 3 forked users from the `owner` object in the forked Gist data.




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
