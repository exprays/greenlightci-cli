# 🚦 GreenLightCI CLI

A command-line tool for checking Baseline web feature compatibility in your local projects.

## 📖 Quick- `--include <patterns>` - File patterns to include
- `--exclude <patterns>` - File patterns to exclude

### All Options Reference

#### Common Options (Available in all commands)

| Option | Alias | Type | Default | Description |
|--------|-------|------|---------|-------------|
| `--target-year` | `-t` | string | `2023` | Target Baseline year (2023, 2024, etc.) |
| `--include` | - | string | `**/*.{css,scss,less,js,jsx,ts,tsx,vue,svelte}` | File patterns to include (glob) |
| `--exclude` | - | string | `**/node_modules/**,**/dist/**,**/build/**` | File patterns to exclude (glob) |

#### Check Command Options

| Option | Alias | Type | Default | Description |
|--------|-------|------|---------|-------------|
| `--block-newly` | - | boolean | `false` | Treat newly available features as errors |
| `--block-limited` | - | boolean | `false` | Treat limited availability features as errors |
| `--json` | - | boolean | `false` | Output results as JSON |
| `--verbose` | - | boolean | `false` | Show detailed output for all files |
| `--dashboard-url` | - | string | - | Dashboard URL (env: `GREENLIGHTCI_DASHBOARD_URL`) |
| `--dashboard-api-key` | - | string | - | Dashboard API key (env: `GREENLIGHTCI_API_KEY`) |

#### Watch Command Options

| Option | Alias | Type | Default | Description |
|--------|-------|------|---------|-------------|
| `--block-newly` | - | boolean | `false` | Treat newly available features as errors |
| `--block-limited` | - | boolean | `false` | Treat limited availability features as errors |

#### Report Command Options

| Option | Alias | Type | Default | Description |
|--------|-------|------|---------|-------------|
| `--output` | `-o` | string | `baseline-report.html` | Output file path |
| `--format` | - | string | `html` | Output format (`html` or `json`) |

## 🔗 Dashboard Integrationerence

```bash
# Basic usage
greenlightci check                    # Check current directory
greenlightci check ./src              # Check specific directory
greenlightci watch                    # Watch mode for live feedback
greenlightci report                   # Generate HTML report

# With dashboard integration
greenlightci check \
  --dashboard-url https://greenlightci-dashboard.vercel.app \
  --dashboard-api-key glci_your_key

# Advanced options
greenlightci check \
  --target-year 2024 \
  --block-newly \
  --block-limited \
  --verbose \
  --include "src/**/*.{js,css}" \
  --exclude "node_modules/**"
```

## 🎯 Features

- ✅ **Local file scanning** - Detect web features in CSS, JS, and framework files
- 👀 **Watch mode** - Continuously monitor files for changes
- 📊 **Rich terminal output** - Colored, formatted compatibility reports
- 📄 **HTML reports** - Generate detailed compatibility reports
- 🎨 **Multiple file types** - Supports CSS, SCSS, JS, TS, JSX, TSX, Vue, Svelte
- ⚡ **Fast scanning** - Efficiently scan large codebases
- 🔗 **Dashboard integration** - Send scan results to GreenLightCI Dashboard for tracking trends

## 📦 Installation

```bash
# Install globally
npm install -g @greenlightci/cli

# Or use with npx
npx @greenlightci/cli check
```

## 🚀 Usage

### Commands Overview

| Command | Description | Output |
|---------|-------------|--------|
| `check [path]` | Scan files for compatibility issues | Terminal output or JSON |
| `watch [path]` | Monitor files for changes | Live terminal updates |
| `report [path]` | Generate detailed compatibility report | HTML or JSON file |

### Check Command

Scan your project for Baseline compatibility issues:

```bash
# Check current directory
greenlightci check

# Check specific directory
greenlightci check ./src

# Check with custom options
greenlightci check --target-year 2024 --block-newly --verbose

# Output as JSON
greenlightci check --json > report.json
```

**Options:**

- `-t, --target-year <year>` - Target Baseline year (default: 2023)
- `--block-newly` - Block newly available features
- `--block-limited` - Block limited availability features
- `--json` - Output results as JSON
- `--verbose` - Show detailed output
- `--include <patterns>` - File patterns to include (comma-separated)
- `--exclude <patterns>` - File patterns to exclude (comma-separated)
- `--dashboard-url <url>` - Dashboard URL for sending scan results (env: `GREENLIGHTCI_DASHBOARD_URL`)
- `--dashboard-api-key <key>` - Dashboard API key for authentication (env: `GREENLIGHTCI_API_KEY`)

