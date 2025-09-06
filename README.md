# 🌱 Bonseye

A modern Vue 3 application that allows users to **search for plants**, **add them to a personal garden**, and **track plant details**. Designed for plant enthusiasts who want a simple and intuitive way to manage a digital garden.

## ✨ Features

- **Plant Search**: Browse and search plants from the [Perenual API](https://perenual.com/docs/api)
- **Personal Garden**: Add plants to your own collection
- **Responsive Design**: Optimized for mobile and desktop
- **Data Caching**: Efficient data fetching with TanStack Vue Query
- **Modern UI**: Styled with Tailwind CSS and shadcn/ui

## 🛠 Tech Stack

- **Vue 3** (Composition API) with **TypeScript**
- **Vue Router** for navigation
- **Pinia** for state management
- **TanStack Vue Query** for data fetching and caching
- **Vitest** for unit testing
- **Vite** for tooling and fast development
- **Tailwind CSS** + **shadcn/ui** for styling
- **ESLint** + **Prettier** for code quality and formatting

## 📦 Project Setup

````sh
git clone <repository-url>
cd bonseye


```sh
pnpm install
```

### Environment Variables

Create a .env file in the project root with:

```sh
VITE_PERENUAL_API_KEY=<your_api_key_here>
```

You can generate an API key from the [Perenual website](https://perenual.com/user/developer)

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
````
