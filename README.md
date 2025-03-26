# 📡 react-deep-link

A lightweight React-compatible deep linking library that enables you to share, persist, and restore complex UI states (like modals, drawers, tabs, and more) across the same or different domains.

---

## ✨ Features

- Generate deep links with route, query, and encrypted UI state
- Parse deep links and use them via a simple React hook
- Cross-domain compatible
- Optional fallback for corrupt/missing state

---

## 🚀 Installation

```bash
npm install react-deep-link
```

---

## 🧱 Usage

### 1. Generating a Link

```ts
import { generateDeepLink } from "react-deep-link";

const url = generateDeepLink({
  baseUrl: "https://yourdomain.com",
  route: "/dashboard",
  params: { modal: "true" },
  state: { userId: "123", drawerOpen: true },
});

// Outputs something like:
// https://yourdomain.com/dashboard?modal=true&state=encryptedPayload
```

### 2. Parsing and Using in React

```tsx
import { useDeepLink } from "react-deep-link";

function MyComponent() {
  const { state, fallback } = useDeepLink();

  if (fallback) return <div>Invalid or expired link</div>;

  return <pre>{JSON.stringify(state)}</pre>;
}
```

---

## 🔐 Security

State passed in links is encrypted using a simple XOR mechanism. You can replace this with a more secure method (e.g., AES) using the `utils.ts` file.

> ❗ Avoid sharing sensitive data (passwords, tokens) in URLs.

---

## 📦 Scripts

- `npm run build` – Build the library
- `npm run dev` – Watch mode for dev
- `npm run lint` – Lint your code
- `npm run test` – Run unit tests

---

## 📄 License

MIT

---

## ✍️ Author

Jonathan Mwebaze
