# Deploying Queens Game with Expo

This document provides comprehensive instructions for deploying and managing the Queens Game application using Expo and EAS (Expo Application Services).

## Table of Contents
- [Setting Up Expo](#setting-up-expo)
- [Authentication with Expo CLI](#authentication-with-expo-cli)
- [Configuring Different Environments](#configuring-different-environments)
- [Building and Publishing](#building-and-publishing)
- [Testing on Devices](#testing-on-devices)
- [Troubleshooting Common Issues](#troubleshooting-common-issues)
- [Update Guidelines](#update-guidelines)

## Setting Up Expo

Before you begin, make sure you have the following prerequisites:

1. Node.js (v22.16 or higher recommended)
2. Expo CLI and EAS CLI installed
3. An Expo account

### Installing Required Tools

```bash
# Install Expo CLI and EAS CLI
npm install --save-dev eas-cli@latest expo-cli@latest

# Or install globally
npm install -g expo-cli eas-cli
```

## Authentication with Expo CLI

To authenticate with Expo services:

```bash
# Log in to your Expo account
npm run eas:login
# Or if installed globally
eas login

# Verify you're logged in
eas whoami
```

If you need to create a new Expo account, visit [https://expo.dev/signup](https://expo.dev/signup).

### Project Configuration

Ensure your project is properly configured with Expo:

```bash
# Initialize Expo updates configuration
npx eas update:configure
```

This will verify your project is properly set up with the correct projectId and runtime configuration.

## Configuring Different Environments

### Environment Configuration

The Queens Game app supports multiple environments:

1. **Development** - For local development and testing
2. **Preview** - For internal testing and QA
3. **Production** - For public release

These environments are configured in both `app.json` and `eas.json` files.

### Environment Variables

Set up environment-specific variables using EAS:

```bash
# Set a secret for the preview environment
eas secret:create --scope project --name EXPO_PUBLIC_API_URL --value "https://preview-api.queensgame.app" --environment preview

# Set a secret for the production environment
eas secret:create --scope project --name EXPO_PUBLIC_API_URL --value "https://api.queensgame.app" --environment production
```

### Update Channels

Updates are managed through channels that correspond to build profiles:

- `preview` channel → preview builds
- `production` channel → production builds

These channels are configured in `app.json` and `eas.json` files.

## Building and Publishing

### Creating Development Builds

For development and local testing:

```bash
# Create a development build for Android
npm run eas:build:android -- --profile development
# Or
eas build --profile development --platform android

# Create a development build for iOS
npm run eas:build:ios -- --profile development
# Or
eas build --profile development --platform ios
```

### Creating Preview Builds

For internal distribution and testing:

```bash
# Create a preview build for Android
npm run eas:build:preview -- --platform android
# Or
eas build --profile preview --platform android

# Create a preview build for iOS
npm run eas:build:preview -- --platform ios
# Or
eas build --profile preview --platform ios
```

### Creating Production Builds

For app store submission:

```bash
# Create a production build for Android
npm run eas:build:production -- --platform android
# Or
eas build --profile production --platform android

# Create a production build for iOS
npm run eas:build:production -- --platform ios
# Or
eas build --profile production --platform ios
```

### Publishing Updates

After making changes to your JavaScript code or assets:

```bash
# Publish an update to the preview channel
npm run eas:update:preview -- --message "Fixed login screen bug"
# Or
eas update --channel preview --message "Fixed login screen bug"

# Publish an update to the production channel
npm run eas:update:production -- --message "Updated game levels"
# Or
eas update --channel production --message "Updated game levels"
```

### Submitting to App Stores

When your app is ready for submission to app stores:

```bash
# Submit to Google Play Store
npm run eas:submit -- --platform android
# Or
eas submit --platform android --profile production

# Submit to Apple App Store
npm run eas:submit -- --platform ios
# Or
eas submit --platform ios --profile production
```

## Testing on Devices

### Testing with Expo Go

For development purposes:

```bash
# Start the development server with Expo
npm run expo
# Or with clear cache
npm run expo:clear

# Start specific platform
npm run android
npm run ios
npm run web
```

Then scan the QR code with the Expo Go app on your device or use the Expo Go app to find your project.

### Development Client Testing

For testing with a development client:

1. Build a development client:
```bash
eas build --profile development --platform ios
eas build --profile development --platform android
```

2. Install the development client on your device
3. Run the development server:
```bash
expo start --dev-client
```

### Testing Internal Builds

For preview builds:

1. Share the build URL from your EAS dashboard
2. Users can install directly from the URL on Android devices
3. For iOS, register devices and distribute using:
```bash
# Register a new test device
eas device:create
```

4. Add testers to internal distribution groups in EAS dashboard
5. For iOS, add test users to TestFlight via App Store Connect

### Physical Device Setup

For iOS devices:
1. Register your device's UDID in your Apple Developer account
2. Add the device to your provisioning profile
3. Build with the correct provisioning profile:
```bash
eas build --profile development --platform ios --udid YOUR_DEVICE_UDID
```

For Android devices:
1. Enable Developer Options and USB Debugging on your device
2. Connect your device via USB
3. Run:
```bash
npm run android
```

## Troubleshooting Common Issues

### Update Not Appearing

If your app isn't receiving updates:

1. Verify that the `runtimeVersion` in `app.json` matches the native build
2. Confirm the channel name is correct in the update command
3. Force close and reopen the app twice to ensure the update is applied
4. Check logs using `expo-dev-client` in development builds
5. Verify your internet connection is stable

### Build Failures

Common build issues and solutions:

1. **Credential Issues**: Run `eas credentials` to manage or reset credentials
2. **Dependency Conflicts**: 
   - Check for incompatible native dependencies
   - Try installing with `--legacy-peer-deps` or `--force` flag
   - Run `npm audit fix` to resolve security issues

3. **Resource Issues**: 
   - Ensure image assets meet size requirements
   - Check that app icon and splash screen match specifications

4. **EAS Build Quota**: Check your EAS plan limits
5. **Native Module Linking**: For native modules, ensure they are properly linked

### Connection Problems

If you're experiencing connection issues:

```bash
# Check EAS service status
eas diagnostics

# Verify your authentication
eas whoami

# Restart with a clean cache
npm run expo:clear
```

### Common Expo Errors

1. **"Unable to resolve module..."** - Check your import paths and ensure all packages are installed
2. **"Cannot read property of undefined"** - Check for null objects in your app's state
3. **"Metro bundler process exited"** - Try clearing the cache with `expo start -c`
4. **"Device not connected"** - Check USB connection or network connectivity for wireless debugging

## Update Guidelines

### Best Practices

1. **Test Updates Thoroughly**: Always test updates on development and preview channels before publishing to production
2. **Semantic Versioning**: Follow semantic versioning for app versions:
   - Increment major version for breaking changes
   - Increment minor version for new features
   - Increment patch version for bug fixes

3. **Atomic Updates**: Focus on specific changes in each update
4. **Rollback Plan**: Have a plan to quickly publish a previous version if issues are found
5. **Progressive Rollouts**: Consider using EAS's gradual rollout feature for critical updates

### Version Management

For major updates requiring native code changes:

1. Update the `runtimeVersion` in `app.json`
2. Update the version numbers in `app.json`:
   ```json
   {
     "expo": {
       "version": "1.2.0",
       "ios": {
         "buildNumber": "4"
       },
       "android": {
         "versionCode": 4
       }
     }
   }
   ```
3. Create new builds with `eas build`
4. Submit the new builds to app stores

For JavaScript-only updates:

1. Keep the same `runtimeVersion`
2. Use `eas update` to push changes quickly
3. Include clear update messages describing changes

### Monitoring Updates

Monitor the adoption and performance of your updates:

1. Check the EAS dashboard for update metrics
2. Use the Analytics tab to track user adoption
3. Monitor crash reports through the EAS dashboard
4. Set up alerts for significant changes in error rates or adoption

## CI/CD Integration

For continuous integration and delivery:

1. Set up GitHub Actions or other CI/CD platforms with EAS CLI
2. Configure automated builds for pull requests and releases
3. Use EAS secrets for securely storing credentials
4. Example GitHub Actions workflow:
```yaml
name: EAS Build
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 22.x
      - name: Setup EAS
        uses: expo/eas-cli@v0.60.0
      - name: Install dependencies
        run: npm ci
      - name: Build on EAS
        run: eas build --platform all --non-interactive
```

## Additional Resources

- [EAS Documentation](https://docs.expo.dev/eas/)
- [Expo Updates SDK](https://docs.expo.dev/versions/latest/sdk/updates/)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [EAS Submit Documentation](https://docs.expo.dev/submit/introduction/)
- [Queens Game GitHub Repository](https://github.com/oleksan0115/queens-game)

---

For additional support, join the [Expo Community Discord](https://chat.expo.dev/) or contact your team lead.