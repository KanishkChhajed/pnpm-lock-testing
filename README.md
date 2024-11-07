# pnpm-lock-testing

```bash
find . -name "node_modules" -type d -prune -exec rm -rf {} +
find . -name "pnpm-lock.yaml" -type f -exec rm -f {} +
```

## 1-solo

```bash
cd 1-solo

## init
pnpm i
## wait for indirect deps up
pnpm up

```

## 2-mono

```bash
cd 1-mono

## init
pnpm i
## wait for indirect deps up
pnpm -r up
```

## 3-hoist

```bash
cd 3-hoist

## init
pnpm i
## wait for indirect deps up
pnpm -r up
```
