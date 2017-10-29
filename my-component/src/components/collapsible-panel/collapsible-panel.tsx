import {Component, Prop, State} from '@stencil/core';

// stencil1-4
@Component({
    tag: 'collapsible-panel',
    styleUrl: 'collapsible-panel.scss',
    shadow: true
})
export class CollapsiblePanel {
  @Prop() title: string;
  @State() collapsed: boolean;

  toggle() {
    this.collapsed = !this.collapsed;
  }

  render() {
      return (
          <div>
              <div id="header" onClick={this.toggle.bind(this)}>
                  <span>{this.title}</span>
              </div>
              <div id="content" hidden={this.collapsed}>
                  <slot />
              </div>
          </div>
      );
  }
}
