---
title: 'FSML CLI'
metaTitle: 'FSML Manifest for MicroByre'
metaDescription: 'MicroByre FSML Manifest Example'
sidebar_position: 1
---

# MicroByre: FSML Manifest Generation

This is a real-world example from FSML partner **MicroByre**.

This example showcases how to leverage the FSML CLI tool to install a parser plugin compatible with the FSML Plugin Framework and generate an FSML manifest from a data file.

Three files are necessary to carry on with this example and those are available in the following link:

<!-- Not sure how to reference the file in the static folder -->
- [**microbyreExample.zip**](https://raw.githubusercontent.com/TeselaGen/fsml.org/main/website/static/microbyreExample-01.zip)

## Installing the FSML CLI Tool

Follow the steps in [Installing CLI Tool](/software/tools/cli#installing-cli-tool). Get familiarized with the CLI Tool commands in [CLI Tool](/software/tools/cli).

## Installing the Microbyre plugin

We need to install the microbyreParser.ts plugin that contains the custom logic to parse the Microbyre Data Lector files.

To do so, run the following commands:

```
    $> fsml plugin install microbyreParser --from-url file://$(pwd)/microbyreParser.ts
```

Note that the ‘$(pwd)’ part of the --from-url option is just to get you working directory, this assumes you have your parser located here.

Now to double-check the parser is properly installed you can run the following command:

```
    $> fsml plugin list
```

You should see something like this _(the actual file:// will depend on the current directory you are working in)_

```
- name: microbyreParser
  version: latest
  url: >-
    file:///fsml/microbyreParser.ts
  uriScheme: file
  type: generic
  cached: true
```

## Parsing Data Files into an FSML Manifest

Now that we have the proper parser installed we can use it to parse one of the Data Lector Files. Run the following command:

```
    $> fsml manifest create microbyreData.csv --parser microbyreParser --type data --author YOUR_NAME --format json --write mbManifest --pack tar
```

Note all the flags passed to the command? Well, we can set some of them as defaults so we don’t have to pass them in every time.

To do so we can use the “defaults” commands:

```
	$> fsml defaults set manifest.type data
	$> fsml defaults set manifest.author YOUR_NAME
	$> fsml defaults set manifest.format json
	$> fsml defaults set manifest.write myManifest
	$> fsml defaults set manifest.pack tar
```

Now you can try the previous command with fewer flags.

```
    $> fsml manifest create microbyreData.csv --parser microbyreParser
```

That’s it, you should have generated some .tar files. You can untar them and you shall see your fsml.json manifest file.

Feel free to continue exploring the different commands at [Software > Tools > CLI](../software/tools/cli.md) and implementing your own plugin parsers following the [Plugin Framework](../software/plugins/index.md).
