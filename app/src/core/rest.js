import axios from 'axios'
import alert from '@/core/alert'
import Vue from 'vue'

const localHosts = [
  'localhost',
  '127.0.0.1'
]

export default {

  requestCount: 0,

  new () {
    let domain = ''
    if (localHosts.indexOf(window.location.hostname) === -1) {
      domain = 'https://service.bauexperts.de'
    }
    var instance = axios.create({
      baseURL: `${domain}/api/`,
      headers: {
        'Authorization': 'Bearer ' + auth.getToken(),
        'Content-type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })

    instance.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      return Promise.reject(error)
    })

    return instance
  },

  onError (error) {
    if (!error.response) {
      console.error(error)
    } else if (error.response.status === 400) {
      // This means that this is an form validation error
      alert.error('Validierung fehlgeschlagen. Einträge entweder fehlend oder fehlerhaft.')
    } else if (error.response.status === 401) {
      // This means the token is not acceptable
      auth.logout()
      window.router.push({ name: 'login' })
    } else if (error.response.status === 403) {
      alert.error('Dafür verfügen Sie nicht über die benötigten Zugriffsrechte.')
    } else if (error.response.status === 404) {
      alert.error('Die angeforderte Ressource wurde nicht gefunden.')
    } else if (error.response.status === 406) {
      // This means that api throw an exception
      alert.error(error.response.data.message)
    }
  },

  get (url, data, callback, onError) {
    var self = this
    this.startProgress()
    this.new().get(url, { params: data }).then(function (response) {
      self.stopProgress()
      callback(response.data)
    }).catch(function (error) {
      if (typeof onError === 'function') {
        onError(error)
      } else {
        self.onError(error)
      }
      self.stopProgress()
    })
  },

  post (url, data, callback, onError) {
    var self = this
    this.startProgress()
    this.new().post(url, data).then(function (response) {
      self.stopProgress()
      callback(response.data)
    }).catch(function (error) {
      if (typeof onError === 'function') {
        onError(error)
      } else {
        self.onError(error)
      }
      self.stopProgress()
    })
  },

  put (url, data, callback, onError) {
    var self = this
    this.startProgress()
    this.new().put(url, data).then(function (response) {
      self.stopProgress()
      callback(response.data)
    }).catch(function (error) {
      if (typeof onError === 'function') {
        onError(error)
      } else {
        self.onError(error)
      }
      self.stopProgress()
    })
  },

  delete (url, data, callback, onError) {
    var self = this
    this.startProgress()
    this.new().delete(url, data).then(function (response) {
      self.stopProgress()
      callback(response.data)
    }).catch(function (error) {
      if (typeof onError === 'function') {
        onError(error)
      } else {
        self.onError(error)
      }
      self.stopProgress()
    })
  },

  getSync (url, data, onError) {
    return new Promise(resolve => this.get(url, data, resolve, onError))
  },

  postSync (url, data, onError) {
    return new Promise(resolve => this.post(url, data, resolve, onError))
  },

  putSync (url, data, onError) {
    return new Promise(resolve => this.put(url, data, resolve, onError))
  },

  deleteSync (url, data, onError) {
    return new Promise(resolve => this.delete(url, data, resolve, onError))
  },

  startProgress () {
    this.requestCount++
    if (Vue.prototype.$sharedData) {
      Vue.prototype.$sharedData.isSubmitting = true
    }

    if (window.nprogress) {
      window.nprogress.start()
    }
  },

  stopProgress () {
    this.requestCount--
    if (this.requestCount === 0) {
      if (Vue.prototype.$sharedData) {
        Vue.prototype.$sharedData.isSubmitting = false
      }

      if (window.nprogress) {
        window.nprogress.done()
      }
    }
  }

}
