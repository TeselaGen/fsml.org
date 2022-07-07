---
title: 'PDF YAML Manifest'
metaTitle: 'FSML PDF Protocol with a YAML generated manifest'
metaDescription: 'FSML PDF Protocol with a YAML generated manifest'
---

# PDF Protocol with YAML Manifest

Below is a contrived example of what it will look like if a user has an existing protocol in a PDF file and wants to generate a protocol manifest in the YAML format.

```yaml
# ID is the hash of the file
Id: pdf-100d924bd6d9b0472fde5c3a2e6ad12c9e19c3b916022d11a728d40abf6af59d

# Who issued the ID
IdentityAuthority: FileHashSHA256
# If this file was part of a system like TeselaGen's then it would point to that instead

# Defaults to the filename without extension
Name: myprotocol

# Where can I find this protocol's source content
ContentReferences:
  - ContentFormat: pdf
    ContentURI: http://someonlinedrive.com/myprotocol.pdf
```