### Watch Mode

Continuously monitor files for changes:

```bash
# Watch current directory
greenlightci watch

# Watch specific directory
greenlightci watch ./src

# Watch with custom patterns
greenlightci watch --include "src/**/*.{js,css}" --exclude "node_modules/**"
```

**Options:**

- `-t, --target-year <year>` - Target Baseline year
- `--block-newly` - Block newly available features
- `--block-limited` - Block limited availability features
- `--include <patterns>` - File patterns to include
- `--exclude <patterns>` - File patterns to exclude

### Report Command

Generate a detailed compatibility report:

```bash
# Generate HTML report
greenlightci report

# Generate JSON report
greenlightci report --format json --output report.json

# Generate report for specific directory
greenlightci report ./src --output dist/baseline-report.html
```

**Options:**

- `-t, --target-year <year>` - Target Baseline year
- `-o, --output <file>` - Output file path (default: baseline-report.html)
- `--format <type>` - Output format: html or json (default: html)
- `--include <patterns>` - File patterns to include
- `--exclude <patterns>` - File patterns to exclude

## � Dashboard Integration

GreenLightCI CLI can send scan results to the [GreenLightCI Dashboard](https://greenlightci-dashboard.vercel.app/) for centralized tracking, trend analysis, and team visibility.

### Setup

1. **Get an API Key** from the dashboard:
   - Visit https://greenlightci-dashboard.vercel.app/
   - Sign in with GitHub
   - Go to Settings → API Keys
   - Generate a new API key

2. **Configure the CLI** using environment variables (recommended):

```bash
# Add to your .bashrc, .zshrc, or .env file
export GREENLIGHTCI_DASHBOARD_URL="https://greenlightci-dashboard.vercel.app"
export GREENLIGHTCI_API_KEY="glci_your_api_key_here"
```

Or pass as command-line options:

```bash
greenlightci check \
  --dashboard-url https://greenlightci-dashboard.vercel.app \
  --dashboard-api-key glci_your_api_key_here
```

### Usage Examples

```bash
# Check and send to dashboard (using env vars)
greenlightci check ./src

# Check and send with explicit options
greenlightci check ./src \
  --dashboard-url https://greenlightci-dashboard.vercel.app \
  --dashboard-api-key glci_abc123...

# Combine with other options
greenlightci check \
  --target-year 2024 \
  --block-newly \
  --verbose \
  --dashboard-url https://greenlightci-dashboard.vercel.app \
  --dashboard-api-key glci_abc123...
```

### Dashboard Features

When integrated with the dashboard, you get:

- 📈 **Trend tracking** - Monitor compatibility scores over time
- 📊 **Project overview** - See all your projects in one place
- 🎯 **Feature analysis** - Identify most-used and problematic features
- 👥 **Team visibility** - Share results with your team
- 📅 **Historical data** - Compare current and past scans
- 🔔 **Notifications** - Get alerts on compatibility regressions (coming soon)

### Environment Variables

- `GREENLIGHTCI_DASHBOARD_URL` - Dashboard URL (default: none)
- `GREENLIGHTCI_API_KEY` - API key for authentication (default: none)

### Security

- API keys are stored securely in the dashboard database
- Keys are transmitted over HTTPS only
- Each key can be revoked independently from the dashboard
- Keys are hashed before storage

## �📊 Example Output

### Check Command

```
🚦 GreenLightCI - Baseline Compatibility Check
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

src/styles/main.css [85/100]
  ✓ CSS Grid - Widely Available
  ⚠ Container Queries - Newly Available
  ⚠ CSS Nesting - Newly Available

src/components/Button.tsx [92/100]
  ✓ Optional Chaining - Widely Available
  ✓ Nullish Coalescing - Widely Available

📊 Scan Summary
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Files Scanned:      15
Features Detected:  32
Blocking Issues:    0
Warnings:           5
Average Score:      88

█████████████████░░░ 88%

⚠ Found 5 warnings
  Consider adding polyfills for better compatibility
```

### With Dashboard Integration

```
🚦 GreenLightCI - Baseline Compatibility Check
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

src/styles/main.css [85/100]
  ⚠ Container Queries - Newly Available
  ⚠ CSS Nesting - Newly Available

📊 Scan Summary
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Files Scanned:      15
Features Detected:  32
Blocking Issues:    0
Warnings:           5
Average Score:      88

█████████████████░░░ 88%

⚠ Found 5 warnings
  Consider adding polyfills for better compatibility

📊 Sending scan data to dashboard...
✓ Scan data sent to dashboard (Scan ID: scan_abc123xyz)
🔗 View results: https://greenlightci-dashboard.vercel.app/projects/my-project
```

### Watch Mode

```
👀 GreenLightCI - Watch Mode
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ℹ Watching: ./src
ℹ Target Year: 2023
ℹ Press Ctrl+C to stop

✓ Initial scan complete. Watching for changes... (24 files)

[10:45:23] changed src/styles/main.css
  Score: 85/100 | Features: 3
  ⚠ Container Queries - ⚠ Newly Available
  ⚠ CSS Nesting - ⚠ Newly Available
⚠ Consider adding polyfills
```

## 🎨 Supported Features

### CSS Features

- Container Queries (`@container`)
- `:has()` Selector
- CSS Grid
- Subgrid
- CSS Nesting
- Custom Properties (CSS Variables)
- Logical Properties

### JavaScript Features

- Optional Chaining (`?.`)
- Nullish Coalescing (`??`)
- Dynamic Import
- Top-level Await
- Private Fields

## 🔧 Configuration

You can create a `.greenlightrc.json` file in your project root:

```json
{
  "targetYear": "2023",
  "blockNewly": false,
  "blockLimited": true,
  "include": ["src/**/*.{css,js,ts}"],
  "exclude": ["node_modules/**", "dist/**"],
  "dashboardUrl": "https://greenlightci-dashboard.vercel.app",
  "dashboardApiKey": "glci_your_api_key_here"
}
```

**Note:** For security, avoid committing API keys to version control. Use environment variables instead.

## 📄 File Support

Supported file extensions:

- **CSS**: `.css`, `.scss`, `.less`
- **JavaScript**: `.js`, `.ts`, `.jsx`, `.tsx`
- **Frameworks**: `.vue`, `.svelte`

## 💡 Tips

1. **Use watch mode during development** - Get instant feedback on compatibility
2. **Generate reports before releases** - Create HTML reports for stakeholders
3. **Integrate with CI/CD** - Use JSON output for automated checks
4. **Customize patterns** - Focus on specific directories with include/exclude
5. **Use verbose mode** - Get detailed information about each feature
6. **Enable dashboard integration** - Track trends and share results with your team
7. **Use environment variables for API keys** - Keep credentials secure and out of version control

## 🤝 Integration

### NPM Scripts

Add to your `package.json`:

```json
{
  "scripts": {
    "baseline:check": "greenlightci check",
    "baseline:watch": "greenlightci watch",
    "baseline:report": "greenlightci report",
    "baseline:check:dashboard": "greenlightci check --dashboard-url $GREENLIGHTCI_DASHBOARD_URL --dashboard-api-key $GREENLIGHTCI_API_KEY"
  }
}
```

### Pre-commit Hook

```bash
# .husky/pre-commit
#!/bin/sh
npx greenlightci check --block-newly --block-limited
```

### CI/CD Pipeline

```yaml
# .github/workflows/baseline-check.yml
name: Baseline Compatibility Check

on: [push, pull_request]

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install GreenLightCI CLI
        run: npm install -g @greenlightci/cli
      
      - name: Run Baseline Check
        run: greenlightci check --json > baseline-report.json
        env:
          GREENLIGHTCI_DASHBOARD_URL: ${{ secrets.GREENLIGHTCI_DASHBOARD_URL }}
          GREENLIGHTCI_API_KEY: ${{ secrets.GREENLIGHTCI_API_KEY }}
      
      - name: Upload Report
        uses: actions/upload-artifact@v3
        with:
          name: baseline-report
          path: baseline-report.json
```

**Note:** Add `GREENLIGHTCI_DASHBOARD_URL` and `GREENLIGHTCI_API_KEY` as repository secrets for dashboard integration.

## 📚 Related Packages

- **[@greenlightci/action](../action)** - GitHub Action for PR checks
- **[@greenlightci/dashboard](../dashboard)** - Web dashboard for tracking adoption
- **[@greenlightci/shared](../shared)** - Shared utilities and types

## 📝 License

MIT

## 🐛 Issues

Report issues on [GitHub](https://github.com/exprays/greenlightci/issues)

## 🙏 Credits

Built with:

- [Commander.js](https://github.com/tj/commander.js) - CLI framework
- [Chalk](https://github.com/chalk/chalk) - Terminal colors
- [Ora](https://github.com/sindresorhus/ora) - Terminal spinners
- [Chokidar](https://github.com/paulmillr/chokidar) - File watching
- [web-features](https://github.com/web-platform-dx/web-features) - Baseline data

---

Made with ❤️ by Surya for the Baseline Tooling Hackathon
