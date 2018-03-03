import {observable} from 'mobx';

export default class TodoModel {
	store;
	id;
	@observable text;
	@observable completed;

	constructor(store, id, text, completed) {
		this.store = store;
		this.id = id;
		this.text = text;
		this.completed = completed;
	}

	toggle() {
		this.completed = !this.completed;
	}

	destroy() {
		this.store.todos.remove(this);
	}

	settext(text) {
		this.text = text;
	}

	toJS() {
		return {
			id: this.id,
			text: this.text,
			completed: this.completed
		}
	}

	static fromJS(store, object) {
		return new TodoModel(store, object.id, object.text, object.completed);
	}
}
