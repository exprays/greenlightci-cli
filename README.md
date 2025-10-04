# 🚦 GreenLightCI CLI# 🚦 GreenLightCI CLI



A command-line tool for checking Baseline web feature compatibility in your local projects.A command-line tool for checking Baseline web feature compatibility in your local projects.



## 🎯 Features## 📖 Quick- `--include <patterns>` - File patterns to include

- `--exclude <patterns>` - File patterns to exclude

- ✅ **Local file scanning** - Detect web features in CSS, JS, and framework files

- 👀 **Watch mode** - Continuously monitor files for changes### All Options Reference

- 📊 **Rich terminal output** - Colored, formatted compatibility reports

- 📄 **HTML reports** - Generate detailed compatibility reports#### Common Options (Available in all commands)

- 🎨 **Multiple file types** - Supports CSS, SCSS, JS, TS, JSX, TSX, Vue, Svelte

- ⚡ **Fast scanning** - Efficiently scan large codebases| Option | Alias | Type | Default | Description |

- 🔗 **Dashboard integration** - Send scan results to GreenLightCI Dashboard for tracking trends|--------|-------|------|---------|-------------|

| `--target-year` | `-t` | string | `2023` | Target Baseline year (2023, 2024, etc.) |

## 📖 Quick Reference| `--include` | - | string | `**/*.{css,scss,less,js,jsx,ts,tsx,vue,svelte}` | File patterns to include (glob) |

| `--exclude` | - | string | `**/node_modules/**,**/dist/**,**/build/**` | File patterns to exclude (glob) |

```bash

# Basic usage#### Check Command Options

greenlightci check                    # Check current directory

greenlightci check ./src              # Check specific directory| Option | Alias | Type | Default | Description |

greenlightci watch                    # Watch mode for live feedback|--------|-------|------|---------|-------------|

greenlightci report                   # Generate HTML report| `--block-newly` | - | boolean | `false` | Treat newly available features as errors |

| `--block-limited` | - | boolean | `false` | Treat limited availability features as errors |

# With dashboard integration| `--json` | - | boolean | `false` | Output results as JSON |

greenlightci check \| `--verbose` | - | boolean | `false` | Show detailed output for all files |

  --dashboard-url https://greenlightci-dashboard.vercel.app \| `--dashboard-url` | - | string | - | Dashboard URL (env: `GREENLIGHTCI_DASHBOARD_URL`) |

  --dashboard-api-key glci_your_key| `--dashboard-api-key` | - | string | - | Dashboard API key (env: `GREENLIGHTCI_API_KEY`) |



# Advanced options#### Watch Command Options

greenlightci check \

  --target-year 2024 \| Option | Alias | Type | Default | Description |

  --block-newly \|--------|-------|------|---------|-------------|

  --block-limited \| `--block-newly` | - | boolean | `false` | Treat newly available features as errors |

  --verbose \| `--block-limited` | - | boolean | `false` | Treat limited availability features as errors |

  --include "src/**/*.{js,css}" \

  --exclude "node_modules/**"#### Report Command Options

```

| Option | Alias | Type | Default | Description |

## 📦 Installation|--------|-------|------|---------|-------------|

| `--output` | `-o` | string | `baseline-report.html` | Output file path |

```bash| `--format` | - | string | `html` | Output format (`html` or `json`) |

# Install globally

npm install -g @greenlightci/cli## 🔗 Dashboard Integrationerence



# Or use with npx```bash

npx @greenlightci/cli check# Basic usage

