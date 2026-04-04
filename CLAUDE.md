# CLAUDE.md — SkySuite

## ⚠️ CRITICAL: Git is the source of truth

**NEVER deploy without committing first.**
- All changes must be committed and pushed to GitHub before any Vercel deploy
- NEVER run `vercel --prod` directly — use git push only
- NEVER run `git clean` or discard untracked/unstaged files without reading them first

## Before any destructive git operation
1. Run `git status` and read every file listed
2. Run `git diff` to inspect all changes
3. `cat` any untracked files before deciding to delete them
4. When in doubt — commit or stash, never discard

## Stack
- Next.js 16, Tailwind v4, shadcn/ui, Framer Motion, Vercel
- Brand: #011830 dark navy, #F5F7F0 cream, #07BCE7 Sky Blue
- No src/ dir — files at root: app/, components/, public/

## Workflow
1. Make changes locally
2. `git add -A && git commit -m "..." && git push origin main`
3. Vercel auto-deploys from GitHub
