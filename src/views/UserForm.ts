import { User } from '../models/User';
import { View } from './View';
import { UserProps } from '../types/UserProps';

export class UserForm extends View<User, UserProps> {

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button.setnamebtn': this.onSetNameClick,
      'mouseover:input': this.onHoverHeader,
      'click:button.setage': this.onSetRandomAgeClick,
      'click:.save-user': this.onSaveClick,
    };
  }

  onSaveClick = () => {
    this.model.save();
  }

  template(): string {
    return `
      <div>
        <input class="${this.model.get('name')}" placeholder="${this.model.get('name')}" />
        <button class="btn primary setnamebtn">Update Name</button>
        <button class="btn secondary setage">Set Random Age</button>
        <button class="btn save-user">Save user</button>
      </div>
    `;
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      this.model.set({ name: input.value })
    }
  }

  onSetRandomAgeClick = (): void => {
    this.model.setRandomAge();
  }

  onHoverHeader = () => {
  }
}