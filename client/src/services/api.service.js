export class ApiService {
	#apiPath = 'http://localhost:5000/api' //приватное поле


    //fech js отправка запроса
	#makeRequest(url, options) {
		return fetch(this.#apiPath + url, options).then(res => res.json())
		// return fetch(this.#apiPath + url, {
		// 	...options,
		// 	credentials: 'include'
		// }).then(res => res.json())// fetch js отправка запроса
	}

	get(url) {
		return this.#makeRequest(url, { method: 'GET' })
	}

	delete(url) {
		return this.#makeRequest(url, { method: 'DELETE' })
	}

	post(url, data) { //выступает за криейт и апдейт
		return this.#makeRequest(url, {
			headers: {
				'Content-Type': 'application/json'  //то что отсылаем именно json
			},
			body: JSON.stringify(data),
			method: 'POST'
		})
	}
}