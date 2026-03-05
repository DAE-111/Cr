# Cr — Non-Custodial Security Infrastructure for Autonomous AI Agents

> The first non-custodial security infrastructure for autonomous AI agents managing crypto wallets, virtual cards, spending approvals, and rule enforcement — without ever holding your keys.

## Overview

Cr provides a complete security layer purpose-built for agentic AI systems that interact with cryptocurrency and financial infrastructure. It sits between your AI agent and the blockchain, enforcing policy without ever touching your private keys.

## Key Features

- **Non-Custodial Wallet Management** – AI agents initiate, sign, and broadcast transactions using MPC or smart-account wallets. Private keys never leave your custody.
- **Virtual Card Issuance** – Programmable virtual cards backed by on-chain funds with merchant restrictions, currency limits, and expiry.
- **Spending Approvals** – Multi-party approval workflows for high-value transactions with cryptographic audit trails.
- **Rule Enforcement Engine** – Declare spend limits, allowlisted addresses, time-window budgets, and velocity caps in code. Rules execute on-chain.
- **Agent Identity & Auth** – Verifiable on-chain identity with scoped permissions for every AI agent.
- **Real-Time Threat Detection** – Live risk engine with automatic circuit-breakers and human alerts.

## Architecture

Cr uses **Multi-Party Computation (MPC)** and **ERC-4337 smart accounts** to give AI agents the power to transact without centralising key material anywhere:

1. **Threshold Signature Scheme (TSS)** – Key material is split into shards requiring a t-of-n quorum to sign.
2. **Smart Account Policies** – On-chain session keys with granular, expiring, revocable permissions per agent.
3. **Zero-Knowledge Audit Proofs** – Every enforcement decision produces a ZK proof verifiable on-chain.

## Getting Started

Open `index.html` in any modern browser — no build step required.

## License

MIT
