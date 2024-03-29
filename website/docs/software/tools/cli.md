---
title: 'CLI'
slug: /software/tools/cli
---

# Command Line Interface

The FSML CLI tool is one of the FSML implemented client programs that interact with the FSML SDK Library. Its Application Programming Interface (API) provides access to the core FSML funcionalities and basic operations for working with FSML manifest files.

The CLI itself comes with documentation on all the available commands and what they are used for. Essentially the CLI reads and writes FSML manifest files, parses experimental data and allows the installation of either properietary or community-implemented plugins that follow the [Plugin Framework](../../plugins) interface.


## CLI Commands

To get a list of the available CLI commands type `fsml` and you should see the following commands available:
```
Commands:
  fsml defaults <subcommand>  Configures default values for CLI flags
  fsml manifest <subcommand>  Operates with the FSML manifest
  fsml plugin <subcommand>    Handles external plugin modules
```

### Defaults

If you type `fsml defaults` you should see the following subcommands available:
```
Commands:
  fsml defaults edit               Interactive mode to edit config defaults
  fsml defaults list               Lists default configs
  fsml defaults set <key> <value>  Sets a new default value for a config key
  fsml defaults reset <key>        Resets the value of a config key.
  fsml defaults reset-all          Resets the value of all configs.

Options:
  --help      Show help                                                [boolean]
  --version   Show version number                                      [boolean]
  --filepath                                         [default: "./configs.yaml"]
  --format                                                     [default: "yaml"]
```

### Manifest

If you type `fsml manifest` you should see the following subcommands available:

```
Commands:
  fsml manifest create <filepattern>  Creates an FSML manifest
  fsml manifest import <id>           Imports an FSML manifest from a registry

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --author                                                       [default: null]
  --format                                                     [default: "yaml"]
  --write                                                        [default: null]
  --pack                                                         [default: null]
  --unpack                                                      [default: false]
  --summary                                                     [default: false]
```

### Plugin
If you type `fsml plugin` you should see the following subcommands available:

```
Commands:
  fsml plugin install <module>    Installs the plugin by saving a local referenc
                                  e to it.
  fsml plugin uninstall <module>  Uninstalls the plugin by removing all local re
                                  ference to it and any related cache.
  fsml plugin list                Lists all installed plugins.
  fsml plugin upgrade <module>    Upgrades the plugin version.
  fsml plugin cache <module>      Force plugin to be downloaded and cached local
                                  ly
  fsml plugin run <module>        Runs the module

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --cache                                                       [default: false]
  --sort                                                        [default: "asc"]
  --latest                                                       [default: true]
```

## Installing CLI Tool

Download the installer files from the links provided in the [Releases](/software/tools/cli#releases) section.

- For Mac users, double-click on the installer `.pkg` file and follow through the MacOS installer steps.

- For Linux users, a popular way of installing `.deb` files is via the `dpkg` command as so:

```
    sudo dpkg -i PATH_TO_FSML_INSTALLER
```

## Trying out the FSML CLI Tool

Open a terminal window and type the following command _(note that the “$>” symbol is not to be typed, it's just used here to represent your CLI prompt)_

```
    $> fsml
```

You should see the FSML CLI helper docs.

```
fsml <command>

Commands:
  fsml defaults <subcommand>  Configures default values for CLI flags
  fsml manifest <subcommand>  Operates with the FSML manifest
  fsml plugin <subcommand>    Handles external plugin modules
```

Feel free to navigate into the CLI commands docs by typing any of the described commands (e.g., `$> fsml defaults`).

## Releases

#### Version 1.1.0
###### macos
- [**fsml-v1.1.0-296bc09-x64.pkg**](https://github.com/TeselaGen/fsml.org/releases/download/v1.3.0/fsml-v1.1.0-296bc09-arm64.pkg)
- [**fsml-v1.1.0-296bc09-arm64.pkg**](https://github.com/TeselaGen/fsml.org/releases/download/v1.3.0/fsml-v1.1.0-296bc09-x64.pkg)

###### debian
- [**fsml_1.1.0.296bc09-1_amd64.deb**](https://github.com/TeselaGen/fsml.org/releases/download/v1.3.0/fsml_1.1.0.296bc09-1_amd64.deb)
- [**fsml_1.1.0.296bc09-1_armel.deb**](https://github.com/TeselaGen/fsml.org/releases/download/v1.3.0/fsml_1.1.0.296bc09-1_armel.deb)