```greenlightci check                    # Check current directory

greenlightci check ./src              # Check specific directory

## 🚀 Usagegreenlightci watch                    # Watch mode for live feedback

greenlightci report                   # Generate HTML report

### Commands Overview

# With dashboard integration

| Command | Description | Output |greenlightci check \

|---------|-------------|--------|  --dashboard-url https://greenlightci-dashboard.vercel.app \

| `check [path]` | Scan files for compatibility issues | Terminal output or JSON |  --dashboard-api-key glci_your_key

| `watch [path]` | Monitor files for changes | Live terminal updates |

| `report [path]` | Generate detailed compatibility report | HTML or JSON file |# Advanced options

greenlightci check \

### Check Command  --target-year 2024 \

  --block-newly \

Scan your project for Baseline compatibility issues:  --block-limited \

  --verbose \

```bash  --include "src/**/*.{js,css}" \

# Check current directory  --exclude "node_modules/**"

greenlightci check```



# Check specific directory## 🎯 Features

greenlightci check ./src

- ✅ **Local file scanning** - Detect web features in CSS, JS, and framework files

# Check with custom options- 👀 **Watch mode** - Continuously monitor files for changes

greenlightci check --target-year 2024 --block-newly --verbose- 📊 **Rich terminal output** - Colored, formatted compatibility reports

- 📄 **HTML reports** - Generate detailed compatibility reports

# Output as JSON- 🎨 **Multiple file types** - Supports CSS, SCSS, JS, TS, JSX, TSX, Vue, Svelte

greenlightci check --json > report.json- ⚡ **Fast scanning** - Efficiently scan large codebases

```- 🔗 **Dashboard integration** - Send scan results to GreenLightCI Dashboard for tracking trends



**Options:**## 📦 Installation



- `-t, --target-year <year>` - Target Baseline year (default: 2023)```bash

- `--block-newly` - Block newly available features# Install globally

- `--block-limited` - Block limited availability featuresnpm install -g @greenlightci/cli

- `--json` - Output results as JSON

- `--verbose` - Show detailed output# Or use with npx

- `--include <patterns>` - File patterns to include (comma-separated)npx @greenlightci/cli check

- `--exclude <patterns>` - File patterns to exclude (comma-separated)```

- `--dashboard-url <url>` - Dashboard URL for sending scan results (env: `GREENLIGHTCI_DASHBOARD_URL`)

- `--dashboard-api-key <key>` - Dashboard API key for authentication (env: `GREENLIGHTCI_API_KEY`)## 🚀 Usage



### Watch Mode### Commands Overview



Continuously monitor files for changes:| Command | Description | Output |

|---------|-------------|--------|

```bash| `check [path]` | Scan files for compatibility issues | Terminal output or JSON |

# Watch current directory| `watch [path]` | Monitor files for changes | Live terminal updates |

greenlightci watch| `report [path]` | Generate detailed compatibility report | HTML or JSON file |



# Watch specific directory### Check Command

greenlightci watch ./src

Scan your project for Baseline compatibility issues:

# Watch with custom patterns

greenlightci watch --include "src/**/*.{js,css}" --exclude "node_modules/**"```bash

```# Check current directory

greenlightci check

**Options:**

# Check specific directory

- `-t, --target-year <year>` - Target Baseline yeargreenlightci check ./src

- `--block-newly` - Block newly available features

- `--block-limited` - Block limited availability features# Check with custom options

- `--include <patterns>` - File patterns to includegreenlightci check --target-year 2024 --block-newly --verbose

- `--exclude <patterns>` - File patterns to exclude

# Output as JSON

### Report Commandgreenlightci check --json > report.json

```

Generate a detailed compatibility report:

**Options:**

```bash

# Generate HTML report- `-t, --target-year <year>` - Target Baseline year (default: 2023)

greenlightci report- `--block-newly` - Block newly available features

- `--block-limited` - Block limited availability features

# Generate JSON report- `--json` - Output results as JSON

greenlightci report --format json --output report.json- `--verbose` - Show detailed output

- `--include <patterns>` - File patterns to include (comma-separated)

# Generate report for specific directory- `--exclude <patterns>` - File patterns to exclude (comma-separated)

greenlightci report ./src --output dist/baseline-report.html- `--dashboard-url <url>` - Dashboard URL for sending scan results (env: `GREENLIGHTCI_DASHBOARD_URL`)

```- `--dashboard-api-key <key>` - Dashboard API key for authentication (env: `GREENLIGHTCI_API_KEY`)



