Linker Framework
================

Core files of the linker framework.

## Documentation

[Documentation from your online shop project](https://github.com/petazeta/youronlineshop/blob/master/docs/linkerfmwk.md)

## Use Example
```

import {BasicNode, BasicLinker} from './linker.mjs';

class Node extends BasicNode {};
class Linker extends BasicLinker {};

Node.linkerConstructor=Linker;
Linker.dataConstructor=Node;

let myLinker = new Linker('UsersCollection');
let myUser = myLinker.addChild(new Node({name: 'Peter', age: 25}));
let userClone= myUser.clone();

```
