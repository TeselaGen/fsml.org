import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SchemaViewer from 'material-ui-json-schema-viewer';
import fsmlSchema from './fsml.schema.json';


const myTheme= createMuiTheme({
  palette:{
    type: 'dark'
  }
});

export default function JsonSchemaViewer() {
  return (
    <ThemeProvider theme={myTheme}>
      <SchemaViewer
        schema={fsmlSchema}
      />
    </ThemeProvider>
  );
}