**Options:**### Watch Mode



- `-t, --target-year <year>` - Target Baseline yearContinuously monitor files for changes:

- `-o, --output <file>` - Output file path (default: baseline-report.html)

- `--format <type>` - Output format: html or json (default: html)```bash

- `--include <patterns>` - File patterns to include# Watch current directory

- `--exclude <patterns>` - File patterns to excludegreenlightci watch



### All Options Reference# Watch specific directory

greenlightci watch ./src

#### Common Options (Available in all commands)

# Watch with custom patterns

| Option | Alias | Type | Default | Description |greenlightci watch --include "src/**/*.{js,css}" --exclude "node_modules/**"

|--------|-------|------|---------|-------------|```

| `--target-year` | `-t` | string | `2023` | Target Baseline year (2023, 2024, etc.) |

| `--include` | - | string | `**/*.{css,scss,less,js,jsx,ts,tsx,vue,svelte}` | File patterns to include (glob) |**Options:**

| `--exclude` | - | string | `**/node_modules/**,**/dist/**,**/build/**` | File patterns to exclude (glob) |

- `-t, --target-year <year>` - Target Baseline year

#### Check Command Options- `--block-newly` - Block newly available features

- `--block-limited` - Block limited availability features

| Option | Alias | Type | Default | Description |- `--include <patterns>` - File patterns to include

|--------|-------|------|---------|-------------|- `--exclude <patterns>` - File patterns to exclude

| `--block-newly` | - | boolean | `false` | Treat newly available features as errors |

| `--block-limited` | - | boolean | `false` | Treat limited availability features as errors |### Report Command

| `--json` | - | boolean | `false` | Output results as JSON |

| `--verbose` | - | boolean | `false` | Show detailed output for all files |Generate a detailed compatibility report:

| `--dashboard-url` | - | string | - | Dashboard URL (env: `GREENLIGHTCI_DASHBOARD_URL`) |

| `--dashboard-api-key` | - | string | - | Dashboard API key (env: `GREENLIGHTCI_API_KEY`) |```bash

# Generate HTML report

#### Watch Command Optionsgreenlightci report



| Option | Alias | Type | Default | Description |# Generate JSON report

|--------|-------|------|---------|-------------|greenlightci report --format json --output report.json

| `--block-newly` | - | boolean | `false` | Treat newly available features as errors |

| `--block-limited` | - | boolean | `false` | Treat limited availability features as errors |# Generate report for specific directory

greenlightci report ./src --output dist/baseline-report.html

#### Report Command Options```



| Option | Alias | Type | Default | Description |**Options:**

|--------|-------|------|---------|-------------|

| `--output` | `-o` | string | `baseline-report.html` | Output file path |- `-t, --target-year <year>` - Target Baseline year

| `--format` | - | string | `html` | Output format (`html` or `json`) |- `-o, --output <file>` - Output file path (default: baseline-report.html)

- `--format <type>` - Output format: html or json (default: html)

## 🔗 Dashboard Integration- `--include <patterns>` - File patterns to include

- `--exclude <patterns>` - File patterns to exclude

