var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, State } from '@stencil/core';
let CollapsiblePanel = class CollapsiblePanel {
    toggle() {
        this.collapsed = !this.collapsed;
    }
    render() {
        return (h("div", null,
            h("div", { id: "header", onClick: this.toggle.bind(this) },
                h("span", null, this.title)),
            h("div", { id: "content", hidden: this.collapsed },
                h("slot", null))));
    }
};
__decorate([
    Prop()
], CollapsiblePanel.prototype, "title", void 0);
__decorate([
    State()
], CollapsiblePanel.prototype, "collapsed", void 0);
CollapsiblePanel = __decorate([
    Component({
        tag: 'collapsible-panel',
        styleUrl: 'collapsible-panel.scss',
        shadow: true
    })
], CollapsiblePanel);
export { CollapsiblePanel };
