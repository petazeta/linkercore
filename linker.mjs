import basicMixin from './basicmixin.mjs';
import linksMixin from './linksmixin.mjs';
import {commonMixin, linkerMixin, dataMixin, linkerExpressMixin, dataExpressMixin} from './linkermixin.mjs';

const BasicNode = dataExpressMixin(dataMixin(commonMixin(linksMixin(basicMixin(class {})))));

const BasicLinker = linkerExpressMixin(linkerMixin(commonMixin(linksMixin(basicMixin(class {})))));

export {BasicLinker, BasicNode}