GreenLightCI CLI can send scan results to the [GreenLightCI Dashboard](https://greenlightci-dashboard.vercel.app/) for centralized tracking, trend analysis, and team visibility.

## � Dashboard Integration

### Setup

GreenLightCI CLI can send scan results to the [GreenLightCI Dashboard](https://greenlightci-dashboard.vercel.app/) for centralized tracking, trend analysis, and team visibility.

1. **Get an API Key** from the dashboard:

   - Visit https://greenlightci-dashboard.vercel.app/### Setup

   - Sign in with GitHub

   - Go to Settings → API Keys1. **Get an API Key** from the dashboard:

   - Generate a new API key   - Visit https://greenlightci-dashboard.vercel.app/

   - Sign in with GitHub

2. **Configure the CLI** using environment variables (recommended):   - Go to Settings → API Keys

   - Generate a new API key

```bash

# Add to your .bashrc, .zshrc, or .env file2. **Configure the CLI** using environment variables (recommended):

export GREENLIGHTCI_DASHBOARD_URL="https://greenlightci-dashboard.vercel.app"

export GREENLIGHTCI_API_KEY="glci_your_api_key_here"```bash

```# Add to your .bashrc, .zshrc, or .env file

export GREENLIGHTCI_DASHBOARD_URL="https://greenlightci-dashboard.vercel.app"

Or pass as command-line options:export GREENLIGHTCI_API_KEY="glci_your_api_key_here"

```

```bash

greenlightci check \Or pass as command-line options:

  --dashboard-url https://greenlightci-dashboard.vercel.app \

  --dashboard-api-key glci_your_api_key_here```bash

```greenlightci check \

  --dashboard-url https://greenlightci-dashboard.vercel.app \

### Usage Examples  --dashboard-api-key glci_your_api_key_here

```

```bash

# Check and send to dashboard (using env vars)### Usage Examples

greenlightci check ./src

```bash

# Check and send with explicit options# Check and send to dashboard (using env vars)

greenlightci check ./src \greenlightci check ./src

  --dashboard-url https://greenlightci-dashboard.vercel.app \

  --dashboard-api-key glci_abc123...# Check and send with explicit options

greenlightci check ./src \

# Combine with other options  --dashboard-url https://greenlightci-dashboard.vercel.app \

greenlightci check \  --dashboard-api-key glci_abc123...

  --target-year 2024 \

  --block-newly \# Combine with other options

  --verbose \greenlightci check \

  --dashboard-url https://greenlightci-dashboard.vercel.app \  --target-year 2024 \

  --dashboard-api-key glci_abc123...  --block-newly \

```  --verbose \

  --dashboard-url https://greenlightci-dashboard.vercel.app \

### Dashboard Features  --dashboard-api-key glci_abc123...

```

When integrated with the dashboard, you get:

### Dashboard Features

- 📈 **Trend tracking** - Monitor compatibility scores over time

- 📊 **Project overview** - See all your projects in one placeWhen integrated with the dashboard, you get:

- 🎯 **Feature analysis** - Identify most-used and problematic features

- 👥 **Team visibility** - Share results with your team- 📈 **Trend tracking** - Monitor compatibility scores over time

- 📅 **Historical data** - Compare current and past scans- 📊 **Project overview** - See all your projects in one place

- 🔔 **Notifications** - Get alerts on compatibility regressions (coming soon)- 🎯 **Feature analysis** - Identify most-used and problematic features

- 👥 **Team visibility** - Share results with your team

### Environment Variables- 📅 **Historical data** - Compare current and past scans

- 🔔 **Notifications** - Get alerts on compatibility regressions (coming soon)

- `GREENLIGHTCI_DASHBOARD_URL` - Dashboard URL (default: none)

- `GREENLIGHTCI_API_KEY` - API key for authentication (default: none)### Environment Variables



### Security- `GREENLIGHTCI_DASHBOARD_URL` - Dashboard URL (default: none)

- `GREENLIGHTCI_API_KEY` - API key for authentication (default: none)

- API keys are stored securely in the dashboard database

- Keys are transmitted over HTTPS only### Security

- Each key can be revoked independently from the dashboard

- Keys are hashed before storage- API keys are stored securely in the dashboard database

- Keys are transmitted over HTTPS only

## 📊 Example Output- Each key can be revoked independently from the dashboard

- Keys are hashed before storage

### Check Command

## �📊 Example Output

```

🚦 GreenLightCI - Baseline Compatibility Check### Check Command

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```

src/styles/main.css [85/100]🚦 GreenLightCI - Baseline Compatibility Check

  ✓ CSS Grid - Widely Available━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ⚠ Container Queries - Newly Available

  ⚠ CSS Nesting - Newly Availablesrc/styles/main.css [85/100]

  ✓ CSS Grid - Widely Available

src/components/Button.tsx [92/100]  ⚠ Container Queries - Newly Available

  ✓ Optional Chaining - Widely Available  ⚠ CSS Nesting - Newly Available

  ✓ Nullish Coalescing - Widely Available

src/components/Button.tsx [92/100]

📊 Scan Summary  ✓ Optional Chaining - Widely Available

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ✓ Nullish Coalescing - Widely Available



Files Scanned:      15📊 Scan Summary

Features Detected:  32━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Blocking Issues:    0

Warnings:           5Files Scanned:      15

Average Score:      88Features Detected:  32

Blocking Issues:    0

█████████████████░░░ 88%Warnings:           5

Average Score:      88

⚠ Found 5 warnings

  Consider adding polyfills for better compatibility█████████████████░░░ 88%

```

⚠ Found 5 warnings

### With Dashboard Integration  Consider adding polyfills for better compatibility

```

```

🚦 GreenLightCI - Baseline Compatibility Check### With Dashboard Integration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```

src/styles/main.css [85/100]🚦 GreenLightCI - Baseline Compatibility Check

  ⚠ Container Queries - Newly Available━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ⚠ CSS Nesting - Newly Available

src/styles/main.css [85/100]

📊 Scan Summary  ⚠ Container Queries - Newly Available

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ⚠ CSS Nesting - Newly Available



Files Scanned:      15📊 Scan Summary

Features Detected:  32━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Blocking Issues:    0

Warnings:           5Files Scanned:      15

Average Score:      88Features Detected:  32

Blocking Issues:    0

█████████████████░░░ 88%Warnings:           5

Average Score:      88

⚠ Found 5 warnings

  Consider adding polyfills for better compatibility█████████████████░░░ 88%



📊 Sending scan data to dashboard...⚠ Found 5 warnings

✓ Scan data sent to dashboard (Scan ID: scan_abc123xyz)  Consider adding polyfills for better compatibility

🔗 View results: https://greenlightci-dashboard.vercel.app/projects/my-project

```📊 Sending scan data to dashboard...

✓ Scan data sent to dashboard (Scan ID: scan_abc123xyz)

### Watch Mode🔗 View results: https://greenlightci-dashboard.vercel.app/projects/my-project

```

```

👀 GreenLightCI - Watch Mode### Watch Mode

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```

ℹ Watching: ./src👀 GreenLightCI - Watch Mode

ℹ Target Year: 2023━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ℹ Press Ctrl+C to stop

ℹ Watching: ./src

✓ Initial scan complete. Watching for changes... (24 files)ℹ Target Year: 2023

ℹ Press Ctrl+C to stop

[10:45:23] changed src/styles/main.css

  Score: 85/100 | Features: 3✓ Initial scan complete. Watching for changes... (24 files)

  ⚠ Container Queries - ⚠ Newly Available

  ⚠ CSS Nesting - ⚠ Newly Available[10:45:23] changed src/styles/main.css

⚠ Consider adding polyfills  Score: 85/100 | Features: 3

```  ⚠ Container Queries - ⚠ Newly Available

  ⚠ CSS Nesting - ⚠ Newly Available

## 🎨 Supported Features⚠ Consider adding polyfills

```

### CSS Features

## 🎨 Supported Features

- Container Queries (`@container`)

- `:has()` Selector### CSS Features

- CSS Grid

- Subgrid- Container Queries (`@container`)

- CSS Nesting- `:has()` Selector

- Custom Properties (CSS Variables)- CSS Grid

- Logical Properties- Subgrid

- CSS Nesting

### JavaScript Features- Custom Properties (CSS Variables)

- Logical Properties

- Optional Chaining (`?.`)

- Nullish Coalescing (`??`)### JavaScript Features

- Dynamic Import

- Top-level Await- Optional Chaining (`?.`)

- Private Fields- Nullish Coalescing (`??`)

- Dynamic Import

## 🔧 Configuration- Top-level Await

- Private Fields

You can create a `.greenlightrc.json` file in your project root:

## 🔧 Configuration

```json

{You can create a `.greenlightrc.json` file in your project root:

  "targetYear": "2023",

  "blockNewly": false,```json

  "blockLimited": true,{

  "include": ["src/**/*.{css,js,ts}"],  "targetYear": "2023",

  "exclude": ["node_modules/**", "dist/**"],  "blockNewly": false,

  "dashboardUrl": "https://greenlightci-dashboard.vercel.app",  "blockLimited": true,

  "dashboardApiKey": "glci_your_api_key_here"  "include": ["src/**/*.{css,js,ts}"],

}  "exclude": ["node_modules/**", "dist/**"],

```  "dashboardUrl": "https://greenlightci-dashboard.vercel.app",

  "dashboardApiKey": "glci_your_api_key_here"

**Note:** For security, avoid committing API keys to version control. Use environment variables instead.}

```

## 📄 File Support

**Note:** For security, avoid committing API keys to version control. Use environment variables instead.

Supported file extensions:

## 📄 File Support

- **CSS**: `.css`, `.scss`, `.less`

- **JavaScript**: `.js`, `.ts`, `.jsx`, `.tsx`Supported file extensions:

- **Frameworks**: `.vue`, `.svelte`

- **CSS**: `.css`, `.scss`, `.less`

## 💡 Tips- **JavaScript**: `.js`, `.ts`, `.jsx`, `.tsx`

- **Frameworks**: `.vue`, `.svelte`

1. **Use watch mode during development** - Get instant feedback on compatibility

2. **Generate reports before releases** - Create HTML reports for stakeholders## 💡 Tips

3. **Integrate with CI/CD** - Use JSON output for automated checks

4. **Customize patterns** - Focus on specific directories with include/exclude1. **Use watch mode during development** - Get instant feedback on compatibility

5. **Use verbose mode** - Get detailed information about each feature2. **Generate reports before releases** - Create HTML reports for stakeholders

6. **Enable dashboard integration** - Track trends and share results with your team3. **Integrate with CI/CD** - Use JSON output for automated checks

7. **Use environment variables for API keys** - Keep credentials secure and out of version control4. **Customize patterns** - Focus on specific directories with include/exclude

5. **Use verbose mode** - Get detailed information about each feature

## 🤝 Integration6. **Enable dashboard integration** - Track trends and share results with your team

7. **Use environment variables for API keys** - Keep credentials secure and out of version control

### NPM Scripts

## 🤝 Integration

Add to your `package.json`:

### NPM Scripts

```json

{Add to your `package.json`:

  "scripts": {

    "baseline:check": "greenlightci check",```json

    "baseline:watch": "greenlightci watch",{

    "baseline:report": "greenlightci report",  "scripts": {

    "baseline:check:dashboard": "greenlightci check --dashboard-url $GREENLIGHTCI_DASHBOARD_URL --dashboard-api-key $GREENLIGHTCI_API_KEY"    "baseline:check": "greenlightci check",

  }    "baseline:watch": "greenlightci watch",

}    "baseline:report": "greenlightci report",

```    "baseline:check:dashboard": "greenlightci check --dashboard-url $GREENLIGHTCI_DASHBOARD_URL --dashboard-api-key $GREENLIGHTCI_API_KEY"

  }

### Pre-commit Hook}

```

```bash

# .husky/pre-commit### Pre-commit Hook

#!/bin/sh

npx greenlightci check --block-newly --block-limited```bash

```# .husky/pre-commit

#!/bin/sh

### CI/CD Pipelinenpx greenlightci check --block-newly --block-limited

```

```yaml

# .github/workflows/baseline-check.yml### CI/CD Pipeline

name: Baseline Compatibility Check

```yaml

on: [push, pull_request]# .github/workflows/baseline-check.yml

name: Baseline Compatibility Check

jobs:

  check:on: [push, pull_request]

    runs-on: ubuntu-latest

    steps:jobs:

      - uses: actions/checkout@v3  check:

          runs-on: ubuntu-latest

      - name: Setup Node.js    steps:

        uses: actions/setup-node@v3      - uses: actions/checkout@v3

        with:      

          node-version: '18'      - name: Setup Node.js

              uses: actions/setup-node@v3

      - name: Install GreenLightCI CLI        with:

        run: npm install -g @greenlightci/cli          node-version: '18'

            

      - name: Run Baseline Check      - name: Install GreenLightCI CLI

        run: greenlightci check --json > baseline-report.json        run: npm install -g @greenlightci/cli

        env:      

          GREENLIGHTCI_DASHBOARD_URL: ${{ secrets.GREENLIGHTCI_DASHBOARD_URL }}      - name: Run Baseline Check

          GREENLIGHTCI_API_KEY: ${{ secrets.GREENLIGHTCI_API_KEY }}        run: greenlightci check --json > baseline-report.json

              env:

      - name: Upload Report          GREENLIGHTCI_DASHBOARD_URL: ${{ secrets.GREENLIGHTCI_DASHBOARD_URL }}

        uses: actions/upload-artifact@v3          GREENLIGHTCI_API_KEY: ${{ secrets.GREENLIGHTCI_API_KEY }}

        with:      

          name: baseline-report      - name: Upload Report

          path: baseline-report.json        uses: actions/upload-artifact@v3

```        with:

          name: baseline-report

**Note:** Add `GREENLIGHTCI_DASHBOARD_URL` and `GREENLIGHTCI_API_KEY` as repository secrets for dashboard integration.          path: baseline-report.json

```

## 📚 Related Packages

**Note:** Add `GREENLIGHTCI_DASHBOARD_URL` and `GREENLIGHTCI_API_KEY` as repository secrets for dashboard integration.

- **[@greenlightci/action](../action)** - GitHub Action for PR checks

- **[@greenlightci/dashboard](../dashboard)** - Web dashboard for tracking adoption## 📚 Related Packages

- **[@greenlightci/shared](../shared)** - Shared utilities and types

- **[@greenlightci/action](../action)** - GitHub Action for PR checks

## 📝 License- **[@greenlightci/dashboard](../dashboard)** - Web dashboard for tracking adoption

- **[@greenlightci/shared](../shared)** - Shared utilities and types

MIT

## 📝 License

## 🐛 Issues

MIT

Report issues on [GitHub](https://github.com/exprays/greenlightci/issues)

## 🐛 Issues

## 🙏 Credits

Report issues on [GitHub](https://github.com/exprays/greenlightci/issues)

Built with:

## 🙏 Credits

- [Commander.js](https://github.com/tj/commander.js) - CLI framework

- [Chalk](https://github.com/chalk/chalk) - Terminal colorsBuilt with:

- [Ora](https://github.com/sindresorhus/ora) - Terminal spinners

- [Chokidar](https://github.com/paulmillr/chokidar) - File watching- [Commander.js](https://github.com/tj/commander.js) - CLI framework

- [web-features](https://github.com/web-platform-dx/web-features) - Baseline data- [Chalk](https://github.com/chalk/chalk) - Terminal colors

- [Ora](https://github.com/sindresorhus/ora) - Terminal spinners

---- [Chokidar](https://github.com/paulmillr/chokidar) - File watching

- [web-features](https://github.com/web-platform-dx/web-features) - Baseline data

Made with ❤️ by Surya for the Baseline Tooling Hackathon

---

Made with ❤️ by Surya for the Baseline Tooling Hackathon
