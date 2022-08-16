import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import fsmlSchema from './fsml.schema.json';

export default function JsonSchemaViewer() {
  return <BrowserOnly fallback={<div>Loading...</div>}>
    {() => {
      const { createMuiTheme, ThemeProvider } = require('@material-ui/core/styles');
      const SchemaViewer = require('material-ui-json-schema-viewer').default
      const myTheme= createMuiTheme({
        palette:{
          type: 'dark'
        }
      });

      return (
        <ThemeProvider theme={myTheme}>
          <SchemaViewer
            schema={fsmlSchema}
          />
        </ThemeProvider>
      );
    }}
  </BrowserOnly>
}
