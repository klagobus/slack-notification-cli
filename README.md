# slack-notification-client

A new CLI generated with oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/slack-notification-cli.svg)](https://npmjs.org/package/slack-notification-cli)
[![Downloads/week](https://img.shields.io/npm/dw/slack-notification-cli.svg)](https://npmjs.org/package/slack-notification-cli)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g slack-notification-cli
$ notify COMMAND
running command...
$ notify (--version)
slack-notification-cli/0.0.0 win32-x64 node-v20.15.1
$ notify --help [COMMAND]
USAGE
  $ notify COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`notify help [COMMAND]`](#notify-help-command)
- [`notify plugins`](#notify-plugins)
- [`notify plugins add PLUGIN`](#notify-plugins-add-plugin)
- [`notify plugins:inspect PLUGIN...`](#notify-pluginsinspect-plugin)
- [`notify plugins install PLUGIN`](#notify-plugins-install-plugin)
- [`notify plugins link PATH`](#notify-plugins-link-path)
- [`notify plugins remove [PLUGIN]`](#notify-plugins-remove-plugin)
- [`notify plugins reset`](#notify-plugins-reset)
- [`notify plugins uninstall [PLUGIN]`](#notify-plugins-uninstall-plugin)
- [`notify plugins unlink [PLUGIN]`](#notify-plugins-unlink-plugin)
- [`notify plugins update`](#notify-plugins-update)
- [`notify send`](#notify-send)

## `notify help [COMMAND]`

Display help for notify.

```
USAGE
  $ notify help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for notify.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.21/src/commands/help.ts)_

## `notify plugins`

List installed plugins.

```
USAGE
  $ notify plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ notify plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/index.ts)_

## `notify plugins add PLUGIN`

Installs a plugin into notify.

```
USAGE
  $ notify plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into notify.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the TESTS_NOTIFY_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the TESTS_NOTIFY_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ notify plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ notify plugins add myplugin

  Install a plugin from a github url.

    $ notify plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ notify plugins add someuser/someplugin
```

## `notify plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ notify plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ notify plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/inspect.ts)_

## `notify plugins install PLUGIN`

Installs a plugin into notify.

```
USAGE
  $ notify plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into notify.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the TESTS_NOTIFY_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the TESTS_NOTIFY_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ notify plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ notify plugins install myplugin

  Install a plugin from a github url.

    $ notify plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ notify plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/install.ts)_

## `notify plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ notify plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ notify plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/link.ts)_

## `notify plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ notify plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ notify plugins unlink
  $ notify plugins remove

EXAMPLES
  $ notify plugins remove myplugin
```

## `notify plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ notify plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/reset.ts)_

## `notify plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ notify plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ notify plugins unlink
  $ notify plugins remove

EXAMPLES
  $ notify plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/uninstall.ts)_

## `notify plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ notify plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ notify plugins unlink
  $ notify plugins remove

EXAMPLES
  $ notify plugins unlink myplugin
```

## `notify plugins update`

Update installed plugins.

```
USAGE
  $ notify plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/update.ts)_

## `notify send`

Send a Slack notification

```
USAGE
  $ notify send -t <value> -c <value> -f <value>

FLAGS
  -c, --channel=<value>  (required) Slack channel ID
  -f, --config=<value>   (required) Path to notification config JSON
  -t, --token=<value>    (required) Slack API token

DESCRIPTION
  Send a Slack notification
```

<!-- commandsstop -->
