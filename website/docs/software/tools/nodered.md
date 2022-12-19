---
title: 'Node-RED'
slug: /software/tools/nodered
---

# Node-RED

The FSML Node-RED tool is under development.

_Node-RED is a programming tool for wiring together hardware devices, APIs and online services in new and interesting ways. It provides a browser-based editor that makes it easy to wire together flows using the wide range of nodes in the palette that can be deployed to its runtime in a single-click._


## Introduction to Node-RED

Node-RED is a powerful tool for building IoT applications, allowing you to quickly and easily connect hardware devices, APIs, and online services using a visual, drag-and-drop interface. In this article, we'll cover the basics of using Node-RED and how to get started building your own projects.

###  Setting up Node-RED
To use Node-RED, you'll need to install it on your computer. The easiest way to do this is to use the Node.js package manager (npm), which comes with Node.js. First, make sure you have Node.js installed on your machine. Then, open a terminal or command prompt and enter the following command:

```bash
    $> npm install -g node-red
```

This will install Node-RED globally on your machine. Once the installation is complete, you can start Node-RED by running the following command:


```bash
    $> node-red
```

This will start the Node-RED server, and you should see a message indicating that it is running. You can then access the Node-RED editor by opening a web browser and navigating to http://localhost:1880.

### Building a Node-RED flow

In Node-RED, you build applications by creating a flow of interconnected nodes. Each node represents a specific function, such as reading data from a sensor, making an HTTP request, or displaying data on a chart. To build a flow, simply drag and drop nodes from the palette on the left onto the canvas in the center. Then, connect the nodes together by dragging wires from the output of one node to the input of another.

As you build your flow, you can configure the properties of each node by double-clicking on it and filling in the form that appears. For example, you might specify the URL of an HTTP endpoint, the port number of a sensor, or the format of a message to be displayed.


### Configuring Node-RED
In order to be able to have access to public npm packages you will need to tap into Node-RED's settings file and update it with the npm package you can you Node-RED editor to come with.

### Deploying your flow
Once you've finished building your flow, you can deploy it by clicking the "Deploy" button in the top-right corner of the editor. This will send your flow to the Node-RED server, where it will start running. You can then interact with your flow by sending it data, or by using the built-in debug and dashboard nodes to monitor its behavior.

### Next steps
Congratulations, you now know the basics of using Node-RED! To learn more, be sure to check out the official Node-RED documentation and the many tutorials and examples available online. With also provide a Node-RED example at [Node-RED FSML Example](/examples/node-red-phycus)
