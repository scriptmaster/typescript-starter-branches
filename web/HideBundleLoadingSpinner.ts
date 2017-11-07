// import { memoize } from 'decko';

export default class HideBundleLoadingSpinner {

	id = 'bundle-loading-spinner'
	fadeOutCls = 'fade-out'

	constructor() {

		// setTimeout(() => { document.body.classList.remove('boot-or-bundle-loading') }, 1000);
		setTimeout(() => {
			Array.prototype.forEach.call(document.head.getElementsByTagName('link'), (a) => {
				a.href=a.attributes['data-href'].value;
				a.onload = this.fadeOut
			})
		}, 0)
	}

	fadeOut = () => {
		console.log(`JS and CSS Loaded. Fading out ${this.id}.`)
		//fade
		this.el = document.getElementById(this.id);
		this.el && this.el.classList.add(this.fadeOutCls)
		//Out
		setTimeout(this.remove, 550)
	}

	remove = () => {
		var el = this.el
		el && el.style &&
			(el.style.display = 'none') &&
			(el.remove||el.removeNode).call(el);
	}

}
