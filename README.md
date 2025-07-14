# 0xKYC Discord Bot

Discord integration for 0xKYC's proof of personhood and uniqueness verification system.

## About

This bot was the Discord integration layer for 0xKYC, successfully **verifying 1,000+ users** for Galaxia Studios and other servers. It handled:

- **Uniqueness Verification**: Two-tier system (Verified = live person, Unique = first-time biometric in server)
- **KYC Integration**: Connected Discord users to 0xKYC web dApp → Onfido biometric verification
- **Invite Tracking**: User invitation monitoring (partially implemented with MEE6)
- **Anti-Duplicate**: Prevented duplicate reward claims in gaming servers

## Getting Started (AI Generated)

### Prerequisites
- Node.js 16+
- Discord Bot Token

### Installation
```bash
git clone https://github.com/0xkyc/discord-bot.git
cd discord-bot
npm install
touch .env
```

Add to `.env`:
```env
DISCORD_TOKEN=your_discord_bot_token_here
```

Run:
```bash
npm start
```

## Current State

**Bot is functional** - KYC verification and role assignment working:
- KYC verification links → web dApp → Onfido flow ✅
- Role assignment (Verified/Unique) ✅
- Basic commands (`/ping`, `/server`, `/user`) ✅

**Known Issue**: Unique role occasionally gets mixed up - needs debugging.

## TODO

### Priority Fix
- [ ] Debug unique role assignment logic

### Improvements
- [ ] Convert JS commands to TypeScript
- [ ] Add error handling & logging
- [ ] Complete invite tracking logic

### Optional
- [ ] Database integration
- [ ] Rate limiting
- [ ] Multi-server support

## Contributing

Fork → branch → PR. Main focus: fix unique role assignment bug.

## Legacy

**Successfully deployed for:**
- Galaxia Studios (Web3 Gaming) - 1,000+ verified users
- Multiple Discord servers requiring user verification

**Bot Lead:** Min-gyun Chae (Tech Lead)

**Tech Stack:** Discord.js v14, TypeScript, Node.js, Onfido integration

---

*Part of the 0xKYC open-source initiative. Main repo: [github.com/0xkyc](https://github.com/0xkyc)*