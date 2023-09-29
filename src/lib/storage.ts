let cacheStorage: { [key: string]: any } = {};
let storageInited = false;

const storage = {
	localStorageSupported() {
		return typeof localStorage != 'undefined';
	},
	save() {
		localStorage.setItem('data', JSON.stringify(cacheStorage));
	},
	initStorage(key: string, value?: string) {
		if (!this.localStorageSupported()) return;
		if (!storageInited) {
			storageInited = true;
			const data = localStorage.getItem('data');
			if (data) cacheStorage = JSON.parse(data);
			else this.save();
		}
		if (typeof cacheStorage[key] == 'undefined') {
			cacheStorage[key] = {};
			this.save();
		}
		return cacheStorage[key];
	},
	loadStorage(key: string) {
		if (!this.localStorageSupported()) return;
		return this.initStorage(key);
	},
	getItem(storageKey: string, key: string) {
		if (!this.localStorageSupported()) return;

		if (typeof cacheStorage[storageKey] == 'undefined') this.loadStorage(storageKey);
		return cacheStorage[storageKey][key];
	},
	setItem(storageKey: string, key: string, value: any) {
		if (!this.localStorageSupported()) return;

		if (typeof cacheStorage[storageKey] == 'undefined') this.loadStorage(storageKey);
		cacheStorage[storageKey][key] = value;
		this.save();
	}
};

export default storage;
