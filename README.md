# pnpm-lock-testing

```bash
find . -name "node_modules" -type d -prune -exec rm -rf {} +
find . -name "pnpm-lock.yaml" -type f -exec rm -f {} +
```

## 1-solo

```bash
cd 1-solo

## (1) no lockfile change
pnpm i

## (2) only add date-fns to lockfile
pnpm add date-fns@4.0.0

## (3) no lockfile change
pnpm up nuxt

## (4) nuxt's deps are changed in lockfile
## only range-version, not fixed-version
pnpm up

```

## 2-mono

```bash
cd 1-mono

## (1) no lockfile change
pnpm i

## (2) only add date-fns to lockfile
pnpm -r add date-fns@4.0.0

## (3) no lockfile change
pnpm -r up nuxt

## (4) nuxt's deps are changed in lockfile
## only range-version, not fixed-version
pnpm -r up
```

## 3-hoist

```bash
cd 3-hoist

## (1) BAD!! lockfile change as new project
## TODO pnpmfile.cjs hooks cause changes
pnpm i
```
