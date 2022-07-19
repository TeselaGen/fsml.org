```
---
Global flags

--config/-c=[./config.json,filepath] #sets flags from config file
--stdin #reads inputs from stdin

---

help

version

create manifest 
  --type=[data,protocol]
  --parser=[...parser plugin name] 
  --format/-f=[json,yaml,toml] 
  --write/-w=[filepath] # required if pack set / by default all will be sent to stdout
  --pack=[zip,tar,tgz]
  --author=[email@mail.com] # required if not set in defaults
  <filepattern...>

update manifest
  --type=[data,protocol] 
  --parser/-p=[...parser plugin name] 
  --format/-f=[json,yaml,toml] 
  --write/-w=[filepath] # required if pack set / by default all will be sent to stdout
  --pack/-z=[zip,tar,tgz]
  --patch="{}" #inline json
  --patch-file=[filepath] #patch json file
  --patch-type=[json,json-merge,lodash-merge]
  --author=[email@mail.com] # required if not set in defaults
  <path>

fetch manifest
  --registry=<name> / --uri=<download uri>
  --format/-f=[json,yaml,toml] 
  --unpack=[true, false]
  --write/-w=[filepath] # required if pack set / by default all will be sent to stdout
  <id>

import manifest
  --from <registry name/alias> / --from-uri=<download uri>
  --to <registry name/alias>
  <id>

describe manifest
  --output/-o=[record,json (pretty print),yaml,toml]
  --write/-w=[filepath] # required if pack set / by default all will be sent to stdout
  --select=[comma separated list of property paths]
  --summary #only show summary
  --section=[supplemental section name] #only show that section
  <path>

score manifest
  --formula=[latest,vx.x.x]
  --dry-run (or --update)
  --author=[email@mail.com]
  <path>

export manifest
  --exporter=[...export plugin name]
  --write/-w=[filepath] #by default all will be sent to stdout / maybe required by some exporters
  [...--exporter flags]
  <path>

validate manifest <path>

pack manifest 
    --pack=[zip,tar,tgz]
    <path>

unpack manifest <path>

defaults edit  # runs interactive default settings mode

default list # shows default flag values

defaults set <key> <value>

defaults reset <key> # resets key to installed default

defaults reset-all # resets all keys to installed default
          --confirm 

install plugin 
  --cache 
  <path, uri>

list plugin / list plugins
  --type=[parser,exporter]
  --filter=[glob] 
  --regex=[regex]
  --sort=[asc,desc]

upgrade plugin 
  --latest / --version=[latest] / --minor / --major / --patch #one of these flags must be provided
  --cache
  <name>

uninstall plugin <name>


### Plugins will be "installed" by saving a reference to the plugin via a url however
### the plugin won't be actually downloaded until it's used. The cache command will
### force the plugin to be downloaded locally and cached 
cache plugin <name>

cache plugins #cache all plugins

delete plugin cache # removes all plugins from local cache
(or clear plugin cache)

run <plugin name> ...args


add registry  
  --platform=[gh,git,s3,gcs,ftp,fsml-api,fs]
  --alias=[alternate name]
  <uri / path>

index registry <name>

remove registry <name>

search registry <name>

serve registry
  --port=[3090]
  --name=[fsml_<shortid>]
  --properties=[./server-properties.json]
  --middleware=[..list of plugins to use a middleware]
  --allow-submissions
  --temp-dir=[./tmp]
  --index-dir=[./index]
  <manifests location>
```
