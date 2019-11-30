import { View } from './View';
import { User } from '../models/User'
import { UserProps } from '../types/UserProps';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends View<User, UserProps> {

  onRender(): void {
    // Bind regions
    const userShow = new UserShow(this.regions.userShow, this.model);
    userShow.render();
    const userForm = new UserForm(this.regions.userForm, this.model);
    userForm.render();
  }

  regionsMap = (): { [key: string]: string }  => {
    return { 
      userShow: '.user-show',
      userForm: '.user-form',
    }
  }
  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `
  }
}