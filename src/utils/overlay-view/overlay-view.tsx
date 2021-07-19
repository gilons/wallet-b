import React from "react";
import ReactDOM from "react-dom";
import { OverlayConfig, Position } from "./overlays.type";

export class OverlayView {

  constructor({ id, maxHeight, maxWidth }: OverlayConfig) {
    this.id = "overlay-content-id-" + id;
    this.init();
    this.maxWidth = maxWidth || 500;
    this.maxHeight = maxHeight || 200;
  }

  id = "";

  private containerId: string = "overlay-container-id";
  private maxHeight;
  private maxWidth;
  private closerId: string = "overlay-close-container";
  private container: HTMLElement | null = document.getElementById(
    this.containerId
  );
  private subContainer: HTMLElement | null = null;
  private closer: HTMLElement | null = document.getElementById(this.id);
  private content: HTMLElement | null = document.getElementById(this.id);
  private removeMousePositionListener() {
    window.removeEventListener("mousemove", this.mouseMoveEventListener);
  }

  private show = false;
  get shown() {
    return this.show;
  }
  set shown(val) {
    this.show = val;
    this.computeContentStyles();
    this.computeContainerStyle();
  }

  private subContainerStyles = `
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.5s 1s ease-in-out;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

  private init() {
    if (!this.container) {
      this.container = document.createElement("div");
      this.container.id = this.containerId;
      document
        .getElementsByTagName("body")[0]
        .insertAdjacentElement("afterbegin", this.container);
    }
    this.subContainer = document.createElement("div");
    this.subContainer.style.cssText = this.subContainerStyles;
    this.container.appendChild(this.subContainer);
    this.content = document.createElement("div");
    this.content.id = this.id;
    this.subContainer.appendChild(this.content);
    this.closer = document.createElement("div");
    this.closer.id = this.closerId;
    this.subContainer?.appendChild(this.content);
    this.subContainer?.appendChild(this.closer);
    this.addMousePositionListener();
    this.computeContainerStyle();
  }

  computeContainerStyle() {
    const styles = `
      position: fixed;
      overflow: hidden;
      padding-top: 0px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: ${this.shown ? 100 : 0}vh;
      width: ${this.shown ? 100 : 0}vw;
      z-index: ${this.shown ? 11 : 0};
      `;
    if (this.container) {
      this.container.style.cssText = styles;
    }
    const closerStyle = `
    ${styles}
    background-color: rgba(0,0,0,0.5);
    z-index: ${this.shown ? 12 : 0};
    `;
    if (this.closer) {
      this.closer.style.cssText = closerStyle;
    }
  }

  computeContentStyles() {
    const dynamicStyles = `
        max-width: ${this.shown ? this.maxWidth : 0}px;
        max-height: ${this.shown ? this.maxHeight : 0}px;
      `;
    const styles = `
        z-index: 15;
        margin-top: 20vh;
        transition: max-height 0.5s 1s ease-in-out;
        height: auto;
        position: absolute;
        ${dynamicStyles}
      `;
    if (this.content) {
      this.content.style.cssText = styles;
    }
  }

  private mouseMoveEventListener = (e: MouseEvent) => {
    if (!this.shown) this.position = { x: e.pageX, y: e.pageY };
  };

  private addMousePositionListener() {
    window.addEventListener("mousemove", this.mouseMoveEventListener);
  }

  pos: Position = {
    x: 0,
    y: 0,
  };

  get position() {
    return this.pos;
  }
  set position(val) {
    this.pos = val;
    this.computeContentStyles();
  }
 
  destroy() {
    this?.removeMousePositionListener();
    const element = document?.getElementById(this.containerId);
    element && element.remove();
  }

  hideOverlay() {
    this.shown = false;
    ReactDOM.unmountComponentAtNode(this.content as Element);
  }

  showOverlay(Component: React.ReactElement) {
    if (this.content) {
      this.shown = true;
      ReactDOM.createPortal(Component, this.content);
      if (this.closer) {
        this.closer.addEventListener("click", () => this.hideOverlay());
      }
    } else {
      this.init();
      this.showOverlay(Component);
    }
  }
}
