[![Netlify Status](https://api.netlify.com/api/v1/badges/b66fa796-23c0-446c-95c8-e90f1634bdee/deploy-status)](https://app.netlify.com/sites/stunning-frangipane-96eaf1/deploys)

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Create storybook for svelte

```
npx sb init
npm run storybook //오류 발생 시, 아래 내용 주석 처리 수행 .storybook/main.cjs 파일의 svelteOptions 을 주석처리
```
- Demo site: https://storybook.dumulnet.com
- Demo site: https://stunning-frangipane-96eaf1.netlify.app/
