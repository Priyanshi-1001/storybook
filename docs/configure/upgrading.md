---
title: 'Upgrading Storybook'
---

The frontend ecosystem is a fast-moving place. Regular dependency upgrades are a way of life, whether upgrading a framework, library, tooling, or all of the above! Storybook provides a few resources to help ease the pain of upgrading.

## Upgrade script

The most common upgrade is Storybook itself. [Storybook releases](https://storybook.js.org/releases) follow [Semantic Versioning](https://semver.org/). We publish patch releases with bug fixes continuously, minor versions of Storybook with new features every few months, and major versions of Storybook with breaking changes roughly once per year.

To help ease the pain of keeping Storybook up-to-date, we provide a command-line script:

<!-- prettier-ignore-start -->

<CodeSnippets
  paths={[
    'common/storybook-upgrade.npm.js.mdx',
    'common/storybook-upgrade.pnpm.js.mdx',
    'common/storybook-upgrade.yarn.js.mdx',
  ]}
/>

<!-- prettier-ignore-end -->

After running the command, the script will:

- Upgrade all Storybook packages in your project to the latest stable version
- Run the relevant [automigrations](../migration-guide.md#automatic-upgrade) factoring in the [breaking changes](../migration-guide.md#major-breaking-changes) between your current version and the latest stable version

<Callout variant="info">

In addition to running the command, we also recommend checking the [MIGRATION.md file](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md), for the detailed log of relevant changes and deprecations that might affect your upgrade.

</Callout>

### Verifying the upgrade

To help you verify that the upgrade was completed and that your project is still working as expected, the Storybook CLI provides the [`doctor`](../api/cli-options.md#doctor) command that allows you to do a health check on your project for common issues that might arise after an upgrade, such as duplicated dependencies, incompatible addons or mismatched versions. To perform the health check, run the following command with your package manager of choice:

<!-- prettier-ignore-start -->

<CodeSnippets
  paths={[
    'common/storybook-doctor.npm.js.mdx',
    'common/storybook-doctor.pnpm.js.mdx',
    'common/storybook-doctor.yarn.js.mdx',
  ]}
/>

<!-- prettier-ignore-end -->

## Automigrate script

Storybook upgrades are not the only thing to consider: changes in the ecosystem also present challenges. For example well-known frontend frameworks, such as [Angular](https://update.angular.io/?l=2&v=16.0-17.0), [Next.js](https://nextjs.org/docs/pages/building-your-application/upgrading) or [Svelte](https://svelte.dev/docs/v4-migration-guide) have been rolling out significant changes to their ecosystem, so even if you don't upgrade your Storybook version, you might need to update your configuration accordingly. That's what Automigrate is for:

<!-- prettier-ignore-start -->

<CodeSnippets
  paths={[
    'common/storybook-automigrate.npm.js.mdx',
    'common/storybook-automigrate.pnpm.js.mdx',
    'common/storybook-automigrate.yarn.js.mdx',
  ]}
/>

<!-- prettier-ignore-end -->

It runs a set of standard configuration checks, explains what is potentially out-of-date, and offers to fix it for you automatically. It also points to the relevant documentation so you can learn more. It runs automatically as part of [`storybook upgrade`](#upgrade-script) command, but it's also available on its own if you don't want to upgrade Storybook.

## Prereleases

In addition to the above, Storybook is under constant development, and we publish pre-release versions almost daily. Pre-releases are the best way to try out new features before they are generally available, and we do our best to keep them as stable as possible, although this is not always possible.

To upgrade to the latest pre-release:

<!-- prettier-ignore-start -->

<CodeSnippets
  paths={[
    'common/storybook-upgrade-prerelease.npm.js.mdx',
    'common/storybook-upgrade-prerelease.pnpm.js.mdx',
    'common/storybook-upgrade-prerelease.yarn.js.mdx',
  ]}
/>

<!-- prettier-ignore-end -->

If you'd like to downgrade to a stable version, manually edit the package version numbers in your `package.json` and re-install.

<Callout variant="info">

Storybook collects completely anonymous data to help us improve user experience. Participation is optional, and you may [opt-out](../configure/telemetry.md#how-to-opt-out) if you'd not like to share any information.

</Callout>

<IfRenderer renderer='vue'>

## Troubleshooting

### Storybook doesn't upgrade to the latest version when using Vue 2

If you're attempting to upgrade Storybook to the latest version in your existing Vue 2 project, you will no longer be able to. This is because Vue 2 entered [End of Life](https://v2.vuejs.org/lts/) (EOL) on December 31st, 2023, and will no longer receive any updates from the Vue team. We recommend you upgrade your Vue 2 project to Vue 3 and then upgrade Storybook to the latest version. If you cannot upgrade your Vue 2 project to Vue 3, you can still upgrade Storybook, but only for the latest 7.x version. You can do this by running the following command:

<!-- prettier-ignore-start -->

<CodeSnippets
  paths={[
    'common/upgrade-command-specific-version.npx.js.mdx',
    'common/upgrade-command-specific-version.yarn.js.mdx',
    'common/upgrade-command-specific-version.pnpm.js.mdx',
  ]}
/>

<!-- prettier-ignore-end -->

</IfRenderer>
