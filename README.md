# SRID – Shared Root Identifier Library

[![npm version](https://img.shields.io/npm/v/srid.svg)](https://www.npmjs.com/package/srid)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

`SRID` is a library that provides a simple and consistent way to generate **linked, traceable, and country-aware unique IDs** for users, wallets, and transactions. Ideal for remittance platforms, fintech products, and audit-oriented systems.

---

## 🔗 Why SRID?
SRID establishes a common root identifier that ties together all related entities (user, wallet, transactions) in your system. It’s lightweight, deterministic, and designed for traceability.

---

## ✨ Features

- Shared Root Identifier (SRID) generation
- Country code + date + hash-based format
- Linked User ID, Wallet ID, and Transaction ID
- Sequential transaction ID suffixes
- Lightweight, zero-dependency

---

## 📦 Installation

```bash
npm install srid
```

---

## 🚀 Usage

```ts
import SRID from 'srid';

const srid = new SRID('KE');

console.log(srid.getSharedId());            // e.g., KE250326-A7K2Z9
console.log(srid.generateUserId());         // e.g., USR-KE250326-A7K2Z9
console.log(srid.generateWalletId());       // e.g., WLT-KE250326-A7K2Z9
console.log(srid.generateTransactionId());  // e.g., TXN-KE250326-A7K2Z9-001
console.log(srid.generateTransactionId());  // e.g., TXN-KE250326-A7K2Z9-002
```

---

## 📚 ID Structure

| ID Type         | Format Example                      |
|------------------|-------------------------------------|
| Shared ID        | `KE250326-A7K2Z9`                  |
| User ID          | `USR-KE250326-A7K2Z9`              |
| Wallet ID        | `WLT-KE250326-A7K2Z9`              |
| Transaction ID   | `TXN-KE250326-A7K2Z9-001`          |

> Format: `[Prefix]-[CountryCode][YYMMDD]-[HashChunk](-Sequence)`

---

## 🧪 Running Tests

```bash
npm test
```

Tests are written using [Jest](https://jestjs.io/).

---

## 🛠️ API Reference

### `new SRID(countryCode: string)`
Creates a new SRID instance using a country code (e.g., "KE").

### `getSharedId(): string`
Returns the core shared ID (used in all other IDs).

### `generateUserId(): string`
Returns a user ID with the shared root.

### `generateWalletId(): string`
Returns a wallet ID tied to the same root.

### `generateTransactionId(): string`
Returns a unique transaction ID with a sequential suffix.

---

## 💡 Use Cases

- Cross-border remittance and wallet platforms
- Systems that require linked IDs across entities
- Auditable financial record management

---

## 📄 License

MIT © 2025
