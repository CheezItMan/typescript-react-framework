import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  eventsMap(): { [key: string]: () => void } {
    return {};
  }
  abstract template(): string;

  constructor (public parent: Element, public model: T) {
    this.bindModel();
  }

  regionsMap (): { [key: string]: string } {  
    return {};
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  private bindEvents(fragment: DocumentFragment) {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      const elements = fragment.querySelectorAll(selector);

      elements.forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];

      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.mapRegions(templateElement.content);
    this.bindEvents(templateElement.content);

    // View Nesting
    this.onRender();
    
    this.parent.append(templateElement.content);
  }

}