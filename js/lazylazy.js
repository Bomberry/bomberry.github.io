// https://www.merixstudio.com/blog/lazy-loading-pure-javascript/

// export class LazyLoad {
//  constructor(element, options) {
//    this.options = {
//      selector: ['data-src'],
//      rootMargin: '550px 0px',
//      threshold: 0.01,
//      ...options,
//    };
//    this.element = element;
//    this.resources = this.element.querySelectorAll('[data-src]');
//
//    this.bindEvents();
//    this.init();
//  }
//
//  bindEvents() {
//    this._lazyLoadAsset = this._lazyLoadAsset.bind(this);
//  }
//
//  init() {
//    const assetsObserver = new IntersectionObserver((entries, assetsObserver) => {
//      entries.filter(entry => entry.isIntersecting).forEach(entry => {
//        this._lazyLoadAsset(entry.target);
//        assetsObserver.unobserve(entry.target);
//      });
//    }, this.options);
//    this.resources.forEach(resource => {
//      assetsObserver.observe(resource);
//    });
//  }
//  _lazyLoadAsset(asset) {
//    const src = asset.getAttribute(this.options.selector);
//    if (!src) {
//      return;
//    }
//    asset.src = src;
//  }
// }
