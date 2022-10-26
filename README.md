Linker Framework
================

Core files of the linker framework.

## Documentation

[Documentation from your online shop project](https://github.com/petazeta/youronlineshop/blob/master/docs/linkerfmwk.md)

## Use Example
```

import {BasicNode, BasicLinker} from './linker.mjs';

class NodeClass extends BasicNode {};
class LinkerClass extends BasicLinker {};

NodeClass.linkerConstructor=LinkerClass;
LinkerClass.dataConstructor=NodeClass;

let myLinker = new LinkerClass('UsersCollection');
let myUser = myLinker.addChild(new NodeClass({name: 'Peter', age: 25}));
let userClone= myUser.clone();

```
