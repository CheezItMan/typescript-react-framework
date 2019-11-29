import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {

  abstract eventsMap(): { [key: string]: () => void };
  abstract template(): string;

  constructor (public parent: Element, public model: T) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
      console.log('re-rendering');
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

  render(): void {
    console.log('rendering');
    console.log(this.model);
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.innerHTML = '';
    

    this.parent.append(templateElement.content);
  }

}