slack-notification-client
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/slack-notification-client.svg)](https://npmjs.org/package/slack-notification-client)
[![Downloads/week](https://img.shields.io/npm/dw/slack-notification-client.svg)](https://npmjs.org/package/slack-notification-client)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g slack-notification-cli
$ tests-notify COMMAND
running command...
$ tests-notify (--version)
slack-notification-cli/0.0.0 win32-x64 node-v20.15.1
$ tests-notify --help [COMMAND]
USAGE
  $ tests-notify COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tests-notify help [COMMAND]`](#tests-notify-help-command)
* [`tests-notify plugins`](#tests-notify-plugins)
* [`tests-notify plugins add PLUGIN`](#tests-notify-plugins-add-plugin)
* [`tests-notify plugins:inspect PLUGIN...`](#tests-notify-pluginsinspect-plugin)
* [`tests-notify plugins install PLUGIN`](#tests-notify-plugins-install-plugin)
* [`tests-notify plugins link PATH`](#tests-notify-plugins-link-path)
* [`tests-notify plugins remove [PLUGIN]`](#tests-notify-plugins-remove-plugin)
* [`tests-notify plugins reset`](#tests-notify-plugins-reset)
* [`tests-notify plugins uninstall [PLUGIN]`](#tests-notify-plugins-uninstall-plugin)
* [`tests-notify plugins unlink [PLUGIN]`](#tests-notify-plugins-unlink-plugin)
* [`tests-notify plugins update`](#tests-notify-plugins-update)
* [`tests-notify send`](#tests-notify-send)

## `tests-notify help [COMMAND]`

Display help for tests-notify.

```
USAGE
  $ tests-notify help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for tests-notify.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.21/src/commands/help.ts)_

## `tests-notify plugins`

List installed plugins.

```
USAGE
  $ tests-notify plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ tests-notify plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/index.ts)_

## `tests-notify plugins add PLUGIN`

Installs a plugin into tests-notify.

```
USAGE
  $ tests-notify plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into tests-notify.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the TESTS_NOTIFY_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the TESTS_NOTIFY_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ tests-notify plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ tests-notify plugins add myplugin

  Install a plugin from a github url.

    $ tests-notify plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ tests-notify plugins add someuser/someplugin
```

## `tests-notify plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ tests-notify plugins inspect PLUGIN...

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
  $ tests-notify plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/inspect.ts)_

## `tests-notify plugins install PLUGIN`

Installs a plugin into tests-notify.

```
USAGE
  $ tests-notify plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into tests-notify.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the TESTS_NOTIFY_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the TESTS_NOTIFY_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ tests-notify plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ tests-notify plugins install myplugin

  Install a plugin from a github url.

    $ tests-notify plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ tests-notify plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/install.ts)_

## `tests-notify plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ tests-notify plugins link PATH [-h] [--install] [-v]

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
  $ tests-notify plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/link.ts)_

## `tests-notify plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ tests-notify plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tests-notify plugins unlink
  $ tests-notify plugins remove

EXAMPLES
  $ tests-notify plugins remove myplugin
```

## `tests-notify plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ tests-notify plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/reset.ts)_

## `tests-notify plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ tests-notify plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tests-notify plugins unlink
  $ tests-notify plugins remove

EXAMPLES
  $ tests-notify plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/uninstall.ts)_

## `tests-notify plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ tests-notify plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tests-notify plugins unlink
  $ tests-notify plugins remove

EXAMPLES
  $ tests-notify plugins unlink myplugin
```

## `tests-notify plugins update`

Update installed plugins.

```
USAGE
  $ tests-notify plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/update.ts)_

## `tests-notify send`

Send a Slack notification

```
USAGE
  $ tests-notify send -t <value> -c <value> -f <value>

FLAGS
  -c, --channel=<value>  (required) Slack channel ID
  -f, --config=<value>   (required) Path to notification config JSON
  -t, --token=<value>    (required) Slack API token

DESCRIPTION
  Send a Slack notification
```
<!-- commandsstop -->
