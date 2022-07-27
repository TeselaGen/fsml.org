interface tagDef {
  kind: string;
  name: string;
  doc: string;
  value: string;
}

interface fnDef {
  kind: string;
  name: string;
  location: {
    filename: string;
    line: number;
    col: number;
  };
  declarationKind: "export";
  jsDoc: {
    doc: string;
    tags: tagDef[];
  };
}

async function handleDocs() {
  const jsonText = await Deno.readTextFile("./denoDocs.json");
  const json = JSON.parse(jsonText);
  const functions: fnDef[] = [];
  const variables = [];

  json.forEach((def: fnDef) => {
    if (def.kind === "function") {
      functions.push(def);
    } else if (def.kind === "variable") {
      variables.push(def);
    }
  });

  let markdown = "";

  functions.forEach((fun) => {
    if (fun.jsDoc) {
      console.log(`fun:`, fun);
      if (markdown) {
        markdown += "\n\n";
      }
      markdown += `## ${fun.name}\n${fun.jsDoc.doc}`;
      fun.jsDoc.tags.forEach((tag) => {
        markdown += "\n\n";
        if (tag.kind === "unsupported") {
          markdown += tag.value;
        } else {
          markdown += `**${tag.kind}** ${tag.name || ""} ${tag.doc || ""}`;
        }
      });
    }
  });

  await Deno.writeTextFile("./docs.md", markdown);
}

handleDocs();
