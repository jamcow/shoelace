type SlBlurEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'sl-blur': SlBlurEvent;
  }
}

export default SlBlurEvent;
